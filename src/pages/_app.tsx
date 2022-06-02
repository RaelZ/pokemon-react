import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import ThemeProvider from '../contexts/ThemeContext'
import LanguageProvider from '../contexts/LanguageContext'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <LanguageProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp
