import React from 'react'
import "./sidebar.css"
import { FaHome, FaTasks, FaMoneyBillAlt } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, NavLink } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div className='mainSidebarContainer'>
        <ul className='ulContainer'>
          <h4 className='menu'>Menu</h4>
          <nav>
            <Link to="/" style={{ margin: 3 }}>
              <li className='liContainer'>
                <FaHome className='sidebarIcon' />
                <p className='itemNames'>Home</p>
              </li>
            </Link>
            <Link to="/teams" style={{ margin: 3 }}>
              <li className='liContainer'>
                <GrUserWorker className='sidebarIcon'/>
                <p className='itemNames'>Teams</p>
              </li>            
            </Link>
            <Link to="/progress" style={{ margin: 3}}>
              <li className='liContainer'>
                <GiProgression className='sidebarIcon'/>
                <p className='itemNames'>Progress [Private]</p>
              </li>
            </Link>
          </nav>
        </ul>
        <div className='mainScheduleContainer'> 
          <h4 className='scheduleTitle'>Schedule Events</h4>
          <div className='scheduleContainer'>
            <input type="radio" value={"Heppi Birthday"}></input>
            <label htmlFor='Heppi Birthday'>WebDev Projects</label>
          </div>
          <div className='scheduleContainer'>
            <input type="radio" value={"Sis Anivesary"}></input>
            <label htmlFor='Sis Anivesary'>Learning BackEnd</label>
          </div>
          <div className='scheduleContainer'>
            <input type="radio" value={"Bestie Wedding"}></input>
            <label htmlFor='Bestie Wedding'>Learning DevOps </label>
          </div>
        </div>
    </div>
  )
}
