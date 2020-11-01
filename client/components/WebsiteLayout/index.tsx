import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Hello',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="container">
      <header>
      </header>
      {children}
    </div>
  </>
)

export default Layout
