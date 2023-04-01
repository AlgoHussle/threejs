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
            <motion.div className='home-content' {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className='head-text'>
                  LETS <br className='xl:block hidden' /> DO IT.
                </h1>
              </motion.div>
              <motion.div>
                <p> Create your unique and exclusive T-Shirt with our 
                     brand-new 3D customization tool. <strong> Unleash your imagination
                      </strong> </p>
              </motion.div>
            </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home