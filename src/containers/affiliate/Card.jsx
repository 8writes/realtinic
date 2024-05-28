/** @format */

import React from 'react'
import Image from 'next/image'
import Arrow from '../../../public/arrow.svg'
import EarnImg from '../../../public/EarnVector.svg'
import { Link } from '@nextui-org/link'
import { RentItem, Typography } from '@/components'

const Card = () => {
  return (
    <>
      <section role='Section two' className='bg-white dark:bg-black py-10'>
        <RentItem variant='wrap' imageSrc={EarnImg}>
          <Typography variant='h2'>
            <span className='text-purple-800'>What do you get?</span>
          </Typography>
          <Typography variant='p'>
            You get N1500 (35 ZAR) every time a new manager signs up with your
            code and subscribes to a paid plan. After 6 months, you get 5% on
            each subscription.
          </Typography>
          <span className='inline-flex gap-2'>
            <Link
              href='#'
              className='group inline-flex items-center gap-2'
              variant='solid'
              color='foreground'>
              <Typography variant='p.link' className='text-purple-800 my-auto'>
                Get Started
              </Typography>
              <span className='my-auto transition duration-150 group-hover:translate-x-2'>
                <Image
                  src={Arrow}
                  alt='arrow'
                  className=''
                  imageRendering='pixelated'
                  width={33}
                  height={33}
                />
              </span>
            </Link>
          </span>
        </RentItem>
      </section>
    </>
  )
}
export default Card
