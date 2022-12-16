import { React, useState } from 'react'
import './Navheader.css'
import navicon from '../../images/Sidebar/navicon.png'
import naviconGif from '../../images/Sidebar/naviconGif.gif'
import { Link } from 'react-router-dom'
function Navheader(props) {

    const navstyle = {
        transition: '2s, transform 20s',
        marginLeft:"-25px",
        // paddingBotton:'10px'
    }
    const navnewstyle = {
        transition: '1s, transform 20s',
        marginLeft:"-5px",
        // paddingBotton:'10px'
    }

    const [icon, seticon] = useState(false)
    function changeIcon() {
        props.changeNav()
        seticon(!icon)
    }

    return (
        <>
            <nav class="navbar navbar-dark bg-warning navheader">
                {icon ?
                    <Link onClick={changeIcon} class="navbar-brand ml-2 text-dark" to="/">Navbar</Link> : null
                }
                {icon ?
                    <span style={navstyle} className=''><img onClick={changeIcon} className='btn-sm  ml-2 h-75' src={naviconGif}></img></span> :
                    <span style={navnewstyle} className=''><img onClick={changeIcon} className='btn-sm h-75' src={navicon}></img></span>
                }
            </nav>
        </>
    )
}

export default Navheader