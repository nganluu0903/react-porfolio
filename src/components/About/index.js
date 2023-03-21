import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faGit, faHtml5, faJenkins, faPython, faReact, faUbuntu } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {setLetterClass('text-animate-hover')}, 3000)
      }, []);
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                Welcome to my portfolio!
                I am a software engineer with a passion for designing and developing innovative solutions that solve real-world problems.
                I have worked on various projects ranging from KPI and cash flow management systems to DevOps-related tasks, utilizing a wide range of technologies and tools.
                </p>
                <p>
                Throughout my career, I have consistently demonstrated a strong ability to collaborate with cross-functional teams to understand complex business requirements and translate them into effective technical solutions.
                I pride myself on being detail-oriented, and I always strive to deliver high-quality work on time and within budget.
                Whether working independently or as part of a team, I am committed to delivering solutions that meet and exceed client expectations.
                </p>
                <p>
                I hope this portfolio provides you with a clear understanding of my skills, experience, and approach to software engineering.
                Please feel free to contact me if you have any questions or would like to discuss potential collaboration opportunities.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#61dafb' />    
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJenkins} color='#d43733' />    
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031' />    
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faPython} color='#ffe56b'/>    
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGit} color='#e94e31' />    
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faDocker} color='#73abff' />    
                    </div>
                </div>

            </div>
        </div>
        <Loader type='pacman'></Loader>
        </>
    )
}
export default About; 