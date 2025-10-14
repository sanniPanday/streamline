import React from 'react'
import Managementpage from './Managementpage'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import MSlider from './MSlider'
import Subscription from './Subscription'
import FrequentlyM from './FrequentlyM'

function ManagementMain() {
  return (
    <div>
      <Managementpage/>
      <BenefitsSection/>
      <FeatureSection/>
      <Subscription/>
      <MSlider/>
      {/* <FrequentlyM/> */}
    </div>
  )
}

export default ManagementMain
