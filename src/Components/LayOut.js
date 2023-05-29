import React from 'react'
import { NavBar } from './NavComp/NavBar'
import Channels from './Channels'
import SideBar from './SideBar'
import Cinema from './Cinema'

const LayOut = () => {
  return (
    <div>
      <NavBar />
      <Channels />
      <SideBar />
      <Cinema />

    </div>
  )
}

export default LayOut