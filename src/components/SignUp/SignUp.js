import React, { useState } from 'react'
import './SignUp.css'
import { Link } from "react-router-dom";
import validator from 'validator';
import logo from '../../images/SignUp/lb-logo.png'
import lowerImg from '../../images/SignUp/lower.png'
import google from '../../images/SignUp/google.png'
import hubspot from '../../images/SignUp/hubspot.png'
import upperImg from '../../images/SignUp/upper.png'
// import lowerRight from '../../images/SignUp/lowerRight.png'
// import girlImg from '../../images/SignUp/girl.png'
import VerifyAcc from '../VerifyAcc/VerifyAcc'
// import SignInPage from '../../components/Signinform/Signinform'

export default function SignUp(props) {

    const [Verifypopup, setVerifyPop] = useState(false)
    const verifyPOpUpOpen = (e) => {
        setVerifyPop(!Verifypopup)
        e.preventDefault()
    }
    const closeVerifyPopup = () => {
        setVerifyPop(false)
    }


    const [inputType, setinputType] = useState("password")
    const [show, setshow] = useState(false)
    function showOrHide() {
        if (inputType === "password") {
            setinputType("text");
            setshow(true);
        }
        else {
            setinputType("password");
            setshow(false);
        }
    }


    const [usernameField, setusernameField] = useState(null)
    const usernameValidation = (e) => {
        
        var text = e.target.value;
        if (text == null || text =="") {
            setusernameField("Not Valid!")
            setbuttonVisibility(false)
        } else {
            setusernameField(true);
            if (checkBox.checked == true && passwordText == null && emailText == null) {
                setbuttonVisibility(true);
            }
        }
    }


    const [emailText, setemailText] = useState(null)
    const emailValidation = (e) => {
        var email = e.target.value;
        if (validator.isEmail(email)) {
            setemailText(null);
            if (checkBox.checked == true && passwordText == null && usernameField==true) {
                setbuttonVisibility(true);
            }
        } else {
            setemailText("Not Valid!")
            setbuttonVisibility(false)
        }
    }


    const [passwordText, setpasswordText] = useState(null)
    const passValidation = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setpasswordText(null)
            if (checkBox.checked == true && emailText == null && usernameField==true) {
                setbuttonVisibility(true);
            }
        } else {
            setpasswordText('Choose a strong password!')
            setbuttonVisibility(false)
        }
    }

    const [buttonVisibility, setbuttonVisibility] = useState(false)
    var checkBox = document.getElementById("inlineCheckbox1")
    function checkBoxValidation() {
        if (checkBox.checked == true && emailText == null && passwordText == null && usernameField==true) {
            setbuttonVisibility(true);
        }
        else {
            setbuttonVisibility(false)
        }
    }



    return (
        <>
            {Verifypopup ? <VerifyAcc verifyPopUp={closeVerifyPopup} /> : null}

            <div className='container-fluid sign-up'>
               
                <div className="row signuprow">
                    <div className="col-md-5 col-sm-12 left-block">
                        <div className="logo-section">
                            <Link className='text-center' to='/'><img className="logo p-1" src={logo}></img></Link>
                        </div>
                        <div className=" text-div ">
                            <p className="head-text big-font">Welcome!</p>
                            <p className="small-font left-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut . </p>
                            <Link to='/signin'><button className="btn btn-light sign-btn">SIGN IN</button></Link>
                        </div>
                        <div>
                            <img className="lowerImg" src={lowerImg}></img>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 right-block">
                        <div>
                            <img className="upper" src={upperImg}></img>
                        </div>
                        <div>
                            <div className="right-head">
                                <p className=" text-center">Create Account</p>
                            </div>
                            <div>
                                <div className="form-section">
                                    <form className="form-div">
                                        <input onChange={(e) => usernameValidation(e)} className="mt-4" type="text" id="name" name="name" placeholder='Full Name' />
                                        <label className='text-danger small-font'>{usernameField}</label>

                                        <input onChange={(e) => emailValidation(e)} className="mt-4" type="email" id="email" name="email" placeholder='Email' />
                                        <label className='text-danger small-font'>{emailText}</label>

                                        <input onChange={(e) => passValidation(e.target.value)} className="mt-4" type={inputType} name="password" id="id_password" placeholder='Password' required />

                                        {show == false ?
                                            <i className="far fa-eye-slash eye-icon" onClick={showOrHide} id="togglePassword"></i> :
                                            <i className="far fa-eye eye-icon" onClick={showOrHide} id="togglePassword"></i>
                                        }
                                        {passwordText === '' ? null : <label className='text-danger small-font'>{passwordText}</label>}

                                        <div className="form-check form-check-inline">
                                            <input onClick={checkBoxValidation} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" required />
                                            <label className="form-check-label small-font" htmlFor="inlineCheckbox1">I have read and agree to the Terms of Service</label>
                                        </div>
                                        <div className="mt-4">
                                            {buttonVisibility == true ?
                                                <a href="#"><button onClick={verifyPOpUpOpen} className="small-font button btn w-100">Create Account</button></a> :
                                                <a href="#"><button onClick={verifyPOpUpOpen} className="small-font button btn w-100" disabled>Create Account</button></a>
                                            }
                                        </div>

                                    </form>
                                </div>
                                <div className="text-center">
                                    <div>
                                        <p className="small-font mt-1">Already have an account?<span className='text-primary btn btn-sm py-0'> <Link to='/signin'>Log in</Link></span></p>
                                    </div>
                                    <div>
                                        <p className="or mt-2">-OR-</p>
                                    </div>
                                </div>
                                <div className="row btn-section mt-3">
                                    <div className="col-12 col-md-12 g-section ">
                                        <a href="#"><button className="google btn btn-light"><img className="" src={google}></img>Sign up with Google</button></a>
                                    </div>
                                    {/* <div className="col-12 col-md-6 h-section">
                                        <a href="#"><button className="hubspot btn btn-light"><img className="" src={hubspot}></img>Sign up with hubspot</button></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
