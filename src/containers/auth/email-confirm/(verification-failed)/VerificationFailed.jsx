/** @format */

import React from 'react'
import { AuthLeftSection, AuthRightSection } from '@/components/UI'
import VerificationFailedForm from './verification-failed-form'
import { Typography } from '@/components'

const VerificationFailed = () => {
  return (
    <>
      <section className='flex justify-between bg-white dark:bg-black min-h-screen'>
        <>
          <AuthLeftSection />
        </>
        <>
          <AuthRightSection>
            <div className='my-20 md:my-0'>
              <div className='text-center'>
                <Typography variant='h2' className='text-red-700 max-w-lg'>
                  This link has expired.
                </Typography>
              </div>
              <>
                <VerificationFailedForm />
              </>
            </div>
          </AuthRightSection>
        </>
      </section>
    </>
  )
}
export default VerificationFailed
