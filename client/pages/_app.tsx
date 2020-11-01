import { Provider } from 'mobx-react'
import App from 'next/app'
import '../styles/styles.css';
import Head from 'next/head'
import React from 'react'
import { appWithTranslation, Router } from '../i18n'
// import whyDidYouRender from '@welldone-software/why-did-you-render'
import initializeStore from '../stores/rootStore'
import routes from '../routes'
import Layout from 'components/WebsiteLayout';

// if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
//   whyDidYouRender(React)
// }

class AppWrapper extends App {
  
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...initializeStore()}>
        <Head>
        <title>Welcome to Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {/* <h1>Simplest Shop</h1>
        <h2>Proudly using Next.js, Mongodb, Mobx, Loopback4, Typescript and deployed with Heroku</h2> */}
        <Component {...pageProps} />
        <div>
        {/* <button onClick={()=>Router.push(routes.value)}>Home</button> */}
        <button onClick={()=>Router.push(routes.login.value)}>Login</button>
        <button onClick={()=>Router.push(routes.signUp.value)}>SignUp</button>
        <button onClick={()=>Router.push(routes.shop.value)}>Shop</button>
        <button onClick={()=>Router.push(routes.api.value)}>Api</button>
        </div>
      </Provider>
    )
  }
}

export default appWithTranslation(AppWrapper)
