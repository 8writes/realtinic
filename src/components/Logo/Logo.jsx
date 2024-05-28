import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ logoSrc, variant }) => {
  
   let className = ''

   switch (variant) {
     case 'black':
       className =
         'font-bold text-2xl lg:text-3xl text-slate-900 dark:text-white'
       break
     case 'white':
       className =
         'font-bold text-2xl lg:text-3xl text-white dark:text-slate-900'
       break
     default:
       break
   }

  return (
    <section>
      <Link href='/' className='flex'>
        <Image
          src={logoSrc}
          alt='Realtinic Logo'
          width={35}
          height={35}
          priority
        />
        <p className={className}>
          Realtinic
        </p>
      </Link>
    </section>
  )
}

export default Logo
