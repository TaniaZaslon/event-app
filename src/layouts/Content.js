import React from 'react';
import Banner from '../components/Banner';
import Countdown from '../components/Countdown';
import AboutEvent from '../components/AboutEvent';
import ApplyForm from '../components/ApplyForm';

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
      <section id="apply" className="apply-section section">
        <ApplyForm />
      </section>
    </>
  );
};

export default Content;