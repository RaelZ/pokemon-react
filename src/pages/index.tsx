import type { ReactElement } from 'react'
import { Layout } from '../components/Layout'
import LanguageProvider from '../contexts/LanguageContext'
import ThemeProvider from '../contexts/ThemeContext'

const Page = () => {
  return <></>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Layout>{page}</Layout>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default Page
