import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import LanguageProvider from '../contexts/LanguageContext'
import ThemeProvider from '../contexts/ThemeContext'
import SidebarProvider from '../contexts/SidebarContext'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <LanguageProvider>
      <ThemeProvider>
        <SidebarProvider>
          {getLayout(<Component {...pageProps} />)}
        </SidebarProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp
