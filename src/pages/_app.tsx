import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import LanguageProvider from '../contexts/LanguageContext'
import ThemeProvider from '../contexts/ThemeContext'
import SidebarProvider from '../contexts/SidebarContext'
import Layout from '../components/Layout'

type NextPageWithLayout = NextPage & { getLayout?: (page: ReactElement) => ReactNode }
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout }

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <LanguageProvider>
      <ThemeProvider>
        <SidebarProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </SidebarProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp
