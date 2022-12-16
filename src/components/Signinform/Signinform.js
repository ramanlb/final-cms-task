import './signinform.css';
// import { useHistory } from "react-router-dom";
import interact from "../../images/Signinimage/Vector.png";
import Google from "../../images/Signinimage/google.png";
import Hubspot from "../../images/Signinimage/Hub.png";
import React, { useState } from 'react';
import Ellipse1 from "../../images/Signinimage/Ellipse 12.png";
import Ellipse2 from "../../images/Signinimage/Ellipse 11.png";
// import Forgetpass from '../../Components/Forgetpass/Forgetpass';
import Forgetpass from '../Forgetpass/Forgetpass'
import SignUp from '../SignUp/SignUp';
import { Link } from 'react-router-dom';
import validator from "validator";
import VerifyAcc from '../VerifyAcc/VerifyAcc';


export default function Signinform(props) {
  // const history = useHistory();
    // let history = useHistory();
  
    // function handClick() {
    //   history.push("/SignUp");
    // }
    

  const [inputType, setinputType] = useState("password");
  const [hide, sethide] = useState(false);
  function showhidedata() {
    if (inputType === "password") {
      setinputType("text");
      sethide(true);
    } else {
      setinputType("password");
      sethide(false);
    }
  }

  const [popup, setPop] = useState(false)
  const handleClickOpen = () => {
    setPop(!popup)
  };
  const closePopup = () => {
    setPop(false)
  };

  // const [signup, setsignup] = useState(false)
  //   const openSignup = () => {
  //       setsignup(!signup)
  //   }
  //   const closeSignup = () => {
  //     setsignup(false)
  //   }   
  const [message, setMessage] = useState(null);
  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setMessage(null);
      if(checkbox.checked == true && errorMessage == null){
        setvisibal(true)
      }
    } else {
      setMessage("Please, enter valid Email!");
      setvisibal(false)
    }
  };

    const [errorMessage, setErrorMessage] = useState(null)
    const validate = (value) => {
 
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage(null)
        if(checkbox.checked == true && message == null){
          setvisibal(true)
        }
      } else {
        setErrorMessage('Not Valid!')
        setvisibal(false)
      }
    }


    

    const [visibal, setvisibal]= useState(false)
    var checkbox = document.getElementById('scales')
    function signinpage() {
      if(checkbox.checked == true && message == null && errorMessage == null){
        setvisibal(true)
      }
      else{
        setvisibal(false)
      }
    }

  
    const [verifyPopup, setVerifyPop] = useState(false)
    const openverify = () => {
        setVerifyPop(!verifyPopup)
    }
    const closeVerifyPopup = () => {
        setVerifyPop(false)
    }


  return (
    <>
     <div>
          {popup ? <Forgetpass data={closePopup} verifydata={openverify}/> : null}
      </div>
      {verifyPopup ? <VerifyAcc verifyPopUp={closeVerifyPopup} /> : null}
     
      
     
                  

      <div className='container-fluid singinform-hiden'>
        <div className='row signinrow '>
          <div className='col-md-5 col-12 maininteract pr-4 pb-3'>
            <div className='row mt-3 ml-4 logoimg'>
              <div className='imgcenter'>
              <Link to='/'><img src={interact} className="lblogo p-1" alt="" /></Link>
              </div>
            </div>
            <div className='row interactdes text-white ml-4'>
              <h2 className='interactdes-title mr-2 pr-3'>Create your account in easy way</h2>
              <p className='interactdes-text mt-3 pr-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut . </p>
              <Link to='#'><button type="button"  className="btn btn-light account-btn p-2"><Link to="/signup">Create account</Link></button></Link>
              {/*  onClick={() => { history.push("/SignUp")}}*/}
              {/* onClick={openSignup} */}
            </div>
            <img src={Ellipse1} className="ellipseimage1" alt="" />
          </div>
          <div className='right-box col-md-7 col-12 d-flex justify-content-center'>
            <img src={Ellipse2} className="ellipseimage2" alt="" />
            <div className='row'>

              <form className='signincol'>
                <h2 className="signintext text-center pb-2 mb-2"> Sign in</h2>
                <div>
               
                  <div>
                  
                    <input type="email" id="username" name="username" onChange={(e) => validateEmail(e)} className="mailspace w-100 pb-2" placeholder="Email Address" required /> <br /><span className='errorocure'>{message}</span>
                    <div className='psddiv mt-3'>

                      <input type={inputType} id="psw" onChange={(e) => validate(e.target.value)} name="psw" className="psdspace w-100 pb-2" placeholder="Password" required />
                      {hide == true ?
                        <i className="far fa-eye eye-icon eyepassword d-inline float-right" onClick={showhidedata} id="togglePassword"></i> :
                        <i className="far fa-eye-slash eyepassword d-inline float-right" onClick={showhidedata} id="togglePassword"></i>}
                        {errorMessage === '' ? null : <label className='errorocure'>{errorMessage}</label>}
                    </div>
                  </div>
                 
                  <div className='termsin mt-3'>
                    <input onClick={signinpage} type="checkbox" id="scales" name="scales" required />
                    <label for="scales" className='termtext ml-2'> I have read and agree to the Terms of Service</label>
                  </div>
                  
                  <div className='text-center mt-2 createbtn'>
                  { visibal ?
                    <Link to='/signup'><button type="button" className="btn w-100 p-2" >Sign In </button></Link>
                    :
                    <Link to='#'><button type="button" className="btn w-100 p-2" disabled>Sign In </button></Link> }
                  </div>
                  <div className='forgetdata mt-2'>
                    <span className='nodata'>no Account? <Link to="/signup"> <b>Signup now</b></Link></span>
                    {/* onClick={openSignup} */}
                    <p className='forget btn btn-sm float-right text-decoration-none' onClick={handleClickOpen} ><Link>Forgot password?</Link></p>
                  </div>
                  <br />
                  <div className='d-flex align-items-center justify-content-center w-100'><p className='ordevide'>- OR -</p></div>
                  <div className="row btn-section mt-3 d-flex align-items-center justify-content-center">
                    <div className="text-center g-section">
                      <Link to="#"><button className="google btn btn-light"><img className="" src={Google}></img>Sign up with Google</button></Link>
                    </div>
                    {/* <div className="col-md-6 col-12 h-section ">
                      <Link to="#"><button className="hubspot btn btn-light"><img className="" src={Hubspot}></img>Sign up with hubspot</button></Link>
                    </div> */}
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>


      </div>
    </>
  )
}


