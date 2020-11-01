import cx from 'classnames'
import { useState, useEffect } from 'react'
import styles from './image.module.scss'

interface IImageProps {
  style?: string
  imageName?: string
  alt?: string
  src?: string
  isHalf?: boolean
  isQuarter?: boolean
  className?: string
}

enum IMAGE_SIZE {
  ORIGINAL = '00',
  HALF = '50',
  QUARTER = '75'
}

const Image = (props: IImageProps) => {
  const { imageName, alt, src = '', isHalf, isQuarter, className } = props
  const [source, setSource] = useState(src)
  const [isUsingFallback, setFallback] = useState(false)

  useEffect(() => {
    if ((isHalf || isQuarter) && !isUsingFallback) {
      const hasSize = src.includes('00_')
      const imageComponents = src.split('00_')
      if (hasSize && imageComponents) {
        let size = IMAGE_SIZE.ORIGINAL
        if (isHalf) {
          size = IMAGE_SIZE.HALF
        }
        if (isQuarter) {
          size = IMAGE_SIZE.QUARTER
        }
        const smallImageUrl = `${imageComponents[0]}${size}_${imageComponents[1]}`
        setSource(smallImageUrl)
      }
    } else {
      setSource(src)
    }
  })

  function onError() {
    // fallback to original
    setFallback(true)
  }

  return (
    <div className={cx(styles.imageContainer, className)}>
      <img src={source || `/assets/images/${imageName}`} alt={alt} onError={onError} />
    </div>
  )
}

export default Image
