import Image from 'next/image'
import arrowDown from '../../../public/arrowDown.svg'
import arrowUp from '../../../public/arrowUp.svg'
import { Logo, Typography } from '..'
import logoSrc from '../../../public/Logo.svg'

const AuthRightSection = ({ children, formName }) => {
  return (
    <>
      <div className='relative flex flex-1 justify-center'>
        <span className='absolute bottom-10  left-5'>
          <Image
            src={arrowUp}
            className=' hidden xl:flex'
            alt='arrow'
            width='150'
            height='100'
            priority
          />
        </span>

        <div className='my-auto'>
          {/** HEADER BLOCK */}
          <span className=' flex  justify-center lg:hidden py-5 px-5'>
            <Logo logoSrc={logoSrc} variant='black' />
          </span>
          <div className='grid justify-center justify-items-center text-center my-2 py-3 '>
            <Typography variant='h2'>{formName}</Typography>
          </div>

          {children}

          {/** FOOTER BLOCK */}
          <div className='flex justify-center my-5 lg:hidden'>
            <span className='inline-flex gap-5 '>
              <Typography
                variant='p.medium'
                className='text-gray-800 dark:text-white'
              >
                ©2022 Realtinic. All Rights Reserved.
              </Typography>
              <Typography
                variant='p.medium'
                className='text-gray-800 dark:text-white'
              >
                Privacy Policy
              </Typography>
            </span>
          </div>
          {/** END BLOCK FOOTER */}
        </div>
        <span className='absolute top-10 right-5'>
          <Image
            src={arrowDown}
            className=' hidden xl:flex '
            alt='arrow'
            width='150'
            height='100'
            priority
          />
        </span>
      </div>
    </>
  )
}

export default AuthRightSection
