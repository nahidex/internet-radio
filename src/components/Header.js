import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">R.</div>
        <div className="search-wrapper">
          <input type="search" name="" id="" placeholder="Search Stations" />
        </div>
        <div className="user-icon">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
          <span>Katie</span>
        </div>
      </header>
    )
  }
}
