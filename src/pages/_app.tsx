import '@/styles/globals.css';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }:AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)
  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}
