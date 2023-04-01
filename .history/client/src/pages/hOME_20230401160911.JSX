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
        <motion.div className='home' {...slideAnimation()}>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home