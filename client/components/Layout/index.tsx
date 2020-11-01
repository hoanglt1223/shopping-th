import Head from 'next/head'
import Header from '../Header'
import Main from '../Main'
import styles from './layout.module.scss'

interface ILayoutProps {
  children?: React.ReactElement
  headerTitle?: React.ReactElement
  borderLine?: boolean
  title?: string
}

const Layout = (props: ILayoutProps) => {
  const { children, headerTitle, borderLine, title } = props
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title || 'Welcome to my Shop'}</title>
        <link rel="icon" href="https://loopback.io/favicon.ico" />
      </Head>
      <Header borderLine={borderLine} leftSideComponent={headerTitle} />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
