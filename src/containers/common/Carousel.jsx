
import { ReviewImg } from '@/components'

const Carousel = ({ images}) => {
  
  return (
    <>
      <section className='scroll scroll-smooth snap-x snap-mandatory inline-flex overflow-x-auto touch-pan-x max-h-lg w-screen md:max-w-screen lg:max-w-6xl'>
        <style>{`.scroll::-webkit-scrollbar { display: none }`}</style>
        {images.map((image, index) => (
          <span className='md:scroll-pl-6 snap-always snap-start' key={index}>
            <ReviewImg ImgSrc={image} />
          </span>
        ))}
      </section>
    </>
  )
}

export default Carousel
