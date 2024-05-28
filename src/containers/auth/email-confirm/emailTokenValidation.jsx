/** @format */

'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation'
import { VerificationFailed, VerificationSuccessful } from '..'

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
        if (response.status === 202) {
          // Valid token
          setIsAuthenticated(true)
        } else {
          router.push('/login')
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 404) {
            // Expired/Used token
            setIsAuthenticated(false)
          } else if (error.response.status === 403) {
            // Forged token
            router.push('/login')
          } else {
            // Other errors
            router.push('/login')
          }
        } else {
          // Network errors or other issues
          router.push('/login')
        }
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
      <VerificationSuccessful />
    </>
  ) : (
    <>
      <VerificationFailed />
    </>
  )
}
export default TokenValidation
