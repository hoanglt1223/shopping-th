import { Provider } from 'mobx-react'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { appWithTranslation } from '../i18n'

import whyDidYouRender from '@welldone-software/why-did-you-render'
import { ToastContainer } from 'react-toastify'
import initializeStore from '../stores/rootStore'

// if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
//   whyDidYouRender(React)
// }

class AppWrapper extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...initializeStore()}>
        <Head>
          {/* <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnRNlXdpEKgmXveCIyDI9dh-brv_tqiYM&libraries=places"
          ></script> */}
        </Head>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    )
  }
}

export default appWithTranslation(AppWrapper)
