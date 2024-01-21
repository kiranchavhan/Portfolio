import React from "react";
import Box from '../component/random-shaped-box/box';
import './Landing.css';
import Bubble from "../component/Bubble/bubble";

const Landing = () => {
  return (
    <div className="landing">
      <Box />
      <Bubble position={{x:1, y:0}} />
      <Bubble position={{x:-30, y:67}} />
      <Bubble position={{x:50, y:55}} />
      <Bubble position={{x:0, y:0}} />
      <Bubble position={{x:-40, y:50}} />
    </div>
  );
};

export default Landing;
