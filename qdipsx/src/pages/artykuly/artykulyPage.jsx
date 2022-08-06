import React from 'react'
import '../../style/pages/artykuly.css'
import CrashBandicootPage from './crashBandicootPage'
import LifeForceTenkaPageV2 from './lifeForceTenkaPageV2'
import LifeForceTenkaPage from './lifeForceTenkaPage'
import ShortcutArticleComponent from '../../components/artykuly/shortcutArticle.component'
import LifeForceTenkaShort from './lifeForceTenkaShort'

const ArtykulyPage = () => {
  return (
    <div className='articles'>
      {/* <LifeForceTenkaPage /> */}
      {/* <LifeForceTenkaPageV2 /> */}
      {/* <CrashBandicootPage /> */}
      <LifeForceTenkaShort/>
    </div>
  )
}

export default ArtykulyPage