import React from 'react'
import 'raf/polyfill'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}