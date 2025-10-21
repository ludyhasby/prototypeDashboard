import React from 'react'
import './homerightbar.css'
import Navbar from "../Navbar"
import HomeRightMain from './HomeRightMain'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Progress from '../../Pages/Progress/Progress';
import TeamMembers from '../../Pages/TeamMembers/TeamMembers';

export default function HomeRightbar() {
  return (
    <div className='mainHomeRightbar'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeRightMain />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/teams" element={<TeamMembers />} />
      </Routes>
    </div>
  )
}