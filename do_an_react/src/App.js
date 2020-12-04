import logo from './logo.svg';
import './App.css';

import TopBanner from './Module/TopBanner/TopBanner';
import Slider from './Module/Slider/Slider';
import Content from './Module/Content/Content';
import Lastest from './Module/Lastest/Lastest';
import Poster from './Module/Poster/Poster';
import PosterDetail from './Module/Poster/PosterDetail';
import Xbox from './Module/Xbox/Xbox';
import Footer from './Module/Footer/Footer';
import Contact from './Module/Contact/Contact';
import { useState } from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';


function App() {
  let abc = 'Chào các bạn';

  const[load_top_banner, SetLoadTopBanner] = useState(true);


  const handleUnMountTopBanner = () => {
    SetLoadTopBanner(false);
  }

  return (
    <>
      <Router>
      
      {
        (load_top_banner)?
        <TopBanner title_page={"Hung " + "Store " + Math.round(Math.random() * 100)} delete_me={handleUnMountTopBanner} />
        :
        null
      }

      
        
        <Switch>

          <Route path='/chi-tiet/:id_san_pham'>
            <PosterDetail />
          </Route>

          <Route path='/chi-tiet'>
            <Poster />
              
            <Xbox />
          </Route>

          

          <Route path='/lien-he'>
            <Contact />
          </Route>

          <Route path='/'>
            <Slider />

            <Content />

            <Lastest />
          </Route>
        </Switch>

      
      
      <Footer />

      </Router>

    </>
  );
}

export default App;
