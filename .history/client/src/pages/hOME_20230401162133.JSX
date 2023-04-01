import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { 
  import state from '../store';
  headContainerAnimation, 
  headContentAnimation, 
  headTextAnimation, 
  slideAnimation 
} from '../config/motion' ;

const Home = () => {
  const snap = useSnapshot(state);


  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header>
            <img 
              src='client/public /threejs.png'
              alt='logo'
              className='h-8 w-8 object-contain'

            />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home