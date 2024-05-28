/** @format */

import React, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import { SubmitButton } from '@/components/Button'
import { ErrorMessage, InputField, SuccessMessage } from '@/components/UI'

const VerificationFailedForm = () => {
  // States
  const [emailError, setEmailError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  // submitted data format
  const [formData, setFormData] = useState({ email: '' })
  // Submit button visibility check
  const isButtonDisabled = !formData.email || !!emailError
  // Handle form
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
  // API post request
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Button loader starts
    setIsLoading(true)
    // Post req
    try {
      const response = await axios.post(
        'https://realtinic.onrender.com/api/authentication/verify/resend',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (response.status === 200) {
        // Display success message
        setSuccessMessage('A new link has been sent to your email.')
        // Push user after successful login
      } else {
        // Handle unexpected errors
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
      {/** Form begins */}
      <form
        className='grid justify-items-center gap-5 py-5 px-5'
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
            label='Request new link'
            isLoading={isLoading}
            isDisabled={isButtonDisabled}
          />
        </div>
      </form>
      {/** Form ends */}
    </>
  )
}
export default VerificationFailedForm
