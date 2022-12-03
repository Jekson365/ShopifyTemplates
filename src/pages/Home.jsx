import React, { useEffect, useState } from 'react'
import { Mainslider } from './home/Mainslider'
import '../styles/Home.scss'
import { About } from './home/About'
import { TwoImages } from './home/TwoImages'
import { Oneimage } from './home/Oneimage'
import { Trending } from './home/Trending'
import { Footer } from '../components/Footer'
import axios from 'axios'

export const Home = () => {
  
  return (
    <div>
      <Mainslider />
      <About />
      <TwoImages />
      <Oneimage />
      <Trending />
      <Footer />
    </div>
  )
}
