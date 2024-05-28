import { Card, Hero } from '@/containers/affiliate'
import Template from '../template'

const Page = () => {
  return (
    <Template showHeader={true} showFooter={true}>
      <>
        <Hero />
        <Card />
      </>
    </Template>
  )
}

export default Page
