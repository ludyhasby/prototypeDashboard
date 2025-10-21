import React from 'react'
import Sidebar from '../../Component/Sidebar'
import HomeRightbar from '../../Component/HomeRightbar/HomeRightbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './home.css'
export default function Home() {
  return (
    <Router>
      <div className='MainHomeContainer'>
          <Sidebar/>
          <HomeRightbar/>
      </div>
    </Router>
  )
}
