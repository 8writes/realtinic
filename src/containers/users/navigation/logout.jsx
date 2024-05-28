/** @format */

import { Typography } from '@/components'
import Image from 'next/image'
import logout from '../../../../public/logout.svg'

const Logout = () => {
  return (
    <>
      <section>
        <span className='flex gap-4 cursor-pointer bg-red-600 border-transparent border-2 rounded-lg mt-5 py-2 px-3'>
          <Image src={logout} alt='logout vector' width='30' height='30' />
          <Typography variant='p' className='text-white font-semibold'>
            Logout
          </Typography>
        </span>
      </section>
    </>
  )
}

export default Logout
