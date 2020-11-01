import Icon from 'components/Icon'
import { useTranslation } from 'react-i18next'
import useStore from 'utils/useStore'

const IndexPage = () => {
  const { t } = useTranslation()
  const { userStore } = useStore()
  return (
    <div>
      {t('index-page')}
      <Icon iconName="blog.svg" />
    </div>
  )
}

export default IndexPage
