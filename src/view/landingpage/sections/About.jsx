'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About W34E" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">W34E</span> is a Learning platform where students can{' '}
        <span className="font-extrabold text-white">
          learn and receive rewards
        </span>{' '}
        for taking courses they want and{' '}
        <span className="font-extrabold text-white">acquiring skills they need. "Incentivized Learning"</span> is made possible by
         our partners who sponsor learning and advertise on{' '}
        <span className="font-extrabold text-white">W34E to attract users and talent</span>. It even allows instructors to be paid for sharing
        <span className="font-extrabold text-white"> courses for free</span>

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
