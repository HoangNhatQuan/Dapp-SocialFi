'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = () => (
  <div className='flex lg:flex-row flex-col justify-between mt-10'>
    <motion.div
      variants={fadeIn('left', 'spring', 0.5, 1)}
    >
      <div className='flex flex-col place-items-center'>
        <img
          src="/Asset1.png"
          alt="get-started"
          className="w-[60%] h-[60%] object-contain mb-6"
        />
        <div className="flex flex-col max-w-[650px] place-items-center w-96">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            Learning Battle
          </h4>
          <p className="mt-[16px] font-normal text-[#B0B0B0] lg:text-[20px] text-[14px] text-secondary-white ml-12">
            Participants will be randomly matched based on the same Elo index to conduct a competition to find the winner.
          </p>
        </div>
      </div>

    </motion.div>
    <motion.div
      variants={fadeIn('left', 'spring', 0.75, 1)}
    >
      <div className='flex flex-col place-items-center'>
        <img
          src="/Asset2.png"
          alt="get-started"
          className="w-[60%] h-[60%] object-contain mb-12"
        />
        <div className="flex flex-col max-w-[650px] place-items-center w-96">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            NFT Marketplace
          </h4>
          <p className="mt-[16px] font-normal text-[#B0B0B0] lg:text-[20px] text-[14px] text-secondary-white ml-8">
            Your academic efforts will be certified by the NFT as a pride and self-worth.
          </p>
        </div>
      </div>

    </motion.div>
    <motion.div
      variants={fadeIn('left', 'spring', 1, 1)}
    >
      <div className='flex flex-col place-items-center'>
        <img
          src="/Asset3.png"
          alt="get-started"
          className="w-[50%] h-[50%] object-contain mb-10"
        />
        <div className="flex flex-col max-w-[650px] place-items-center w-96">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white ml-10">
            Mini Hackathon
          </h4>
          <p className="mt-[16px] font-normal text-[#B0B0B0] lg:text-[20px] text-[14px] text-secondary-white ml-16">
            The learning process will be more interesting when learners compete together to solve a problem, through the mini hackathons
          </p>
        </div>
      </div>

    </motion.div>
  </div>
);

export default InsightCard;
