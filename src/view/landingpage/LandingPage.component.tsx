import React from 'react'
import { Footer, Navbar } from './components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from './sections';
import './styles/globals.css';

function LandingPageComponent() {
  return (
    <div className="bg-primary-black overflow-hidden ">
      <Navbar />
      <Hero />
      <div className="relative mt-32">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative mt-20">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <div className="relative mt-20">
        <Insights />
        <div className="gradient-04 z-0" />
      </div>
      <World />
      <div className='mt-20'>
        <Footer />
      </div>

    </div>
  )
}

export default LandingPageComponent
