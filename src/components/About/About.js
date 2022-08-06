import React from 'react';
import './About.css';
import Me from '../../assets/Me.jpg';
import CSS from '../../assets/skills/CSS.svg';
import Express from '../../assets/skills/Express.svg';
import Git from '../../assets/skills/Git.svg';
import HTML from '../../assets/skills/HTML.svg';
import JavaScript from '../../assets/skills/JavaScript.svg';
import NodeJS from '../../assets/skills/NodeJS.svg';
import React1 from '../../assets/skills/React1.svg';
import TailWaind from '../../assets/skills/TailWind.svg';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'



const Module = props => (
    <div className={`box ${props.darkMode}`}>
        <h1 className="title">{props.title}</h1>
        <p>{props.content}</p>
    </div>
);
function About(props) {
    return (

        <section className='hero' id='home'>
            <div>
                <div>
                    <h1 className="font-link">Hello, I'm <span className="font-link">Sensess</span></h1>
                    <h2 className="font-link">a <span><Typewriter
                        words={['Full-Stack Developer.']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={800000}
                        delaySpeed={100}

                    /></span>
                    </h2>

                    <div>

                        <div id="skills">
                            <h3 className="font-link" >Skills</h3>
                            <img
                                src={CSS} className="skills"
                                alt="CSS"
                            />
                            <img
                                src={Express} className="skills"
                                alt="Express"
                            />
                            <img
                                src={Git} className="skills"
                                alt="Git"
                            />
                            <img
                                src={HTML} className="skills"
                                alt="HTML"
                            />
                            <img
                                src={JavaScript} className="skills"
                                alt="JS"
                            />
                            <img
                                src={NodeJS} className="skills"
                                alt="NodeJS"
                            />
                            <img
                                src={React1} className="skills"
                                alt="React1"
                            />
                            <img
                                src={TailWaind} className="skills"
                                alt="TailWaind"
                            />
                        </div>

                    </div>
                </div>
                <div className='left'>
                    <div className='left_img'>
                        <img src={Me} className="Me"
                            alt="A picture of myself"
                        />
                    </div>

                </div>
            </div>

            <div className='right'>
                <div className='right_about'>
                    <h3 className="font-link">Welcome to my Portfolio</h3>
                    <p className="font-link">Welcome to my digital portfolio! This website is a compilation of the projects that I've completed throughout my time as a full-stack web development student at George Washington University.</p>
                
                    <p className="font-link">Coding has become a recent interest of mine. When I was able to execute my first line of code: "Hello World!" I became passionate in front-end web development- an area were I'll always have the opportunities to interact with new tools and hone in skills that will keep me engaged.</p>
                </div>

            </div>

        </section >




    );
}

export default About;