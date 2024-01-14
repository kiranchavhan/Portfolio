import React, {useState} from 'react';
import './checkpoint.css';

const Checkpoint = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="checkpoint">
      <div className="checkpoint-circle-title" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="checkpoint-circle"/>
        <div className="checkpoint-title">{title}</div>
      </div>
      <div className={`checkpoint-description ${isHovered ? 'visible' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Checkpoint;
