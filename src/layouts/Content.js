import React from 'react';
import Banner from '../components/Banner';
import Countdown from '../components/Countdown';

const Content = ({eventDate}) => {
  return (
    <>
      <section >
        <Banner eventDate={eventDate} />
      </section>
      <section className="countdown-section pt-4 pb-5">
        <Countdown eventDate={eventDate} />
      </section>
    </>
  );
};

export default Content;