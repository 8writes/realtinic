/** @format */

import React, { useState } from 'react'
import { Typography } from '@/components'
import axios from 'axios'
import Link from 'next/link'
import validator from 'validator'
import { SubmitButton } from '@/components/Button'
import { ErrorMessage, InputField, SuccessMessage } from '@/components/UI'

const ForgotForm = () => {
  // States
  const [emailError, setEmailError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  // Data format state
  const [formData, setFormData] = useState({ email: '' })
  // Submit button visibility check
  const isButtonDisabled = !formData.email || !!emailError
  // Handle form Input
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Validate email
    if (name === 'email') {
      if (!validator.isEmail(value)) {
        setEmailError('Please enter a valid email')
      } else {
        setEmailError('')
      }
    }
  }
  // API Post Request
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Button loader starts
    setIsLoading(true)
    // Post req
    try {
      const response = await axios.post(
        'https://realtinic.onrender.com/api/authentication/password/reset/email',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (response.status === 200) {
        // Display success message
        setSuccessMessage('A link has been sent to your email.')
      } else {
        // Handle unexpected error
        throw new Error(`Unexpected response: ${response.status}`)
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
      {/** Form Alerts */}
      <SuccessMessage
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
      <ErrorMessage
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      {/** Form Begins */}
      <form
        className='grid gap-5 py-5 px-5'
        onSubmit={handleSubmit}
        method='POST'>
        <div className='grid gap-5 w-full md:w-fit'>
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
          <SubmitButton
            type='submit'
            label='Submit'
            isLoading={isLoading}
            isDisabled={true}
          />
        </div>
      </form>
      {/** Form Ends */}
      <>
        <span className='grid justify-center justify-items-center gap-4'>
          <span className='inline-flex py-5'>
            <Typography variant='p.medium'>Remembered Password? </Typography>
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
export default ForgotForm
