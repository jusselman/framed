import React from 'react';
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
            stiffness: 50
        }
    }
}

const Materials = ({ addMaterial, house }) => {
    let materials = ['Brick', 'Wood', 'Steel'];

    return (
        <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className="materials container">

            <h3>Step 2: Choose Materials</h3>
            <ul>
                {materials.map(material => {
                    let spanClass = house.materials.includes(material) ? 'active' : '';
                    return (
                        <motion.li
                            key={material}
                            onClick={() => addMaterial(material)}
                            whileHover={{ scale: 1.1, originX: 0 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <span className={spanClass}>{material}</span>
                        </motion.li>
                    )
                })}
            </ul>

            <Link to="/order">
                <motion.button
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    transition={{ duration: .1 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 4px rgb(0,0,0)'
                    }}
                    className="rat-btn">
                    Order
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Materials;