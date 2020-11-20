import logo from './logo.svg';
import './App.css';

import TopBanner from './Module/TopBanner/TopBanner';
import Slider from './Module/Slider/Slider';
import Content from './Module/Content/Content';
import Lastest from './Module/Lastest/Lastest';
import Poster from './Module/Poster/Poster';
import Xbox from './Module/Xbox/Xbox';
import Footer from './Module/Footer/Footer';
import Contact from './Module/Contact/Contact';
import { useState } from 'react';


function App() {
  let abc = 'Chào các bạn';

  const[load_top_banner, SetLoadTopBanner] = useState(true);


  const handleUnMountTopBanner = () => {
    SetLoadTopBanner(false);
  }

  return (
    <>
      
      {
        (load_top_banner)?
        <TopBanner title_page={"Hung " + "Store " + Math.round(Math.random() * 100)} delete_me={handleUnMountTopBanner} />
        :
        null
      }

      <Slider />

      <Content />
      
      <Lastest />
      
      <Poster />
      
      <Xbox />

      <Contact />
      
      <Footer />

      

    </>
  );
}

export default App;
