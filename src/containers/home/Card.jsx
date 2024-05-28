import Arrow from '../../../public/arrow.svg'
import RentImg from '../../../public/RentVector.svg'
import Income from '../../../public/Income.svg'
import Meetings from '../../../public/Meetings.svg'

import { RentItem, Typography } from '@/components'
import Image from 'next/image'
import { Link } from '@nextui-org/link'

const Card = () => {
  return (
    <>
      <section role='Section two' className='bg-white dark:bg-black py-10'>
        <RentItem variant='wrap' imageSrc={RentImg}>
          <Typography variant='h2'>
            <span className='text-purple-800'>Avoid the hassle</span> of
            managing your rent and bill payments
          </Typography>
          <Typography variant='p'>
            Realtinic helps you collect and manage rent, help tenants pay rent,
            and pay vendors and artisans, even the property owners.
          </Typography>
          <span className='inline-flex gap-2'>
            <Link
              href='#'
              className='group inline-flex items-center gap-2'
              variant='solid'
              color='foreground'
            >
              <Typography variant='p.link' className='text-purple-800 my-auto'>
                Learn More
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
        <RentItem variant='reverse' imageSrc={Income}>
          <Typography variant='h2'>
            <span className='text-purple-800'>Track performance</span> and make
            informed decisions.
          </Typography>
          <Typography variant='p'>
            Our analytics and insights solutions let you monitor the performance
            of your property investments in real time. This will enable you to
            make informed decisions with regards to performance.
          </Typography>
          <span className='inline-flex gap-2'>
            <Link
              href='#'
              className='group inline-flex items-center gap-2'
              variant='solid'
              color='foreground'
            >
              <Typography variant='p.link' className='text-purple-800 my-auto'>
                Learn More
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
        <RentItem variant='wrap' imageSrc={Meetings}>
          <Typography variant='h2'>
            <span className='text-purple-800'>Communicate better</span> and
            improve your productivity
          </Typography>
          <Typography variant='p'>
            Stay in touch with your tenants, property owners , and even your
            fellow team members, and enjoy effective communication in the
            process.
          </Typography>
          <span className='inline-flex gap-2'>
            <Link
              href='#'
              className='group inline-flex items-center gap-2'
              variant='solid'
              color='foreground'
            >
              <Typography variant='p.link' className='text-purple-800 my-auto'>
                Learn More
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
