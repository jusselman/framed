import React from 'react';
import './Order.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            when: 'beforeChildren'
        }
    }
}

const materialVariants = {
    hidden: {
        // y: '100vh'
        opacity: 0
    },
    visible: {
        // y: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: .5,
        }
    }
}

const buttonVariants = {
    hidden: {
        y: '100vh'

    },
    visible: {
        y: 0

    }
}

const Order = ({ house }) => {
    return (
        <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className="container order">
            <h2>Thanks for not Ratting us out</h2>
            <p>You ordered a {house.location} house in:</p>
            <motion.div
                variants={materialVariants}
            >
                {house.materials.map(material => <div key={material}>{material}</div>)}
            </motion.div>
            <Link to="/">
                <motion.button
                    variants={buttonVariants}
                    transition={{ duration: .1, delay: 1 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 4px rgb(0,0,0)'
                    }}
                    className="rat-btn">Home</motion.button>
            </Link>
        </motion.div>
    )
}

export default Order;