import { React, useState } from 'react'
import './Navsidebar.css'
import { Link, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navheader from '../Navheader/Navheader'
import Home from '../Dummy/Home'
import Linkpage from '../Dummy/Link'
import SignUp from '../SignUp/SignUp';
import Signinform from '../Signinform/Signinform';
import hicon from '../../images/Sidebar/hicon.png'
import licon from '../../images/Sidebar/licon.png'
import inicon from '../../images/Sidebar/inicon.png'
import upicon from '../../images/Sidebar/upicon.png'

function Navsidebar() {

  const [navStyle, setnavStyle] = useState(false)
  function shrinkNav() {
    setnavStyle(!navStyle)
  }

  const normalStyle = {
    transition: '2s, transform 2s',
    width: '200px',
    padding:'20px'
  }

  const transformedStyle = {
    transition: '2s, transform 2s',
    width:'50px'
  }

  const list = [
    {
      navlinks: "/home",
      navitem: "Home",
      icon: hicon
    }, {
      navlinks: "/link",
      navitem: "LInk",
      icon: licon
    }, {
      navlinks: "/signin",
      navitem: "SignIn",
      icon: inicon
    }, {
      navlinks: "/signup",
      navitem: "SignUp",
      icon: upicon
    }
  ];
  return (
    <>

      <Navheader changeNav={shrinkNav} />

      <div className='container-fluid main'>
        <div className="row">
          <div
            style={
              navStyle ? normalStyle : transformedStyle
            }
            className=" bg-danger sideChildBox">
            <ul className="navbar-nav mr-auto text-left">
              {list.map((listItem) => {
                return (
                  <li className="nav-item active">
                    <Link className="nav-link text-white px-2 py-2" to={listItem.navlinks}>
                      <span><img className='p-1' src={listItem.icon}/>&nbsp;</span>
                      {
                        navStyle ?
                          <span>{listItem.navitem}</span> : null
                      }
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="col mainBox scrollbar" id="scroller">
            <Routes>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/link' element={<Linkpage />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* <Outlet/> */}

    </>
  )
}

export default Navsidebar