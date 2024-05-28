/** @format */

import React from 'react'
// import { Typography } from '@/components'
// import Image from 'next/image'
// import avatar from '../../../../public/avatar.svg'

import { User, Link } from '@nextui-org/react'

const Profile = () => {
  return (
    <>
      <section>
        <span className='flex gap-4 cursor-pointer hover:bg-slate-100 border-transparent border-2 rounded-lg mt-14 py-2 px-3'>
          {/** <Image src={avatar} alt='Avatar' width='40' height='40' />
          <Typography
            variant='p'
            className='text-slate-500 font-semibold my-auto '>
            Frosty
          </Typography>*/}
          <User
            name='Junior Him'
            className='text-slate-500 font-semibold '
            description={
              <Link href='#' size='sm' isExternal>
                @reactdev.gmail.com
              </Link>
            }
            avatarProps={{
              src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
            }}
          />
        </span>
      </section>
    </>
  )
}

export default Profile
