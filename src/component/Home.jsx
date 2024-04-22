import React from 'react'
import Banner from './Banner'
import Slider from './Slider'
import OurPrincliple from './OurPrincliple'

import Cosmeceuticals from './Cosmeceuticals'
import ContactUsNav from './ContactUsNav'
import Cards from './Cards'

const Home = () => {
  return (
    <div className=''>
    <Slider/>
    <Banner/>
    <Cosmeceuticals/>
    <OurPrincliple/>
    <Cards/>
    <ContactUsNav/>
   </div>

  )
}

export default Home
