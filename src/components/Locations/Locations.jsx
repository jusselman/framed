import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css';
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
            stiffness: 50
        }
    }
}

const newVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 50
        }
    }
}



const Locations = ({ addLocation, house }) => {
    const locations = ['Bay Area', 'Reno', 'Portland', 'Los Angeles'];

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="location container">

            <h3>Step 1: Select Location</h3>
            <ul>
                {locations.map(location => {
                    let spanClass = house.location === location ? 'active' : '';
                    return (
                        <motion.li
                            key={location}
                            onClick={() => addLocation(location)}
                            transition={{ type: 'spring', stiffness: 200 }}
                            whileHover={{ scale: 1.1, originX: 0 }}>
                            <span className={spanClass}>{location}</span>
                        </motion.li>
                    )
                })}
            </ul>

            {house.location && (
                <motion.div
                    variants={newVariants}
                    className="next">
                    <Link to="/materials">
                        <motion.button
                            transition={{ duration: .1 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: '0px 0px 4px rgb(0,0,0)'
                            }}
                            className="rat-btn">Continue</motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    )
}

export default Locations;