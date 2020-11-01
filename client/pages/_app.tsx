import { Provider } from 'mobx-react'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { appWithTranslation } from '../i18n'
import Link from 'next/link';
import { Router } from 'i18n'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { ToastContainer } from 'react-toastify'
import initializeStore from '../stores/rootStore'
import routes from '../routes'

// if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
//   whyDidYouRender(React)
// }
function handleLogin() {
  Router.push(routes.login.value)
}

function handleSignUp() {
  Router.push(routes.signUp.value)
}

class AppWrapper extends App {
  
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...initializeStore()}>
        <Head>
        <title>Welcome to Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>Simplest Shop</h1>
        <h2>Proudly using Next.js, Mongodb, Mobx, Loopback4, Typescript and deployed with Heroku</h2>
        <Component {...pageProps} />
        <ToastContainer />
        <hr></hr>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>SignUp</button>
      </Provider>
    )
  }
}

export default appWithTranslation(AppWrapper)
