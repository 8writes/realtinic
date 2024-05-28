/** @format */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@/components'

const SuccessMessage = ({ successMessage, setSuccessMessage }) => {
  // Remove the success alert
  useEffect(() => {
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage('')
      }, 14000)

      return () => clearTimeout(timeoutId)
    }
  }, [successMessage, setSuccessMessage])

  return (
    <>
      {successMessage && (
        <div
          className='fixed top-0 left-0 right-0 text-center z-50 justify-center bg-green-300 rounded-sm p-2 py-3 my-2 max-w-xs mx-auto'
          role='alert'>
          <Typography
            variant='p.medium'
            className='font-semibold text-purple-900 my-auto'>
            {successMessage}
          </Typography>
        </div>
      )}
    </>
  )
}

SuccessMessage.propTypes = {
  successMessage: PropTypes.string.isRequired,
  setSuccessMessage: PropTypes.func.isRequired
}

export default SuccessMessage
