/** @format */

import React, { useState } from 'react'
import validator from 'validator'
import axios from 'axios'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { Typography } from '@/components'
import { Input } from '@nextui-org/input'
import { SubmitButton } from '@/components/Button'
import { EyeFilledIcon, EyeSlashFilledIcon } from '@/components/icons'
import { ErrorMessage, SuccessMessage, InputField } from '@/components/UI'
// import Image from 'next/image'
// import fb from '../../../public/facebook.svg'
// import glg from '../../../public/google.svg'
// import apple from '../../../public/apple.svg'

const LoginForm = () => {
  const router = useRouter()
  // States
  const [emailError, setEmailError] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // Password eye vector visibility toggle
  const toggleVisibility = () => setIsVisible(!isVisible)
  // Array for login images
  // const socialsLogin = [fb, glg, apple]
  // Data format
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  // Submit button visibility check
  const isButtonDisabled =
    !formData.username || !!emailError || !formData.password
  // Handle form
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Validate email
    if (name === 'username') {
      if (!validator.isEmail(value)) {
        setEmailError('Please enter a valid email')
      } else {
        setEmailError('')
      }
    }
  }
  // API post request
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Button loader starts
    setIsLoading(true)
    // Post req
    try {
      const response = await axios.post(
        'https://realtinic.onrender.com/api/authentication/signin',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (response.status === 200) {
        // Set the access token
        Cookies.set('accessToken', response.data.token.access, {
          secure: false,
          httpOnly: false,
          sameSite: '',
          expires: new Date(new Date().getTime() + 3600 * 1000) // 1 hour
        })
        // Set the refresh token
        Cookies.set('refreshToken', response.data.token.refresh, {
          secure: false,
          httpOnly: false,
          sameSite: '',
          expires: new Date(new Date().getTime() + 30 * 24 * 3600 * 1000) // 30 days
        })
        // Display success message
        setSuccessMessage('Account login successful!')
        // Push users after successful login
        setTimeout(() => {
          router.push('/dashboard')
        }, 1000)
      } else {
        // Handle unexpected errors
        throw new Error(`Unexpected response: ${response.status}`)
      }
    } catch (error) {
      if (error.response) {
        // Handle specific HTTP errors
        if (error.response.status === 404) {
          setErrorMessage('Incorrect email or password.')
        } else if (error.response.status === 401) {
          setErrorMessage('Incorrect email or password.')
        } else {
          setErrorMessage('Oops! An error occurred.')
        }
      } else {
        // Handle non-HTTP errors
        setErrorMessage('Connection Unstable.')
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
      {/** Form begins */}
      <form
        className='grid gap-5 py-5 px-5'
        onSubmit={handleSubmit}
        method='POST'>
        <InputField
          label='Email address'
          type='email'
          name='username'
          value={formData.username}
          onChange={handleInputChange}
          error={emailError}
          clearError={() => {
            setFormData({
              ...formData,
              username: ''
            })
            setEmailError('')
          }}
        />
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
            required
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
          <span className='flex justify-end '>
            <Typography variant='p.medium' className='text-purple-800'>
              <Link href='forgot-password'> Forgot password?</Link>
            </Typography>
          </span>
        </div>
        <SubmitButton
          type='submit'
          label='Login Account'
          isLoading={isLoading}
          isDisabled={true}
        />
      </form>
      {/** Form ends */}
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
              Don&apos;t have an account?
            </Typography>
            <Typography variant='p.medium'>
              <Link href='signup' className='text-purple-800 mx-1'>
                Sign Up
              </Link>
            </Typography>
          </span>
        </span>
      </>
    </>
  )
}
export default LoginForm
