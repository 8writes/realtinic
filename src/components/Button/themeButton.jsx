import { Button, Link } from '@nextui-org/react'

const ThemeButton = ({ children, linkSrc, variant, style }) => {
   let className = ''

   switch (style) {
     case 'theme':
       className =
         'font-medium text-white bg-purple-800 md:text-lg leading-loose-light md:leading-loose-strong px-10 py-6 w-min mx-auto md:mx-0 '
       break
     case 'normal':
       className =
         'font-medium px-10 py-6 md:text-lg leading-loose-light md:leading-loose-strong border-purple-500/75 text-purple-800'
       break
     default:
       break
   }
    return (
      <>
        <Button
          as={Link}
          href={linkSrc}
          variant={variant}
          className={className}
        >
          {children}
        </Button> 
      </>
    )
}

export default ThemeButton