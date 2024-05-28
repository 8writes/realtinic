/** @format */

import React, { useState } from 'react'
import { Typography } from '@/components'
import axios from 'axios'
import Link from 'next/link'
import { Input } from '@nextui-org/input'
import { SubmitButton } from '@/components/Button'
import { ErrorMessage, SuccessMessage } from '@/components/UI'
import { EyeFilledIcon, EyeSlashFilledIcon } from '@/components/icons'
import { useSearchParams } from 'next/navigation'

const ResetForm = () => {
  // States
  const [passwordError, setPasswordError] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  // Fetch token from url
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  // Data format
  const [formData, setFormData] = useState({
    new_password: '',
    token
  })
  // Submit button visibility check
  const isButtonDisabled = !formData.password || !!passwordError
  // Password eye vector visibility toggle
  const toggleVisibility = () => setIsVisible(!isVisible)
  // Handle form
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Validate password
    if (name === 'password') {
      if (!value) {
        setPasswordError('Required')
      } else {
        setPasswordError('')
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
        'https://realtinic.onrender.com/api/authentication/password/reset',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status === 200) {
        // Display success message
        setSuccessMessage('Password has been successfully changed.')
      } else {
        // Handle unexpected errors
        setErrorMessage('An error has occurred.')
      }
    } catch (error) {
      if (error.response) {
        // Handle specific HTTP errors
        if (error.response.status === 404) {
          setErrorMessage('Service Unavailable')
        } else if (error.response.status === 401) {
          setErrorMessage('Service Unavailable')
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

        <form
          className='grid gap-5 py-5 px-5'
          onSubmit={handleSubmit}
          method='POST'>
          <div>
            <label>
              <Typography variant='p.medium'>New Password</Typography>
            </label>
            <Input
              variant='underlined'
              placeholder='Enter your new password'
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
                  {isVisible ? (
                    <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                  ) : (
                    <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
            />
          </div>
          <SubmitButton
            type='submit'
            label='Submit'
            isLoading={isLoading}
            isDisabled={isButtonDisabled}
          />
        </form>
        <span className='grid justify-center justify-items-center gap-4'>
          <span className='inline-flex py-5'>
            <Typography variant='p.medium'>Remembered Password?</Typography>
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
export default ResetForm
