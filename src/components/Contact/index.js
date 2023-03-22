import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()
    const [letterClass,setLetterClass] = useState('text-animation')
    useEffect(()=> {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                        refForm.current,
                        process.env.REACT_APP_EMAILJS_USER_ID)
                .then(
                    () => {
                        alert('Sent!')
                        window.location = window.location
                    },
                    () => {
                        alert('Failed')
                    }

                )
    }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t', ' ','m','e']} 
                    sdx={15}
                    />
                </h1>
            <p>
                I am interesting in freelance opportunities - especcially ambitious or
                large projects. Beside, if you have other request or question,
                don't hestitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required>
                            </input>
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required>
                            </input>
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder="Subject" required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required />
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND'/>
                        </li>
                    </ul>
                </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )

}
export default Contact;