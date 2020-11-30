import React from 'react';
import Banner from '../components/Banner';
import Countdown from '../components/Countdown';
import AboutEvent from '../components/AboutEvent';

const Content = ({eventDate}) => {
  return (
    <>
      <section >
        <Banner eventDate={eventDate} />
      </section>
      <section className="countdown-section pt-4 pb-5">
        <Countdown eventDate={eventDate} />
      </section>
      <section id="about" className="about-section section">
        <AboutEvent />
      </section>
    </>
  );
};

export default Content;