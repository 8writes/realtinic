/** @format */

import Link from 'next/link'
import Image from 'next/image'
import { Typography } from '@/components'
import dash from '../../../../public/dash.svg'
import prop from '../../../../public/prop.svg'
import main from '../../../../public/main.svg'
import fin from '../../../../public/fin.svg'
import ana from '../../../../public/ana.svg'
import com from '../../../../public/com.svg'
import set from '../../../../public/set.svg'
import help from '../../../../public/help.svg'
import Profile from './profile'
import Logout from './logout'
import { usePathname } from 'next/navigation'

const NavOpen = () => {
  const pathname = usePathname()

  const list = [
    'Dashboard',
    'Properties',
    'Maintenance',
    'Finances',
    'Analytics',
    'Communications',
  ]

  const linkSrc = [
    '/dashboard',
    '/properties',
    '/maintenance',
    '/finances',
    '/analytics',
    '/communications',
  ]

  const icons = [dash, prop, main, fin, ana, com]

  const preference = ['Settings', 'Help']
  const preferenceLinks = ['/set', '/help']
  const preferenceIcons = [set, help]

  return (
    <>
      <section>
        <ul className='grid gap-4'>
          {list.map((item, index) => (
            <li key={index}>
              <Link href={linkSrc[index]}>
                <span
                  className={`flex gap-4 border-transparent border-2 rounded-lg py-2 px-3 ${
                    pathname === linkSrc[index]
                      ? 'bg-slate-100'
                      : 'xl:hover:bg-slate-100'
                  }`}>
                  <Image src={icons[index]} alt={item} width='30' height='30' />
                  <Typography
                    variant='p'
                    className='font-semibold text-slate-500'>
                    {item}
                  </Typography>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='grid mt-10'>
          <label className='p-4'>
            <Typography variant='p.medium' className='text-slate-600'>
              Account
            </Typography>
          </label>
          <ul className='grid gap-4'>
            {preference.map((item, index) => (
              <li key={index} className=''>
                <Link href={preferenceLinks[index]}>
                  <span
                    className={`flex gap-4 border-transparent border-2 rounded-lg py-2 px-3  ${
                      pathname === preferenceLinks[index]
                        ? 'bg-slate-100'
                        : 'xl:hover:bg-slate-100'
                    }`}>
                    <Image
                      src={preferenceIcons[index]}
                      alt={item}
                      width='30'
                      height='30'
                    />
                    <Typography
                      variant='p'
                      className='font-semibold text-slate-500'>
                      {item}
                    </Typography>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <>
          <Profile />
        </>
        <>
          <Logout />
        </>
      </section>
    </>
  )
}

export default NavOpen
