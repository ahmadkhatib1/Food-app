import { motion } from 'framer-motion';
import React from 'react';
import { Populaer, Veggie } from '../components';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ deuration: 0.5 }}
    >
      <Veggie />
      <Populaer />
    </motion.div>
  )
}

export default Home