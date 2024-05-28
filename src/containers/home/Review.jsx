import { Typography } from '@/components'
import ArrowBack from '../../../public/arrowBack.svg'
import ArrowFront from '../../../public/arrowFront.svg'
import Image from 'next/image'
import DummyImg from '../../../public/DummyImage.svg'
import { Carousel } from '../common'

const Review = () => {
  const images = [DummyImg, DummyImg, DummyImg, DummyImg, DummyImg]

  const scrollRight = () => {
    const container = document.querySelector('.scroll')
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' })

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0
      }
    }
  }

  const scrollLeft = () => {
    const container = document.querySelector('.scroll')
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' })

      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth
      }
    }
  }

  return (
    <>
      <section className='grid justify-center bg-purple-100 py-10 overflow-hidden'>
        <div className='flex flex-wrap justify-between px-5 md:px-10'>
          <Typography variant='h2' className='flex-initial md:w-6/12 md:py-5'>
            See what property managers think about Realtinic
          </Typography>
          <span className='flex-1 inline-flex gap-5 justify-end py-5'>
            <Image
              onClick={scrollLeft}
              src={ArrowBack}
              className='cursor-pointer transition ease-in-out delay-150 md:hover:scale-105 duration-300 scale-95'
              alt=''
              width='50'
              height='30'
            />
            <Image
              onClick={scrollRight}
              src={ArrowFront}
              className='cursor-pointer transition ease-in-out delay-150 md:hover:scale-100 duration-300 scale-95'
              alt=''
              width='50'
              height='30'
            />
          </span>
        </div>
        <div className='inline-flex'>
          <Carousel className='scroll' images={images} />
        </div>
      </section>
    </>
  )
}

export default Review
