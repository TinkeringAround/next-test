import React from 'react'
import { AppProps } from 'next/app'

// Styles
import '../styles/index.css'

// Components
import Header from '../components/Header'

// ==============================================
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
)

export default MyApp
