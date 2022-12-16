import React, { useState, useEffect } from 'react'
import './resetpass.css'
import ellipse from '../../images/VerifyAcc/Ellipse.png'
import childEllipse from '../../images/VerifyAcc/child-ellipse.png'
import mail from '../../images/VerifyAcc/lock.png'
import outline from '../../images/VerifyAcc/outline.png'
import fill from '../../images/VerifyAcc/filled.png'
import closeBtn from '../../images/VerifyAcc/closeBtn.png'

export default function VerifyAcc() {

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


    return (
        <>
            <div>
                <div className='parent-box'>
                    <div className='child-box position-relative w-50'>
                        <div className='m-5 subChild-box'>
                            <div className='closeBtn'><button className='closeButton'><img className='w-75' src={closeBtn}></img></button></div>
                            <div className='text-center'>
                                <div className='position-relative'>
                                    <img className='ellipse' src={ellipse}></img>
                                    <div className='childEllipse'><img className='childEllipseImg' src={childEllipse}></img></div>
                                    <div className='lock'><img className='mailImg' src={mail}></img></div>
                                    <div className='outline'><img className='outlineImg' src={outline}></img></div>
                                    <div className='fill'><img className='fillImg' src={fill}></img></div>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <p className='headtext'>Reset Password</p>
                            </div>
                            <div><p className='subhead m-2'>Enter your new password below. The new password must be different from your previous password.</p></div>
                            <input className="mt-4" type={inputType} name="password" id="id_password" placeholder='Password' required />

                            {show == false ?
                                <i className="far fa-eye-slash eye-icon" onClick={showOrHide} id="togglePassword"></i> :
                                <i className="far fa-eye eye-icon" onClick={showOrHide} id="togglePassword"></i>
                            }

                            <input className="mt-4" type={inputType} name="password" id="id_password" placeholder='Confirm Password' required />

                            {show == false ?
                                <i className="far fa-eye-slash eye-icon" onClick={showOrHide} id="togglePassword"></i> :
                                <i className="far fa-eye eye-icon" onClick={showOrHide} id="togglePassword"></i>
                            }

                            <a href="#"><button className="small-font button btn w-100">Reset password</button></a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
