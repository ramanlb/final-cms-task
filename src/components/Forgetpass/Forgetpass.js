import './forgetpass.css';
import Ellipse4 from "../../images/forgetimage/Ellipse 14.png";
import Ellipse5 from "../../images/forgetimage/Ellipse 15.png";
import Ellipse6 from "../../images/forgetimage/Ellipse 17.png";
import Ellipse7 from "../../images/forgetimage/Ellipse 18.png";
import Group from "../../images/forgetimage/Group.png";
import lock from "../../images/forgetimage/lock.png";
import React, {useState} from 'react';
import validator from "validator";
// import VerifyAcc from "../VerifyAcc/VerifyAcc"

export default function Forgetpass(props) {
  const [showreset, setshowreset]= useState(false)
  const [message, setMessage] = useState(null);
  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setMessage(null);
      setshowreset(true)
    } else {
      setMessage("Please, enter valid Email!");
      setshowreset(false)
    }
  };

  function handlepopup(){
    // e.preventDefault()
    props.data()
    props.verifydata()
    // props.closeverify()
  }

  return (
    <>
     
    <div className='pop-up-forgetpass'>
      <div className='container-fluid parent-box'>
        <div className='child-box p-5 px-5 position-relative'>
          <div className='closebtn'><button type="button" onClick={props.data} class="btn"><img src={Group} alt="" /></button></div>
          <div className='mainbox pl-5 pr-5'>
            <div className="position-relative">
              <img src={Ellipse5} className="Ellipse5" alt="" />
              
              <div className="Ellipsetwo">
                <img src={Ellipse4} class="Ellipse4" alt="" />
              </div>
              <div className="lockup">
                <img src={lock} class="lock" alt="" />
              </div>
              <div className="Ellipsethree">
                <img src={Ellipse6} class="Ellipse7" alt="" />
              </div>
              
              <div className="Ellipsefour">
                <img src={Ellipse7} class="Ellipse6" alt="" />
              </div>
            </div >
            <div className='maincontent'>
            <h1 className='forgotpsd mt-5'>Forgot Password</h1>
            <p className='enterpara mt-4'>Enter the email address you used when you joined and we’ll <br/> send you instructions to reset your password.</p>
            <p className='enterpara mb-4'> For security reasons, we do NOT store your password. So rest <br/> assured that we will never send your password via email.</p>
            <input type="email" id="userEmail" onChange={(e) => validateEmail(e)} className="mailspace w-100 pb-2" placeholder="Email Address" required /> <br/>
            <span className='emailerror'>{message}</span>
            { showreset ? 
                <button onClick={handlepopup} type="button" class="btn resetbtn w-100 mt-2 mt-4 text-white"><b>Reset password</b></button>:
                <button type="button" class="btn resetbtn w-100 mt-2 mt-4 text-white" disabled><b>Reset password</b></button>
            }
            </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}