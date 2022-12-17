import styles from '../styles';

const NewFeatures = () => (
  <div className="grid gap-4 grid-cols-2 sm:max-w-[650px] min-w-[210px]">
    <div className='mr-3 mb-4'>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <svg
          class="h-9 w-9 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
          />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 11l2 2l4 -4" />
        </svg>
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
        Easy approach <br /> to learning
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        The courses are designed intuitively, clearly divided into sections, making it easy for learners to learn.
      </p>
    </div>
    <div className='mr-3 mb-4'>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <svg class="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
        Learn <br /> everywhere
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        Designed and optimized on all platforms, especially Mobile to help learners learn anytime, anywhere.
      </p>
    </div>
    <div className='mr-3 mb-4'>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <svg class="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
        Clear learning <br /> path

      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        Design courses from easy to difficult and have a clear learning path so that learners can easily follow the route.
      </p>
    </div>
    <div className='mr-3 mb-4'>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <svg
          class="h-10 w-10 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="9" />
          <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
          <path d="M12 6v2m0 8v2" />
        </svg>
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
        Learning Fun
      </h1>
      <p className="flex-1 mt-[42px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        Design features such as Learning Battle, Flash card, ... to help users easily remember and have fun while learning.
      </p>
    </div>
  </div>
);

export default NewFeatures;
