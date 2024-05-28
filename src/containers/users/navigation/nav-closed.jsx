/** @format */

import Link from 'next/link'
import Image from 'next/image'
import dash from '../../../../public/dash.svg'
import prop from '../../../../public/prop.svg'
import main from '../../../../public/main.svg'
import fin from '../../../../public/fin.svg'
import ana from '../../../../public/ana.svg'
import com from '../../../../public/com.svg'
import set from '../../../../public/set.svg'
import help from '../../../../public/help.svg'
import logout from '../../../../public/logout.svg'
import { User } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

const NavClose = () => {
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
            <li key={index} className='mx-auto'>
              <Link href={linkSrc[index]}>
                <span
                  className={`flex gap-4 hover:bg-slate-100 border-transparent border-2 rounded-lg py-2 px-3 ${
                    pathname === linkSrc[index]
                      ? 'bg-slate-100'
                      : 'xl:hover:bg-slate-100'
                  }`}>
                  <Image src={icons[index]} alt={item} width='30' height='30' />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='grid mt-14'>
          <ul className='grid gap-4'>
            {preference.map((item, index) => (
              <li key={index} className='mx-auto'>
                <Link href={preferenceLinks[index]}>
                  <span
                    className={`flex gap-4 hover:bg-slate-100 border-transparent border-2 rounded-lg py-2 px-3 ${
                      pathname === preferenceLinks[index]
                        ? 'bg-slate-100'
                        : 'xl:hover:bg-slate-100'
                    }`}>
                    <Image
                      src={preferenceIcons[index]}
                      alt={item}
                      width='30'
                      height='30'
                      priority
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mx-auto'>
          <span className='flex gap-4 cursor-pointer hover:bg-slate-100 border-transparent border-2 rounded-lg mt-14 py-2 px-3'>
            <User
              avatarProps={{
                src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
              }}
            />
          </span>
        </div>
        <>
          <span className='flex justify-center gap-4 cursor-pointer hover:bg-red-500 bg-red-600 border-transparent border-2 rounded-lg mt-5 py-2'>
            <Image src={logout} alt='logout vector' width='30' height='30' />
          </span>
        </>
      </section>
    </>
  )
}

export default NavClose
