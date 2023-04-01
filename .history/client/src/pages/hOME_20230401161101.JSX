import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { 
  headContainerAnimation, 
  headContentAnimation, 
  headTextAnimation, 
  slideAnimation 
} from '../config/motion' 
import state from '../store'

const Home = () => {
  const snap = useSnapshot(state);


  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header>
            <img 
              src='./threejs.png'
              alt='logo'
              className='h-8 w-8 ob'
            />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home