/** @format */

import React from 'react'
import SignUpFormTenant from './signUpFormTenant'
import SignUpFormManager from './signUpFormManager'
import { Tabs, Tab } from '@nextui-org/tabs'
import { AuthLeftSection, AuthRightSection } from '@/components/UI'

const SignUp = () => {
  return (
    <>
      <section className='flex justify-between bg-white dark:bg-black min-h-screen'>
        <>
          <AuthLeftSection />
        </>
          <>
            <AuthRightSection formName={'Create Account'}>
              <Tabs
                fullWidth
                variant='underlined'
                size='md'
                color='default'
                aria-label='FormTab'
                disableAnimation={true}
                className='flex justify-center font-semibold'>
                <Tab key='manager' titleValue='Manager' title='Manager'>
                  <SignUpFormManager />
                </Tab>
                <Tab key='tenant' titleValue='Tenant' title='Tenant'>
                  <SignUpFormTenant />
                </Tab>
              </Tabs>
            </AuthRightSection>
          </>
      </section>
    </>
  )
}
export default SignUp
