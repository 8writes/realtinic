/** @format */

import React, { useEffect, useState } from 'react'
import NavClose from './navigation/nav-closed'
import NavOpen from './navigation/nav-open'
import TopNav from './navigation/topnav'
import { useRouter } from 'next/navigation'

export default function Template({ children }) {
  const [isOpen, setIsOpen] = useState(true)

  const router = useRouter()

  useEffect(() => {
    setIsOpen(true)
  }, [router])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && !isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  return (
    <>
      <div className='fixed bg-white w-full z-50'>
        <TopNav setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <section className='flex'>
        <div className='relative pt-20'>
          <div
            className={`fixed bg-white transition-all duration-1000 w-64 ${
              isOpen
                ? '-translate-x-full xl:translate-x-0 xl:block '
                : 'block xl:-translate-x-full'
            } shadow-lg px-4 py-5 pb-32 h-full overflow-auto`}>
            <NavOpen />
          </div>

          <div
            className={`fixed bg-white ${
              isOpen ? 'hidden xl:hidden' : 'hidden xl:block'
            } shadow-lg h-full overflow-auto px-1 py-5 pb-32 w-fit`}>
            <NavClose />
          </div>
        </div>
        <div
          className={` bg-white transition-all	duration-1000 mx-14 ${
            isOpen ? ' xl:ml-72' : ' xl:ml-32'
          } shadow-lg px-5 py-5 mt-24 md:mt-24 md:my-10 md:mx-10`}>
          {children}
        </div>
      </section>
    </>
  )
}
