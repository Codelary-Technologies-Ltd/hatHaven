import React from 'react'
import Navbar from "./../components/Navbar"
import Footer from "./../components/Footer"
import HomePageHeader from "./../components/HomePageHeader"
import HomeCollection from "./../components/HomeCollection"
import HomePageTestimonials from "./../components/HomePageTestimonial"
import HomepageNews from "./../components/HomePageNews"
const Home = () => {
  return (
    <div>
        <Navbar />
        <HomePageHeader />
        <HomeCollection />
        <HomePageTestimonials />
        <HomepageNews />
        <Footer />
    </div>
  )
}

export default Home