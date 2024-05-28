/** @format */

import React, { useState } from 'react'
import validator from 'validator'
import axios from 'axios'
import zxcvbn from 'zxcvbn'
import Link from 'next/link'
import PasswordStrength from './passwordStrength'
import { Input } from '@nextui-org/input'
import { Typography } from '@/components'
import { useRouter } from 'next/navigation'
import { SubmitButton } from '@/components/Button'
import { EyeFilledIcon, EyeSlashFilledIcon } from '@/components/icons'
import { ErrorMessage, SuccessMessage, InputField } from '@/components/UI'
// import Image from 'next/image'
// import fb from '../../../public/facebook.svg'
// import glg from '../../../public/google.svg'
// import apple from '../../../public/apple.svg'

const SignUpFormTenant = () => {
  const router = useRouter()
  // States
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [countryError, setCountryError] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState()
  const [isLoading, setIsLoading] = useState(false)
  // Array for login imagesF
  // const socialsLogin = [fb, glg, apple]
  // Data format
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    is_manager: false
  })
  // Password eye vector visibility toggle
  const toggleVisibility = () => setIsVisible(!isVisible)
  // Submit button visibility check
  const isButtonDisabled =
    !formData.first_name ||
    !formData.last_name ||
    !formData.email ||
    !formData.password ||
    !formData.country ||
    formData.country === '-- Select --' ||
    !!firstNameError ||
    !!lastNameError ||
    !!emailError ||
    !!passwordError ||
    !!countryError
  // Handle form
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Validate country
    if (name === 'country') {
      if (!value || value === '-- Select --') {
        setCountryError('Required')
      } else {
        setCountryError('')
      }
    } else {
      setCountryError('')
    }
    // Validate first name
    if (name === 'first_name') {
      if (!value) {
        setFirstNameError('Required')
      } else {
        setFirstNameError('')
      }
    }
    // Validate last name
    if (name === 'last_name') {
      if (!value) {
        setLastNameError('Required')
      } else {
        setLastNameError('')
      }
    }
    // Validate email
    if (name === 'email') {
      if (!validator.isEmail(value)) {
        setEmailError('Please enter a valid email')
      } else {
        setEmailError('')
      }
    }
    // Special characters in the password check
    const hasSpecialCharacters = /[!@#$%^&*()_+{}\[\]:<>,.?~\\]/.test(value)
    // Validate password
    if (name === 'password') {
      const result = zxcvbn(value)
      if (value.length < 8) {
        setPasswordError('Password must be at least 8 characters long')
      } else if (!hasSpecialCharacters) {
        setPasswordError('Password must contain special characters')
      } else {
        setPasswordError('')
      }
      // Update password strength
      if (result.score === 4) {
        setPasswordStrength('Strong')
      } else if (result.score === 3) {
        setPasswordStrength('Medium')
      } else {
        setPasswordStrength('Weak')
      }
    }
  }
  // API post request
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Button loader starts
    setIsLoading(true)
    // post req
    try {
      const response = await axios.post(
        'https://realtinic.onrender.com/api/authentication/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (response.status === 201) {
         setSuccessMessage('An activation link has been sent to your email.')
      } else {
        // Handle unexpected errors
        throw new Error(`Unexpected response: ${response.status}`)
      }
    } catch (error) {
      if (error.response) {
        // Handle specific HTTP error errors
        if (error.response.status === 400) {
          setErrorMessage('An account with this email already exist.')
          // console.error('Error 400:', error)
        } else if (error.response.status === 500) {
          setErrorMessage('An unexpected error occurred.')
          //  console.error('Error 500:', error)
        } else {
          setErrorMessage('An unexpected error occurred.')
          //  console.error('Unexpected response:', error)
        }
      } else {
        // Handle non-HTTP errors
        setErrorMessage('Connection Unstable.')
        //   console.error('Non-HTTP error:', error)
      }
    } finally {
      // Button loader ends
      setIsLoading(false)
    }
  }
  // The end
  return (
    <>
      {/** Form Alerts */}
      <SuccessMessage
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
      <ErrorMessage
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      {/** Form starts */}
      <form
        className='grid gap-5 py-5 px-5 md:px-10'
        onSubmit={handleSubmit}
        method='POST'>
        <InputField
          label='First Name'
          type='text'
          name='first_name'
          value={formData.first_name}
          onChange={handleInputChange}
          error={firstNameError}
          clearError={() => {
            setFormData({
              ...formData,
              first_name: ''
            })
            setFirstNameError('')
          }}
        />
        <InputField
          label='Last Name'
          type='text'
          name='last_name'
          value={formData.last_name}
          onChange={handleInputChange}
          error={lastNameError}
          clearError={() => {
            setFormData({
              ...formData,
              last_name: ''
            })
            setLastNameError('')
          }}
        />
        <InputField
          label='Email address'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          error={emailError}
          clearError={() => {
            setFormData({
              ...formData,
              email: ''
            })
            setEmailError('')
          }}
        />
        <Typography variant='p.medium'>
          <label>Country</label>
        </Typography>
        <>
          <select
            name='country'
            className='w-full p-2 my-1 border'
            value={formData.country}
            onChange={handleInputChange}>
            <option>-- Select --</option>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>South Africa</option>
          </select>
          {countryError && (
            <Typography variant='p.medium' className='text-red-600'>
              {countryError}
            </Typography>
          )}
        </>
        <div>
          <label>
            <Typography variant='p.medium'>Password</Typography>
          </label>
          <Input
            variant='underlined'
            placeholder='Enter your password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            className='w-80 p-1 my-1 text-black dark:text-white'
            size='lg'
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={toggleVisibility}>
                {isVisible
                  ? (
                  <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                    )
                  : (
                  <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                    )}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
          />
          {passwordError && (
            <Typography variant='p.medium' className='text-red-600'>
              {passwordError}
            </Typography>
          )}
        </div>
        <PasswordStrength strength={passwordStrength} />
        <SubmitButton
          type='submit'
          label='Create Account'
          isLoading={isLoading}
          isDisabled={true}
        />
      </form>
      {/** Form starts */}
      <>
        <span className='grid justify-center justify-items-center gap-4'>
          {/** ALTERNATIVE SIGN UP BLOCK
             *  <Typography variant='p.medium'>--- Or Register with ---</Typography>
            <span>
              <ul className='inline-flex gap-4 py-2'>
                {socialsLogin.map((item, index) => (
                  <li key={index}>
                    <Image src={item} alt='' width='70' height='70' />
                  </li>
                ))}
              </ul>
            </span> */}
          <span className='inline-flex py-5'>
            <Typography variant='p.medium'>
              Already have an account?
            </Typography>
            <Typography variant='p.medium'>
              <Link href='login' className='text-purple-800 mx-1'>
                Login
              </Link>
            </Typography>
          </span>
        </span>
      </>
    </>
  )
}

export default SignUpFormTenant
