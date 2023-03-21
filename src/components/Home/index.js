
import LogoS from  '../../assets/images/logo-n.png'
import {Link} from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['g', 'a', 'n']
    const jobArray = ['s','o','f','t','w','a','r','e',' ', 'e','n','g','i','n','e','e','r','.']
    useEffect(() => {
        setTimeout(() => {setLetterClass('text-animate-hover')}, 8000)
      }, []);
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoS} alt='developer'></img>
                <AnimatedLetters letterClass={letterClass}
                strArray = {nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray = {jobArray}
                idx={30}/>
                </h1>
                <h2>
                    DevOps
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}
export default Home;