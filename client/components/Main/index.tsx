import styles from './main.module.scss'

interface IMainProps {
  children: React.ReactChildren | React.ReactNode
}

const Main = (props: IMainProps) => {
  const { children } = props
  return <div className={styles.main}>{children}</div>
}

export default Main
