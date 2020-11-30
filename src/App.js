import React from 'react';

import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import './styles/index.scss';

const App = () => {
  const eventDate = new Date('December 17, 2020 10:00:00');  
  return (
    <>
      <Header />
      <Content eventDate={eventDate} />
      <Footer />
    </>
  );
}

export default App;
