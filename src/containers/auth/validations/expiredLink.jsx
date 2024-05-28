/** @format */

'use client'

import React, { useEffect } from 'react'
import { AuthLeftSection, AuthRightSection } from '@/components/UI'
import { Typography } from '@/components'
import { useSearchParams, useRouter } from 'next/navigation'

const ExpiredLink = () => {
  const router = useRouter()
  // Fetch token from url
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  // Token validation
  useEffect(() => {
    if (!token) {
      router.push('/login')
      return
    }
  }, [router, token])
  if (!token) {
    return null
  }
  // The end
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
                  This link is invalid or expired.
                </Typography> 
              </div>
            </div>
          </AuthRightSection>
        </>
      </section>
    </>
  )
}
export default ExpiredLink
