import logo from './logo.svg';
import './App.css';

import TopBanner from './Module/TopBanner/TopBanner';

import TrangChu from './Pages/TrangChu';
import TrangChiTietSanPham from './Pages/TrangChiTietSanPham';
import TrangLienHe from './Pages/TrangLienHe';
import TrangGioHang from './Pages/TrangGioHang';
import TrangThanhToan from './Pages/TrangThanhToan';

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
import TrangTimKiem from './Pages/TrangTimKiem';
import FormChat from './Module/FormChat';

import UploadFile from './Module/UploadFile';
import TrangTruyXuatDonHang from './Pages/TrangTruyXuatDonHang';


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

          <Route path='/thanh-toan'>
            <TrangThanhToan />
          </Route>

          <Route path='/test-material-ui'>
            <TrangTestMaterialUI />
          </Route>

          <Route path='/tim-kiem'>
            <TrangTimKiem />
          </Route>

          <Route path='/don-hang/:ma_truy_xuat_dh'>
            <TrangTruyXuatDonHang />
          </Route>

          <Route path='/'>
            <TrangChu />
          </Route>
        </Switch>

      
      <ButtonGoToGioHang />
      <Footer />

      </Router>

      <FormChat />

      <UploadFile />

    </>
  );
}

export default App;
