import React from 'react'
import Banner from "../components/Careers-section/jobSection/Banner"
import Detail from "../components/Careers-section/jobSection/Detail"
import ScrollToTop from '../components/Home-section/GotoTop/ScrollToTop'

function JobSection() {
  return (
    <div>
      <ScrollToTop />
<Banner />
<Detail />
    </div>
  )
}

export default JobSection