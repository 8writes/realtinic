import {
  AppView,
  Hero,
  Pricing,
  Card,
  Review,
} from '@/containers/home'
import Template from './template'

export default function Page() {
  return (
    <Template showHeader={true} showFooter={true} >
      <main className='bg-white dark:bg-black'>
        <Hero />
        <AppView />
        <Card />
        <Pricing />
        <Review />
      </main>
    </Template>
  )
}
