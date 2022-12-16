import React, { useState, useEffect } from 'react'
import './VerifyAcc.css'
import ellipse from '../../images/VerifyAcc/Ellipse.png'
import childEllipse from '../../images/VerifyAcc/child-ellipse.png'
import mail from '../../images/VerifyAcc/mail.png'
import outline from '../../images/VerifyAcc/outline.png'
import fill from '../../images/VerifyAcc/filled.png'
import closeBtn from '../../images/VerifyAcc/closeBtn.png'

export default function VerifyAcc(props) {

    let count = 0;
    const [counter, setCounter] = useState(50);
    const interval = setInterval(() => countDown(), 1000);

    function countDown() {
        if (count == 1) {
            clearInterval(interval);
            return;
        }
        else if (count <= 50 && counter > 0) {
            count++;
            setCounter(counter - count);
        }
    }

    function startTimer() {
        setCounter(50)
    };

    return (
        <>
            <div className='pop-up-verify'>
                <div className='parent-box'>
                    <div className='verify-box position-relative'>
                        <div className='m-5 subChild-box'>
                            <div className='closeBtn'><button onClick={props.verifyPopUp} className='closeButton'><img className='w-75' src={closeBtn}></img></button></div>
                            <div className='text-center'>
                                <div className='position-relative'>
                                    <img className='ellipse' src={ellipse}></img>
                                    <div className='childEllipse'><img className='childEllipseImg' src={childEllipse}></img></div>
                                    <div className='mail'><img className='mailImg' src={mail}></img></div>
                                    <div className='outline'><img className='outlineImg' src={outline}></img></div>
                                    <div className='fill'><img className='fillImg' src={fill}></img></div>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <p className='headtext text-dark'>Verify your Account</p>
                            </div>
                            <div><p className='subhead m-2'>We have sent email to randomemail@gmail.com to verify your account</p></div>
                            <div className='text-center checkmailbtn'>
                                <button className='w-50 btn resend-btn mt-4'><a className='text-white' href="https://mail.google.com/mail" target="blank">Check MailBox</a></button>
                            </div>
                            <div className='text-center'>
                                {counter === 0 ?
                                    <button onClick={startTimer} className='btn resend-btn mt-2'>Resend Confirmation mail</button> :
                                    <button className='btn resend-btn mt-2 ' disabled>Resend Confirmation mail</button>
                                }
                            </div>
                            <div className='text-center mt-3'>
                                <p className='timer'> after {counter} seconds.</p>
                            </div>
                            {/* <div><button className='btn resend-btn mt-4'>Resend Confirmation mail</button></div>
                            <div className='text-center mt-3'>
                                <p className='timer'> after  seconds.</p>
                            </div> */}

                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}
