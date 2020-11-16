import logo from './logo.svg';
import './App.css';

import TopBanner from './Module/TopBanner/TopBanner';
import Slider from './Module/Slider/Slider';
import Content from './Module/Content/Content';
import Lastest from './Module/Lastest/Lastest';
import Poster from './Module/Poster/Poster';
import Xbox from './Module/Xbox/Xbox';
import Footer from './Module/Footer/Footer';


function App() {
  let abc = 'Chào các bạn';
  return (
    <>
      
      <TopBanner title_page={"Hung " + "Store " + Math.round(Math.random() * 100)} />

      <Slider />

      <Content />
      
      <Lastest />
      
      <Poster />
      
      <Xbox />
      
      <Footer />

    </>
  );
}

export default App;
