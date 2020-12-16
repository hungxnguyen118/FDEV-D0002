import logo from './logo.svg';
import './App.css';

import TopBanner from './Module/TopBanner/TopBanner';

import TrangChu from './Pages/TrangChu';
import TrangChiTietSanPham from './Pages/TrangChiTietSanPham';
import TrangLienHe from './Pages/TrangLienHe';
import TrangGioHang from './Pages/TrangGioHang';

import Footer from './Module/Footer/Footer';

import ButtonGoToGioHang from './Module/ButtonGoToGioHang';

import { useState } from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import TrangTestMaterialUI from './Pages/TrangTestMaterialUI';


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
            <TrangChiTietSanPham />
          </Route>

          <Route path='/lien-he'>
            <TrangLienHe />
          </Route>

          <Route path='/gio-hang'>
            <TrangGioHang />
          </Route>

          <Route path='/test-material-ui'>
            <TrangTestMaterialUI />
          </Route>

          <Route path='/'>
            <TrangChu />
          </Route>
        </Switch>

      
      <ButtonGoToGioHang />
      <Footer />

      </Router>

    </>
  );
}

export default App;
