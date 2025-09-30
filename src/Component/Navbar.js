import React from 'react'
import "./navbar.css"
import {FaSearch } from "react-icons/fa"
import { IoIosContact, IoIosNotifications} from "react-icons/io";

export default function Navbar() {
  return (
    <div className='mainNavbarContainer'>
      <div className='dashboardContainer'>
        <h1 className='dashText'>Dashboard KADA Bootcamp</h1>
      </div>
      <div className='searchItemsContainer'>
        <FaSearch className='searchIcon'/>
        <input type='search' className='searchInput'/>
      </div>
      <div className='profileItemsContainer'>
        <IoIosNotifications className='notificationIcon'/>
        <div className='profileItems'>
          <IoIosContact className='profileIcon'/>
          <p className='profileName'>Fulan Hakim</p>
        </div>
      </div>
    </div>
  )
}
