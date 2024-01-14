import React from "react";  
import './box.css'
import Typewriter from "typewriter-effect";

import kiraa from '../../media/images/kiraa.png'

const data = ['Software Engineer','FullStack Developer','MERN Stack Developer','Frontend Developer','Backend Developer'];

const Box = () => {
    return (
        <>
            <div className='box'>
                <img src={kiraa} alt='profile' className='profile'/>
                <div className='intro'>
                    <h2>Hi, I am</h2>
                    <h1>Kiran Chavhan</h1>
                    <Typewriter
                        className='description'
                        options={{
                            cursor: ''
                        }}
                        onInit={typewriter => {
                            let i = 0;
                            setInterval(() => {
                                typewriter
                                    .deleteAll()
                                    .typeString(data[i++ % data.length])
                                    .start();
                            }, 500);
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Box;