/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@/components'

function PasswordStrength ({ strength, error }) {
  return (
    <span>
      {strength && (
        <span className='inline-flex'>
          <Typography variant='p.medium'>Password Strength:</Typography>
          <Typography
            variant='p.medium'
            className={
              strength === 'Strong'
                ? 'text-green-500'
                : strength === 'Medium'
                  ? 'text-yellow-500'
                  : 'text-red-500'
            }>
            {strength}
          </Typography>
        </span>
      )}
      {error && (
        <Typography variant='p.medium' className='text-red-600'>
          {error}
        </Typography>
      )}
    </span>
  )
}
// Password Strength
PasswordStrength.propTypes = {
  strength: PropTypes.oneOf(['Strong', 'Medium']),
  error: PropTypes.string
}
export default PasswordStrength
