import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {setLetterClass('text-animate-hover')}, 3000)
      }, []);
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Donec ac odio tempor orci dapibus ultrices in iaculis. Suspendisse sed nisi lacus sed viverra. Vel eros donec ac odio tempor.
                </p>
                <p>
                    In hac habitasse platea dictumst. Facilisis magna etiam tempor orci eu lobortis elementum. Nunc sed velit dignissim sodales ut.
                    Amet luctus venenatis lectus magna fringilla. Id diam maecenas ultricies mi eget mauris pharetra et.
                </p>
                <p>
                    Sagittis orci a scelerisque purus semper eget duis at tellus.
                    Blandit cursus risus at ultrices mi tempus imperdiet nulla.
                    Diam vulputate ut pharetra sit amet aliquam id diam. Curabitur gravida arcu ac tortor dignissim convallis aenean.
                </p>
            </div>
        </div>    
    )
}
export default About; 