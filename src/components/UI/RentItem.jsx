import Image from 'next/image'

const RentItem = ({ children, imageSrc, variant }) => {
  let className = ''

  switch (variant) {
    case 'wrap':
      className =
        'flex flex-wrap gap-10 md:gap-20 xl:gap-72 justify-center bg-white dark:bg-black px-5 py-14 md:py-20'
      break
    case 'reverse':
      className =
        'flex  flex-wrap flex-row md:flex-row-reverse gap-10 md:gap-20 xl:gap-72 justify-center bg-white dark:bg-black px-5 py-14 md:py-20'
      break
    
    default:
      break
  }

  return (
    <section className={className}>
      <div className='flex-initial flex flex-col gap-10 my-auto max-w-md'>
        {children}
      </div>
      <div className='flex-initial'>
        <Image
          src={imageSrc}
          alt='image'
          className=' transition duration-150 md:hover:rotate-6 origin-top'
          imageRendering='pixelated'
          width={400}
          height={400}
          loading='lazy'
        />
      </div>
    </section>
  )
}

export default RentItem
