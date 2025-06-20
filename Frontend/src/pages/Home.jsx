import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TopPicks from '../components/TopPicks'
import NewArrivels from '../components/NewArrivels'
import Blogs from '../components/Blogs'
import FollowUs from '../components/FollowUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <TopPicks/>
        <NewArrivels/>
        <Blogs/>
        <FollowUs/>
        <Footer/>
    </div>
  )
}

export default Home