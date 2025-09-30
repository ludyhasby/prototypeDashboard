import React from 'react'
import Sidebar from '../../Component/Sidebar'
import HomeRightbar from '../../Component/HomeRightbar/HomeRightbar'
import './home.css'
export default function Home() {
  return (
    <div className='MainHomeContainer'>
        <Sidebar/>
        <HomeRightbar/>
    </div>
  )
}
