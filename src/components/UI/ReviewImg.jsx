import Image from 'next/image'

const ReviewImg = ({ImgSrc}) => {
    return (
      <>
        <section>
          <Image
            src={ImgSrc}
            alt=''
            width='500'
            height='100'
            className='max-w-xs max-h-fit md:max-w-xl'
          />
        </section>
      </>
    )
}

export default ReviewImg