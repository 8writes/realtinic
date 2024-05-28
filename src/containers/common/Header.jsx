import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

export default function Header() {
  return (
    <>
      <div className='bg-white dark:bg-black  border-b-2 border-slate-100 dark:border-slate-900 '>
        <div className=' hidden md:flex'>
          <Navbar  />
        </div>
        <div className='flex md:hidden'>
          <MobileNavbar />
        </div>
      </div>
    </>
  )
}
