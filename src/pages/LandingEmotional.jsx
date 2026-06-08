import React from 'react';
import LandingHeader from '../components/landing/LandingHeader';
import LandingBanner from '../components/landing/LandingBanner';
import HowItWorks from '../components/landing/HowItWorks';
import WhyUs from '../components/landing/WhyUs';
import ProductActivity from '../components/landing/ProductActivity';
import FootSection from '../components/landing/FootSection';

const LandingEmotional = () => {
    return (
    <>
      <LandingHeader />
      <LandingBanner />
      <HowItWorks />
      <WhyUs />
      <ProductActivity />
      <FootSection />
    </>
    );
}

export default LandingEmotional;
