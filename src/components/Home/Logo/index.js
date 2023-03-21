import './index.scss'
import LogoS from  '../../../assets/images/logo-n.png'
import { useEffect, useRef } from 'react'
import {gsap} from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
const Logo = () => {
    const solidLogoRef = useRef()
    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    },[])
    return (
        <div className="logo-container">
            <img className="solid-logo" ref={solidLogoRef} src={LogoS} alt='S' />
        </div>
    )
}
export default Logo;
