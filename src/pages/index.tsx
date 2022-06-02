import type { ReactElement } from 'react'
import { Layout } from '../components/Layout'

const Page = () => {
  return <></>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
