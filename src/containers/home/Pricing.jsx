import React from 'react'
import Image from 'next/image'
import { PricingBox, Typography } from '@/components'
import PricingVector from '../../../public/PricingVector.svg'
import { Switch } from '@nextui-org/switch'
import checkPurple from '../../../public/checkPurple.svg'
import checkGreen from '../../../public/checkGreen.svg'
import checkNo from '../../../public/checkNo.svg'

const Pricing = () => {
  const Features = [
    '3 Property Units (Max)',
    'Unlimited Property Units',
    'Maintenance Features',
    'Manage rent and bills payment',
    'Chat Support',
    'Advance Analytics',
    'Team Management',
  ]
  const [isSelected, setIsSelected] = React.useState(true)

  return (
    <>
      <section className='grid justify-center bg-white dark:bg-black py-10'>
        <div className='text-center px-5'>
          <Typography variant='h2'>Simple, transparent pricing</Typography>

          <Typography variant='p' className='my-2'>
            No contracts. No surprise fees.
          </Typography>

          <span className='inline-flex flex-wrap relative  justify-center py-4 sm:px-16 gap-5'>
            <Typography variant='p.medium' className='my-auto'>
              Monthly
            </Typography>{' '}
            <Switch
              defaultSelected
              isSelected={isSelected}
              onValueChange={setIsSelected}
              color='secondary'
              size='sm'
            />
            <Typography variant='p.medium' className='my-auto'>
              Yearly
            </Typography>
            <Typography
              variant='p.small'
              className='bg-yellow-400 rounded-lg px-2 py-1'
            >
              Save 25%
            </Typography>
            <Image
              className='absolute hidden sm:flex md:-top-3 md:right-0'
              src={PricingVector}
              alt='arrow vector'
              width='60'
              height='60'
            />
          </span>
        </div>
        <div className='flex flex-wrap justify-center gap-10 py-5 px-5'>
          <PricingBox className='flex-1' variant='white'>
            <Typography variant='p'>
              <span className=' bg-white font-medium px-4 py-2 text-green-600'>
                Free Plan
              </span>
            </Typography>
            <span>
              <Typography variant='h2' className='text-black dark:text-black'>
                Free
              </Typography>
              <Typography
                variant='p.medium'
                className='text-black dark:text-black'
              >
                Forever
              </Typography>
            </span>
            <span>
              <hr />
            </span>
            <span>
              {Features.map((item, index) => {
                const isLastThree = index >= Features.length - 3
                return (
                  index !== 1 && (
                    <ul
                      className='list-outside text-left'
                      key={`${item}-${index}`}
                    >
                      <li className='flex gap-3 py-3'>
                        {isLastThree ? (
                          <Image
                            src={checkNo}
                            alt='Check box'
                            width='20'
                            height='20'
                          />
                        ) : (
                          <Image
                            src={checkGreen}
                            alt='Check box'
                            width='20'
                            height='20'
                          />
                        )}
                        <Typography
                          variant='p.medium'
                          className='text-black dark:text-black'
                        >
                          {item}
                        </Typography>
                      </li>
                    </ul>
                  )
                )
              })}
            </span>
          </PricingBox>
          <PricingBox className='flex-1' variant='purple'>
            <Typography variant='p'>
              <span className=' bg-white font-medium px-4 py-2 text-purple-700'>
                Premium Plan
              </span>
            </Typography>
            <span>
              {isSelected ? (
                <Typography variant='h2' className='text-black dark:text-black'>
                  ₦12,000
                </Typography>
              ) : (
                <Typography variant='h2' className='text-black dark:text-black'>
                  ₦800
                </Typography>
              )}
              <Typography
                variant='p.medium'
                className='text-black dark:text-black'
              >
                Per Unit
              </Typography>
            </span>
            <span>
              <hr />
            </span>
            <span>
              {Features.map(
                (item, index) =>
                  index !== 0 && (
                    <ul
                      className='list-outside text-left'
                      key={`${item}-${index}`}
                    >
                      <li className='flex gap-3 py-3'>
                        <Image
                          src={checkGreen}
                          alt='Check box'
                          width='20'
                          height='20'
                        />
                        <Typography
                          variant='p.medium'
                          className='text-black dark:text-black'
                        >
                          {item}
                        </Typography>
                      </li>
                    </ul>
                  )
              )}
            </span>
          </PricingBox>
        </div>
      </section>
    </>
  )
}

export default Pricing
