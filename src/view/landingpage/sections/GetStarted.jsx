'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How W34E Works" />
        <TitleText title={<>W34E Overview</>} />

        <div className="mt-[31px] flex flex-col max-w-[460px] gap-[24px]">
          <div className="flex flex-col">
            <h1 className='text-white text-3xl font-bold'>Learn To Earn</h1>
            <span className='font-normal text-[18px] text-[#B0B0B0]  mt-4'>
              Create a learning environment where
              everyone can hone their programming knowledge,
              blockchain and receive corresponding rewards increase.
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className='text-white text-3xl font-bold'>SocialFi &#40;Learner - Mentor&#41;</h1>
            <span className='font-normal text-[18px] text-[#B0B0B0]  mt-4'>
              Create an ecosystem where people can help each other.
              There is a fee for contributors.
              Help create dedication to the ecosystem, generate income.
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className='text-white text-3xl font-bold'>NFT &#40;Expert hierarchy&#41;</h1>
            <span className='font-normal text-[18px] text-[#B0B0B0]  mt-4'>
              The hierarchy helps to distinguish participants'
              levels from which to track user learning.
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
