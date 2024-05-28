/** @format */

import { Logo, Typography } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import sms from '../../../public/sms.svg'
//import phoneVector from '../../../public/phoneVector.svg'
import x from '../../../public/x.svg'
import fb from '../../../public/fb.svg'
import lin from '../../../public/lin.svg'
import yt from '../../../public/yt.svg'
import LogoImg from '../../../public/Logo.svg'
import { Newsletter } from '../home'

export default function Footer() {
  const List = [
    'Tenants',
    'Affiliate',
    'Contract Templates',
    'Slack Community',
    'About Us',
    'Our Team',
    'Features',
    'Terms of Use',
  ]
  const linkSrc = [
    '/tenants',
    '/affiliate',
    '/contract-templates',
    '/slack-community',
    '/about-us',
    '/our-team',
    '/features',
    '/terms-of-use',
  ]

  const socials = [x, fb, lin, yt]
  const socialsLink = [
    'https://twitter.com/realtinic',
    'https://web.facebook.com/realtinic/',
    '/',
    'https://www.youtube.com/@realtinic',
  ]

  const resources = List.slice(0, 4)
  const resourcesLinks = linkSrc.slice(0, 4)
  const services = List.slice(4, 8)
  const servicesLinks = linkSrc.slice(4, 8)

  return (
    <>
      {' '}
      <Newsletter />
      <div className='grid sm:flex flex-wrap justify-between gap-10 px-10  md:gap-10 md:px-14 lg:gap-10:px-32 xl:px-52 py-10 bg-white dark:bg-black'>
        <div className='flex-initial md:w-72 xl:w-96 grid justify-start gap-2'>
          <Logo logoSrc={LogoImg} variant='black' />
          <Typography variant='p'>
            A product that integrates all your accounting, marketing,
            communication and payments. It's convenient, easy to use and cost
            effective. We have it!
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>Resources</Typography>
          <ul>
            {resources.map((item, index) => (
              <li key={index} className='py-2'>
                <Link href={resourcesLinks[index]}>
                  <Typography
                    variant='p.medium'
                    className='md:hover:text-purple-800'>
                    {item}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Typography variant='h3'>Services</Typography>
          <ul>
            {services.map((item, index) => (
              <li key={index} className='py-2 '>
                <Link href={servicesLinks[index]}>
                  <Typography
                    variant='p.medium'
                    className='md:hover:text-purple-800'>
                    {item}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='grid'>
          <Typography variant='h3'>Contact Us</Typography>

          <ul>
            <li className='inline-flex gap-3 py-2 '>
              <Image src={sms} alt='' width='25' height='25' />
              <Typography variant='p.medium'>support@realtinic.com</Typography>
            </li>
          </ul>
          {/**  <ul>
            <li className='inline-flex gap-3 py-2'>
              <Image src={phoneVector} alt='' width='25' height='25' />
              <Typography variant='p.medium'>+234 (805) 489 — 072</Typography>
            </li>
          </ul>*/}
          <ul className='inline-flex gap-4 py-2'>
            {socials.map((item, index) => (
              <li key={index}>
                <Link href={socialsLink[index]} target='_blank'>
                  <Image src={item} alt='' width='30' height='30' />{' '}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex justify-center border-t-2 border-slate-100 bg-white px-5 dark:bg-black py-10'>
        <span className='inline-flex flex-wrap justify-center gap-5 '>
          {' '}
          <Typography variant='p.medium'>
            {' '}
            ©2022 Realtinic. All Rights Reserved.
          </Typography>{' '}
          <Link href='#'>
            <Typography variant='p.medium' className='hover:text-purple-800'>
              Privacy Policy
            </Typography>
          </Link>
        </span>
      </div>
    </>
  )
}
