import './globals.css'
import { Providers } from '@/containers/common'

export const metadata = {
  title: 'Realtinic | The Property Management Solution.',
  description: 'The Property Management Solution For The Digital Age',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='light scroll-smooth bg-white dark:bg-black'>
      <body className='bg-white dark:bg-black'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
