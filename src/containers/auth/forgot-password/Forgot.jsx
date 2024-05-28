/** @format */

import React from 'react'
import ForgotForm from './forgotForm'
import { AuthLeftSection, AuthRightSection } from '@/components/UI'

const Forgot = () => {
  return (
    <>
      <section className='flex justify-between bg-white dark:bg-black min-h-screen'>
        <>
          <AuthLeftSection />
        </>
        <>
          <AuthRightSection formName={'Forgot Password?'}>
            <ForgotForm />
          </AuthRightSection>
        </>
      </section>
    </>
  )
}
export default Forgot
