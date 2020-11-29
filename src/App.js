import React from 'react';

import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import './styles/index.scss';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
