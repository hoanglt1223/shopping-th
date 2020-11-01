import cx from 'classnames'
import styles from './icon.module.scss'

interface IProps {
  iconName?: string
  alt?: string
  id?: string
  onLeftButton?: boolean
  onClick?: () => void
}

const Icon = (props: IProps) => {
  const { iconName, alt = 'icon', id, onLeftButton, onClick } = props
  return (
    <img
      onClick={onClick}
      id={id}
      className={cx(styles.icon, {
        [styles.onLeftButton]: onLeftButton
      })}
      src={`/assets/icons/${iconName}`}
      alt={alt}
    />
  )
}

export default Icon
