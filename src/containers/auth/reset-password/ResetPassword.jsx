/** @format */

import React from 'react'
import ResetForm from './resetForm'
import { AuthLeftSection, AuthRightSection } from '@/components/UI'
import TokenValidation from './resetTokenValidation'

const Forgot = () => {
  return (
    <TokenValidation>
      <>
        <section className='flex justify-between bg-white dark:bg-black min-h-screen'>
          <>
            <AuthLeftSection />
          </>
          <>
            <AuthRightSection>
              <ResetForm />
            </AuthRightSection>
          </>
        </section>
      </>
    </TokenValidation>
  )
}
export default Forgot
