import { Typography } from '@/components'
import mssgIcon from '../../../public/mssgIcon.svg'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <>
      <section className='flex justify-center py-20 px-5 text-center bg-white dark:bg-black'>
        <div
          className=' py-10 px-0 w-full md:w-fit  md:py-20 md:px-32 lg:py-28 lg:px-52 rounded-3xl contrast-100'
          style={{
            backgroundImage: `url('NewsletterImage.svg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundOrigin: 'border',
            imageRendering: 'pixelated',
          }}
        >
          <span>
            <Typography variant='h2' className='text-white px-7'>
              Subscribe to our newsletter!
            </Typography>
            <Typography variant='p' className='text-white px-4'>
              Enter your email address to receive updates from us.
            </Typography>
          </span>
          <span className='flex justify-center my-5 mx-5'>
            <form className='inline-flex rounded-xl bg-white'>
              <Image
                src={mssgIcon}
                className='mx-4'
                alt=''
                width='25'
                height='25'
              />

              <input
                type='email'
                placeholder='Email Address'
                autoComplete='on'
                required
                pattern='[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$'
                title='Follow format characters@characters.domain '
                className='flex-initial font-medium text-gray-700 border-none focus:outline-none w-full md:w-40 my-auto text-base'
                
              />
              <span
                type='submit'
                className='scale-90 py-1 md:scale-95 md:py-1 md:px-1'
              >
                <button
                  type='submit'
                  className='w-min mx-auto md:mx-0 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Subscribe
                </button>
              </span>
            </form>
          </span>
        </div>
      </section>
    </>
  )
}

export default Newsletter
