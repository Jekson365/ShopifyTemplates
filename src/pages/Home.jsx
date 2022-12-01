import React from 'react'
import { Mainslider } from './home/Mainslider'
import '../styles/Home.scss'
import { About } from './home/About'
import { TwoImages } from './home/TwoImages'
import { Oneimage } from './home/Oneimage'

export const Home = () => {
  return (
    <div>
        <Mainslider/>
        <About/>
        <TwoImages/>
        <Oneimage/>
    </div>
  )
}
