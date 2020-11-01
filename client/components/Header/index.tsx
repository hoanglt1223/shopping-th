import cx from 'classnames'

// import Toolbar from '../Toolbar'
import styles from './header.module.scss'

interface IHeaderProps {
  leftSideComponent?: React.ReactChildren | React.ReactNode
  borderLine?: boolean
}

const Header = (props: IHeaderProps) => {
  const { leftSideComponent, borderLine } = props
  return (
    <div
      className={cx({
        [styles.header]: true,
        [styles.borderLine]: borderLine
      })}
    >
      <div className={styles.halfLeft}>{leftSideComponent}</div>
      <div className={styles.halfRight}>
        {/* <Toolbar /> */}
      </div>
    </div>
  )
}

export default Header
