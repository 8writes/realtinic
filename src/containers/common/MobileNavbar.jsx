import { Logo, Typography } from '@/components'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import LogoImg from '../../../public/Logo.svg'
import { ThemeButton } from '@/components/Button'

export default function Page() {
  const menuItems = ['Services', 'Pricing', 'Company', 'Affiliate']
  const linkSrc = ['/services', '/pricing', '/company', '/affiliate']

  return (
    <>
      <Navbar position='static' height='6rem' maxWidth='xl'>
        <NavbarContent className='md:hidden' justify='center'>
          <NavbarBrand>
            <Logo logoSrc={LogoImg} variant='black' />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className='hidden ml-5  sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link href='#'>
              <Typography variant='p.link'>Services</Typography>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='#'>
              <Typography variant='p.link'>Pricing</Typography>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='#'>
              <Typography variant='p.link'>Company</Typography>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='affiliate'>
              <Typography variant='p.link'>Affiliate</Typography>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify='center'>
          <NavbarItem className='hidden sm:block '>
            <Link href='#'>
              <Typography variant='p.link'>Login</Typography>
            </Link>
          </NavbarItem>
          <NavbarItem className='hidden sm:block'>
            <ThemeButton linkSrc={'/signup'}>Sign Up</ThemeButton>
          </NavbarItem>
          <NavbarContent
            className='font-medium pr-5 text-gray-900 dark:text-white sm:hidden'
            justify='end'
          >
            <NavbarMenuToggle />
          </NavbarContent>
        </NavbarContent>

        <NavbarMenu className='bg-white dark:bg-slate-900  py-20'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color='foreground' href={linkSrc[index]}>
                <Typography variant='p'>{item}</Typography>
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarItem className='flex justify-center pt-7 gap-5 '>
            <ThemeButton
              variant={'bordered'}
              style='normal'
              linkSrc={'/signup'}
            >
              SignUp
            </ThemeButton>
            <ThemeButton variant={'bordered'} style='normal' linkSrc={'/login'}>
              Login
            </ThemeButton>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </>
  )
}
