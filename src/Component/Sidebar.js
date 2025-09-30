import React from 'react'
import "./sidebar.css"
import { FaHome, FaTasks, FaMoneyBillAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";

export default function Sidebar() {
  const handleClick = (e, path) => {
    e.preventDefault();
    window.location.href = path; // ganti halaman manual
  };
  return (
    <div className='mainSidebarContainer'>
      <div>
        <ul className='ulContainer'>
          <h4 className='menu'>Menu</h4>
          <a href="/" onClick={(e) => handleClick(e, "/")}>
            <li className='liContainer'>
              <FaHome className='sidebarIcon' />
              <p className='itemNames'>Home</p>
            </li>
          </a>
          <a href="/teams" onClick={(e) => handleClick(e, "/teams")}>
            <li className='liContainer'>
              <GrUserWorker className='sidebarIcon'/>
              <p className='itemNames'>Teams</p>
            </li>
          </a>
          <a href="/progress" onClick={(e) => handleClick(e, "/progress")}>
            <li className='liContainer'>
              <GiProgression className='sidebarIcon'/>
              <p className='itemNames'>Progress [Private]</p>
            </li>
          </a>
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
    </div>
  )
}
