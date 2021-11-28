import React from 'react';
import { Link } from 'react-router-dom';
import './Mujiact.css';

const Mujiact = () => {
    return (
    <div>
            
      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <li className="menu"><Link to to="/tw/">首頁</Link ></li>
            <li><Link to="https://www.muji.com/tw/products/">商品情報</Link ></li>
            <li><Link to="https://www.muji.com/tw/events/">門市活動</Link ></li>
            <li><Link  to="https://www.muji.com/tw/aboutus/">企業情報</Link ></li>
            <li><Link  to="https://frommuji.muji.tw/column/">良品生活研究所</Link ></li>
            <li><Link  to="https://www.muji.com/tw/business/">大宗採購</Link ></li>
            <li><Link to="https://www.muji.com/tw/shop_develop/">展店合作</Link ></li>
            <li><Link to="https://consumerservice.muji.tw/">顧客服務</Link ></li>
            <li><Link to="https://www.muji.com/storelocator/?c=tw">店鋪情報</Link ></li>
            <li><Link to ="https://www.muji.com/tw/news/">公告</Link ></li>
            <li><Link to ="https://renovation.muji.tw/">空間改造企劃服務</Link ></li>
      </ul>
      <nav/>
  
  <Link to  ="https://www.muji.com/tw/events/1601/">
      <img src="./muji_img/JD_丹寧布書套手帳-活動照片.jpg" 
        width="600" 
        height="500" 
        style="display:block; margin:auto;"/></Link>
  <div >
    <tr>
        <td> <Link to ="https://www.muji.com/tw/events/1598/">
            <img src="./muji_img/muji02" 
            width="250" 
            height="150"/></Link ></td>
        <td> <Link to ="https://www.muji.com/tw/events/1587/">
            <img src="./muji_img/muji03.jpg" 
            width="250" 
            height="150" /></Link ></td>
        <td><Link to ="https://www.muji.com/tw/events/1590/">
            <img src="./muji_img/muji04.jpg" 
            width="250" 
            height="150" /></Link ></td>
      </tr>
      <tr>
          <td><Link to="https://www.muji.com/tw/events/1569/">
              <img src="./muji_img/muji05.jpg" 
              width="250" 
              height="150" /></Link ></td>
          <td><Link to="https://www.muji.com/tw/events/1567/">
              <img src="./muji_img/muji06.jpg" 
              width="250" 
              height="150" /></Link ></td>
          <td><Link to="https://www.muji.com/tw/events/1559/">
              <img src="./muji_img/muji07.jpg" 
              width="250" 
              height="150" /></Link ></td>
      </tr>    
      <tr>
          <td><Link to ="https://www.muji.com/tw/events/1562/">
              <img src="./muji_img/muji08.jpg" 
              width="250" 
              height="150"/></Link ></td>
          <td><Link to ="https://www.muji.com/tw/events/1556/">
              <img src="./muji_img/muji09.jpg" 
              width="250" 
              height="150" /></Link ></td>
          <td><Link to ="https://www.muji.com/tw/events/1552/">
              <img src="./muji_img/muji10.jpg" 
              width="250" 
              height="150"/></Link ></td>
      </tr>
  
        </div>
    </div>
    );
};
export default Mujiact;