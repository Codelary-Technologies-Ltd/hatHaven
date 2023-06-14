import React from 'react'

import HomePageHeader from "./../components/HomePageHeader"
import HomeCollection from "./../components/HomeCollection"
import HomePageTestimonials from "./../components/HomePageTestimonial"
import HomepageNews from "./../components/HomePageNews"
const Home = () => {
  return (
    <div>
        <HomePageHeader />
        <HomeCollection />
        <HomePageTestimonials />
        <HomepageNews />
    </div>
  )
}

export default Home