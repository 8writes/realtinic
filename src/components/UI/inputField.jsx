import React from 'react'
import { Input } from '@nextui-org/input'
import { Typography } from '@/components'

function InputField({ label, type, name, value, onChange, error, clearError }) {
  return (
    <div>
      <label>
        <Typography variant='p.medium'>{label}</Typography>
      </label>
      <Input
        variant='underlined'
        placeholder={`Enter your ${label.toLowerCase()}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={error ? true : false}
        className='max-w-screen-sm md:w-80 p-1 my-1 text-black dark:text-white'
        size='lg'
        autoComplete='on'
        isClearable={true}
        onClear={clearError}
        required
      />
      {error && (
        <Typography variant='p.medium' className='text-red-600'>
          {error}
        </Typography>
      )}
    </div>
  )
}

export default InputField
