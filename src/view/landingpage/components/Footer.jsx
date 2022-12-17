'use client';
import { Link } from 'react-router-dom'
import SCREEN_PATH_CODE from 'utils/enums/routes.enum'

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the W34E World !
        </h4>

        <Link to={SCREEN_PATH_CODE.WEB_APP}>
          <button type="button" className="button flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <img
              src="/Logo_Web.svg"
              alt="headset"
              className="w-[40px] h-[40px] object-contain"
            />
            <span className="text-[24px] text-white font-bold">
              Start
            </span>

          </button>
        </Link>

      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            W34E
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 W34E. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
