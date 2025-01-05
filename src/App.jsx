import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Category from './Components/category/Category'
import Category2 from './Components/category/Category2'
import Service from './Components/service/Service'
import Banner from './Components/Banner/Banner'

import headphone from "./assets/hero/headphone.png"
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Products from './Components/products/Products'
import Blogs from './Components/Blogs/Blogs'
import Partner from './Components/Partner/Partner'
import Footer from './Components/footer/Footer'

const BannerData={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 Jan to 28 Jan",
  image: headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  bgColor:"#f42c37"
}
const BannerData2={
  discount:"30% OFF",
  title:"Happy Hours",
  date:"14 Jan to 28 Jan",
  image: smartwatch2,
  title2:"Smart Solo",
  title3:"Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  bgColor:"#2dcc6f"
}
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Service/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default App