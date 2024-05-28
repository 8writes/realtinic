import { Typography } from '@/components'
import Image from 'next/image'
import HeroImg from '../../../public/Hero.png'
import VideoCircle from '../../../public/VideoCircle.svg'
import { Link } from '@nextui-org/link'
import { ThemeButton } from '@/components/Button'

const Hero = () => {
  return (
    <>
      <section
        role='Hero section'
        className='flex flex-wrap justify-between bg-white dark:bg-black md:pl-5 py-10 md:py-20'
      >
        <div
          role='Hero Texts'
          className='flex-1 flex flex-col py-10 px-3 md:px-0 lg:py-0 gap-10 text-center m-auto md:text-start justify-center max-w-2xl'
        >
          <Typography variant='h1'>
            The Property Management Solution For The{' '}
            <span className='text-purple-800'>Digital Age</span>
          </Typography>
          <Typography variant='p' className='px-5 xl:px-0 '>
            Your property management software should be easy, not hard, reduce
            your workload in managing your properties. Simplify property
            management with Realtinic.
          </Typography>
          <div role='Hero btn and video tutorial' className='flex flex-wrap'>
            <ThemeButton variant={'flat'} style='theme' linkSrc={'/signup'}>Get Started</ThemeButton>
            <div className='flex justify-center py-5 md:py-0 w-full md:w-fit  my-auto md:mx-14'>
              <Link
                className='font-medium '
                href='#'
                variant='solid'
                color='foreground'
                isExternal
                showAnchorIcon
              >
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
          className='flex-initial w-screen flex justify-end lg:w-fit'
        >
          <Image
            src={HeroImg}
            alt='Hero Image'
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </>
  )
}

export default Hero
