import React from 'react';
import { Link } from 'react-router-dom';
import './MujiHome.css';

const MujiHome = () => {
  return (
    <div>
      <div className='wrap'>
        <div className='promptBar-l'>
          <div>貼心提醒</div>
          <div className='promptBar_txt'>
            <Link
              to='https://www.muji.com/tw/news/news/170522.html'
            >
              • 仿冒品提醒聲明
            </Link>
          </div>
        </div>
        <div className='showcase'>
          <img src='/img/show.jpg' alt='' />
        </div>
      </div>
      <card />
      <div className='item'>
        <h1>3A生活提案</h1>
        <item1 />
        <h1>門市服務</h1>
        <item2 />
        <h1>良品服務</h1>
        <item3 />
        <h1>生活影片</h1>
        <item4 />
        <h1>良品生活研究所</h1>
        <item5 />
      </div>
      <div className='maps'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830962086!2d-74.11976348216282!3d40.69766374842546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2smk!4v1547660265534'
          width='1240'
          height='450'
          frameborder='0'
          style='border:0'
          allowfullscreen
        ></iframe>
      </div>
      <footer>
        <div className='footer'>
          <p>
            <span>
              <small>©&nbsp;Ryohin Keikaku Co., Ltd.</small>
            </span>
          </p>
          <ul>
            <li>
              <span target='_self'>
                <small>
                  台灣無印良品股份有限公司 版權所有 轉載必究 © MUJI.tw Co., Ltd.
                </small>
              </span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default MujiHome;
