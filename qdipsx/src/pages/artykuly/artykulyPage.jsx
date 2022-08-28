import React from 'react'
import '../../style/pages/artykuly.css'
import LifeForceTenkaShort from './lifeForceTenkaShort'
import CrashBandicootShort from './crashBandicootShort'
import NinjaShadowOfDarknessShort from './ninjaShadowOfDarknessShort'

const ArtykulyPage = () => {
  return (
    <div className='articles'>
      <LifeForceTenkaShort />
      <CrashBandicootShort />
      <NinjaShadowOfDarknessShort />
    </div>
  )
}

export default ArtykulyPage