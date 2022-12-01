import React from 'react'
import { Mainslider } from './home/Mainslider'
import '../styles/Home.scss'
import { About } from './home/About'

export const Home = () => {
  return (
    <div>
        <Mainslider/>
        <About/>
    </div>
  )
}
