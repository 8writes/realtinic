/** @format */

import React from 'react'
import { Typography } from '@/components'
import { ThemeButton } from '@/components/Button'
import { AuthLeftSection, AuthRightSection } from '@/components/UI'

const VerificationSuccessful = () => {
  return (
      <>
        <section className='flex justify-between bg-white dark:bg-black min-h-screen'>
          <>
            <AuthLeftSection />
          </>
          <>
            <AuthRightSection>
              <div className='my-20 md:my-0'>
                <div className='grid gap-5 w-full md:w-fit'>
                  <div className='text-center'>
                    <Typography
                      variant='h2'
                      className='text-green-700 max-w-lg'>
                      Your user account has been successfully activated!
                    </Typography>
                  </div>
                  <span className='flex justify-center py-5'>
                    <ThemeButton
                      variant={'bordered'}
                      style='normal'
                      linkSrc={'/login'}>
                      Login Now
                    </ThemeButton>
                  </span>
                </div>
              </div>
            </AuthRightSection>
          </>
        </section>
      </>
  )
}
export default VerificationSuccessful
