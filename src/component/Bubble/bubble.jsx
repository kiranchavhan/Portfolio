import React from 'react';
import { motion } from 'framer-motion';

import './bubble.css';
const Bubble = ({ position }) => {
    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.2, duration: 1 }}
                animate={{
                    x: [0, 20],
                    y: [0, 40],
                }}
                transition={{ type: 'just', duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                    height: '25vh',
                    width: '25vh',
                    borderRadius: '50%',
                    left: `${position.x}vh`,
                    top: `${position.y}vh`,
                    position: 'Relative',
                    display: 'flex',
                    justifyContent: 'center',  
                    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
                    '@media (max-width: 768px)': {
                        height: '15vh',
                        width: '15vh',
                    },
                }}
                className='bubble'
            />
        </div>
    );
};

export default Bubble;
