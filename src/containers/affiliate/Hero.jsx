/** @format */

import React from 'react'
import Image from 'next/image'
import HeroImg from '../../../public/Hero-Affiliate.png'
import VideoCircle from '../../../public/VideoCircle.svg'
import { Link } from '@nextui-org/link'
import { Typography } from '@/components'
import { ThemeButton } from '@/components/Button'

const Hero = () => {
  return (
    <>
      <section
        role='Hero section'
        className='flex flex-wrap justify-center bg-white dark:bg-black md:px-5 py-10 md:py-20'>
        <div
          role='Hero Texts'
          className='flex-1 max-w-xl flex flex-col my-auto py-10 px-3 md:px-0 lg:py-0 gap-10 text-center  md:text-start'>
          <Typography variant='h1' className='px-2 md:px-0'>
            Become a Realtinic Affiliate{' '}
            <span className='text-purple-800'>earn online-FREE!</span>
          </Typography>
          <Typography variant='p' className='px-5 md:px-0 '>
            Earn passive income online by selling what property managers need.
          </Typography>
          <div role='Hero btn and video tutorial' className='flex flex-wrap'>
            <ThemeButton variant={'flat'} style='theme' linkSrc={'/signup'}>
              Get Started
            </ThemeButton>
            <div className=' flex justify-center py-5 md:py-0 w-full md:w-fit  my-auto md:mx-14'>
              <Link
                className='font-medium '
                href='#'
                variant='solid'
                color='foreground'
                isExternal
                showAnchorIcon>
                <Image
                  src={VideoCircle}
                  alt='Hero Image'
                  width={30}
                  height={30}
                  priority
                />{' '}
                <Typography variant='p.link'>Watch Video Tutorial</Typography>
              </Link>
            </div>
          </div>
        </div>
        <div
          role='Hero Image'
          className='md:flex-1 max-w-xl flex justify-center'>
          <Image
            src={HeroImg}
            alt='Hero Image'
            width={400}
            height={400}
            priority
          />
        </div>
      </section>
    </>
  )
}
export default Hero
