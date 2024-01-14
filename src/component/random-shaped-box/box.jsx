import React from "react";  
import './box.css'
import Typewriter from "typewriter-effect";
// function getdiffercenbetweentwodates(date1,date2){
//     const diff = Math.abs(date1 - date2);
//     const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//     return days;
// }

const data = ['Software Engineer','FullStack Developer','MERN Stack Developer','Frontend Developer','Backend Developer'];


const Box = () => {
  return (
    <>
      <div className='box'>
      <div className='circle' />
        <div className='intro'>
          <h2>Hi,I am</h2>
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

//use copilot to
export default Box;