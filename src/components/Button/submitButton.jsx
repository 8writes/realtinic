import { Button } from '@nextui-org/button'

function SubmitButton({ label, isDisabled, isLoading }) {
  return (
    <Button
      type='submit'
      size='lg'
      isLoading={isLoading}
      className='bg-purple-800 w-full text-white'
      isDisabled={isDisabled}
    >
      {label}
    </Button>
  )
}

export default SubmitButton
