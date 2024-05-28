/** @format */

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ResetPassword } from '..'
import { useSearchParams, useRouter } from 'next/navigation'
import { AuthLeftSection, AuthRightSection } from '@/components/UI'

const TokenValidation = () => {
  const router = useRouter()
  // States
  const [isAuthenticated, setIsAuthenticated] = useState()
  // Fetch token from url
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  // API token validation request
  useEffect(() => {
    const handleTokenValidate = async () => {
      // Check if token is available
      if (!token) {
        router.push('/login')
        return
      }
      // Post req
      try {
        const response = await axios.post(
          'https://realtinic.onrender.com/api/authentication/token/validate',
          { token },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (response.status === 200) {
          // Valid link
          setIsAuthenticated(true)
        } else if (response.status === 401) {
          // Expired link
          setIsAuthenticated(false)
        }
      } catch (error) {
        // Other errors
        router.push('/login')
      }
    }
    handleTokenValidate()
  }, [router, token])

  if (isAuthenticated === undefined) {
    return null
  }
  // The end
  return isAuthenticated ? (
    <>
      <ResetPassword />
    </>
  ) : (
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
export default TokenValidation
