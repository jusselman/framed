import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: .5 }}
            className="home container">
            <motion.h2
                animate={{ fontSize: 30 }}
            >
                The Rat House of you Dreams
            </motion.h2>
            <Link to="/location">
                <motion.button
                    transition={{ duration: .1 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 4px rgb(0,0,0)'
                    }}
                    className="btn-rat">
                    Build your Home
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home;