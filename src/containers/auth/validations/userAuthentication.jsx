/** @format */

import { React, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import { redirect } from 'next/navigation'

const UserValidation = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const isUserAuthenticated = Cookies.get('refreshToken')
    if (isUserAuthenticated) {
      setIsAuthenticated(true)
    } else {
      redirect('/login')
    }
  }, [redirect])

  return <>{isAuthenticated && <>{children}</>}</>
}

UserValidation.propTypes = {
  children: PropTypes.node.isRequired
}
export default UserValidation
