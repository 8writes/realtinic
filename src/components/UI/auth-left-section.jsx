import { Logo, Typography } from '@/components'
import LogoImg from '../../../public/LogoWhite.svg'

const AuthLeftSection = () => {
  return (
      <div
        className=' hidden min-h-screen lg:grid gap-5 py-5 px-10 '
        style={{
          backgroundImage: `url('Signup.svg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundOrigin: 'border',
          imageRendering: 'pixelated',
        }}
        loading='lazy'
      >
        <span className='py-10 px-7'>
          <Logo logoSrc={LogoImg} variant='white' />
        </span>
        <Typography
          variant='h1'
          className='flex-initial max-w-lg text-white mt-28 px-7'
        >
          Property management made easy
        </Typography>
        <span className='inline-flex gap-5 px-7 mt-auto'>
          <Typography variant='p.medium' className='text-white'>
            ©2022 Realtinic. All Rights Reserved.
          </Typography>
          <Typography variant='p.medium' className='text-white'>
            Privacy Policy
          </Typography>
        </span>
      </div>
  )
}

export default AuthLeftSection
