import React from 'react'
import '../../style/pages/artykuly.css'
import LifeForceTenkaShort from './lifeForceTenkaShort'
import CrashBandicootShort from './crashBandicootShort'
import NinjaShadowOfDarknessShort from './ninjaShadowOfDarknessShort'
import HerculesShort from './herculesShort'
import ButtonGoToTop from '../../components/buttomGoToTop'
import WRCArcadeShort from './wRCArcadeShort'

const ArtykulyPage = () => {
  return (
    <div className='articles'>
      <WRCArcadeShort />
      <HerculesShort/>
      <LifeForceTenkaShort />
      <CrashBandicootShort />
      <NinjaShadowOfDarknessShort />
      <ButtonGoToTop/>
    </div>
  )
}

export default ArtykulyPage