import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='container'>
      <div className='main-nav'>
        <img src='/img/muji-logo.png' alt='' className='logo' />
        <div className='main-menu'>
        <Link to='/' className='url'>首頁</Link >
          <Link to='#' className='url'>商品情報</Link>
          <Link to='#' className='url'>門市活動</Link>
          <Link to='#' className='url'>企業情報</Link>
          <Link to='#' className='url'>良品生活研究所</Link>
          <Link to='#' className='url'>大宗採購</Link>
          <Link to='#' className='url'>展店合作</Link>
          <Link to='#' className='url'>良品生活研究所</Link>
          <Link to='#' className='url'>顧客服務</Link>
          <Link to='#' className='url'>店鋪情報</Link>
          <Link to='#' className='url'>公告</Link>
          <Link to='#' className='url'>空間改造企劃服務</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
