/** @format */

import React from 'react'
import LoginForm from './loginForm'
import { AuthLeftSection, AuthRightSection } from '@/components/UI'

const Login = () => {
  return (
    <>
      <section className='flex justify-between bg-white dark:bg-black min-h-screen'>
        <>
          <AuthLeftSection />
        </>
        <>
          <AuthRightSection formName={'Login Account'}>
            <LoginForm />
          </AuthRightSection>
        </>
      </section>
    </>
  )
}
export default Login
