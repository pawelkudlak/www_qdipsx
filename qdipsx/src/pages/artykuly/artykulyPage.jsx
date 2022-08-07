import React from 'react'
import '../../style/pages/artykuly.css'
import CrashBandicootPage from './crashBandicootPage'
import LifeForceTenkaPageV2 from './lifeForceTenkaPageV2'
import LifeForceTenkaPage from './lifeForceTenkaPage'
import ShortcutArticleComponent from '../../components/artykuly/shortcutArticle.component'
import LifeForceTenkaShort from './lifeForceTenkaShort'
import CrashBandicootShort from './crashBandicootShort'

const ArtykulyPage = () => {
  return (
    <div className='articles'>
      {/* <LifeForceTenkaPage /> */}
      {/* <LifeForceTenkaPageV2 /> */}
      <LifeForceTenkaShort />
      <CrashBandicootShort />
    </div>
  )
}

export default ArtykulyPage