import React, { ReactElement } from 'react'
import { Layout } from '../components/Layout'

const Home = () => {
  return (
    <>
      <div>AAA</div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default Home
