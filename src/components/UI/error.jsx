/** @format */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@/components'

const ErrorMessage = ({ errorMessage, setErrorMessage }) => {
  // Remove the error alert
  useEffect(() => {
    if (errorMessage) {
      const timeoutId = setTimeout(() => {
        setErrorMessage('')
      }, 6000)

      return () => clearTimeout(timeoutId)
    }
  }, [errorMessage, setErrorMessage])

  return (
    <>
      {errorMessage && (
        <div
          className='fixed top-0 left-0 right-0 text-center z-50 justify-center bg-red-200 rounded-sm p-2 py-3 my-2 max-w-xs mx-auto'
          role='alert'>
          <Typography
            variant='p.medium'
            className='font-medium text-red-500 my-auto'>
            {errorMessage}
          </Typography>
        </div>
      )}
    </>
  )
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  setErrorMessage: PropTypes.func.isRequired
}

export default ErrorMessage
