import Image from 'next/image'
import Dashboard from '../../../public/Dashboard.svg'

const AppView = () => {
  return (
    <>
      <section
        role='A view of the webapp'
        className='hidden md:flex justify-center bg-white dark:bg-black '
        style={{
          backgroundImage: `url('Frame2.svg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundOrigin: 'border',
          imageRendering: 'pixelated',
        }}
      >
        <div className='my-3 mx-3 md:my-20 md:mx-5'>
          <Image
            src={Dashboard}
            alt='Dashboard Image'
            className=''
            imageRendering='pixelated'
            width={1150}
            height={1150}
            priority
          />
        </div>
      </section>
    </>
  )
}

export default AppView
