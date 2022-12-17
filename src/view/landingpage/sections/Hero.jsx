'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import styles from '../styles'
import '../styles/globals.css';
import SCREEN_PATH_CODE from 'utils/enums/routes.enum'
import { staggerContainer, slideIn, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex flex-col z-10 mb-10 ml-32">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          W34E
        </motion.h1>


        {/* <motion.div
          className="z-50 absolute bottom-36 "
          variants={textVariant(1.2)}
        >
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />

            <Link to="/edu-app/home">
              <span className="font-normal text-[16px] text-white">
                Start With Us
              </span>
            </Link>
          </button>
        </motion.div> */}

      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[50px] -mt-[12px]"
      >
        <div className='absolute z-40 ml-32'>
          <motion.div
            variants={textVariant(1.3)}
            className="flex flex-row mt-4"
          >
            <h1 className={styles.heroHeading}>Web3</h1>
          </motion.div>
          <motion.div
            variants={textVariant(1.3)}
            className="flex flex-row mt-4"
          >
            <h1 className={styles.heroHeading}>LearningVerse</h1>
          </motion.div>
        </div>
        <motion.div
          className="z-50 absolute right-52 top-[456px] "
          variants={textVariant(1.2)}
        >

          <Link to={SCREEN_PATH_CODE.WEB_APP}>
            <button class=" button px-4 py-6 w-[256px] ">
              <div className='flex flex-row justify-center'>
                <span className='font-bold mr-4 text-3xl text-white'>Join Now</span>
                <svg class="h-8 w-8 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </Link>



        </motion.div>
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
