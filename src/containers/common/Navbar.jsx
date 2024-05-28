import { Logo, Typography } from '@/components'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import LogoImg from '../../../public/Logo.svg'
import { ThemeButton } from '@/components/Button'

export default function Page() {
  return (
    <>
      <Navbar position='static' height='6rem' maxWidth='xl'>
        <NavbarBrand>
          <Logo logoSrc={LogoImg} variant='black' />
        </NavbarBrand>
        <NavbarContent
          className='flex sm:flex md:gap-5 lg:gap-14 '
          justify='center'
        >
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
        <NavbarContent justify='end'>
          <NavbarItem>
            <Link href='/login'>
              <Typography variant='p.link'>Login</Typography>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <ThemeButton variant={'flat'} style='theme' linkSrc={'/signup'}>
              Sign Up
            </ThemeButton>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
