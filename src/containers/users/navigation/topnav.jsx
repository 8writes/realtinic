/** @format */

import React from 'react'

import { Logo } from '@/components'
import LogoImg from '../../../../public/Logo.svg'
import Image from 'next/image'
import open from '../../../../public/menu.svg'

const TopNav = ({ setIsOpen, isOpen }) => {
  return (
    <>
      <div className='flex gap-7 w-full pt-10'>
        <div>
          <button
            className='xl:hover:bg-slate-100 rounded-lg mx-3 px-3'
             onClick={() => setIsOpen(!isOpen)}>
            {/**  {isOpen ? (
                <Image src={close} alt='menu vector' width='40' height='40' />
              ) : (
              <></>
              )}*/}
            <Image src={open} alt='menu vector' width='40' height='40' />
          </button>
        </div>
        <>
          <Logo logoSrc={LogoImg} variant='black' />
        </>
      </div>
    </>
  )
}

export default TopNav
