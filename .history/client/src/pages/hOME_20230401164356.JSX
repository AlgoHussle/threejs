import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { 
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
          <motion.header {...slideAnimation("down")}>
            <img 
              src='https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png'
              alt="logo"
              className='h-8 w-8 object-contain'

            />
          </motion.header>
           
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home