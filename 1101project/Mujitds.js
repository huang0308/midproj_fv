import React from 'react';
import { Link } from 'react-router-dom';
import './Mujitds.css';

const Mujitds = () => {
    return(
        <div>
            <h1 className="primary-title"><span> MUJI無印良品</span></h1>
        <div className="container">
    
        <div className="main-nav">
          <ul className="main-menu">
            <li className="home"><Link to="/tw/">首頁</Link></li>
            <li><Link to="https://www.muji.com/tw/products/">商品情報</Link></li>
            <li><Link to="https://www.muji.com/tw/events/">門市活動</Link></li>
            <li><Link to="https://www.muji.com/tw/aboutus/">企業情報</Link></li>
            <li><Link to="https://frommuji.muji.tw/column/">良品生活研究所</Link></li>
            <li><Link to="https://www.muji.com/tw/business/">大宗採購</Link></li>
            <li><Link to="https://www.muji.com/tw/shop_develop/">展店合作</Link></li>
            <li><Link to="https://consumerservice.muji.tw/">顧客服務</Link></li>
            <li><Link to="https://www.muji.com/storelocator/?c=tw">店鋪情報</Link></li>
            <li><Link to="https://www.muji.com/tw/news/">公告</Link></li>
            <li><Link to="https://renovation.muji.tw/">空間改造企劃服務</Link></li>
          </ul>
        <nav/>

        <div className="company">
            <h2 className="secondary-title">關於無印良品</h2>
            <div className="qq">無印良品的誕生背景</div>
                <p className="q1">1980年，原本只是西友株式會社自有品牌的「無印良品」，從40項商品開始至今，已經成長為有近6000項商品的知名獨立品牌。
                1989年起，從西友株式會社獨立出來的良品計畫株式會社，以零售製造業者之姿，從「無印良品」各種商品的企劃開發、製造到流通、銷售的所有業務都一手包辦，商品種類也從衣著開始，拓展至家庭用品、食品等所有日常生活相關用品。</p>
            <div className="qq">無印良品的商品開發精神</div>
                <p className="q1">「無印良品」自成立之初，始終稟持著嚴選良質的素材、捨棄不必要的流程、簡單化的包裝的三項堅持，用心製作「價位合理的良品」。 歷經30年到了現在，無印良品更進一步從生活者的角度思考，將更良善的商品及服務具體旳實現，並向世界提案「好感生活」的概念。為了實現「好感生活」，無印良品在商品開發上提出三個新觀點：◎有道理的設計◎素材及製造流程的檢視◎簡化包裝的堅持</p>
            <div className="qq">有道理的設計</div>
                <p className="q1">無印良品的設計，是為了解決生活中的問題所設計的。無印良品的商品以其簡潔的線條及外型受到許多人喜愛，但我們不單單只是為了設計，而是為了增加使用上的便利性及舒適度為考量而做為設計的發想。例如自由組合層架系列及收納商品，基本寸法設計概念的融入，讓商品可以自由隨著生活情境變化，並延長使用時間。</p>
            <div className="qq">素材及製造流程的檢視</div>
                <p className="q1">充分活用所有的嚴選素材，並充分發揮其特色，捨棄華麗的外觀，並維持高水準的品質。並嚴格檢視每一樣商品從選材到產出的流程，不必經過多餘的裝飾及加工，與商品本質無關的作業流程全部省略，以最自然環保的方式，製作最高品質的優質良品。例如無垢木家具系列、有機棉系列商品等。</p>
            <div className="qq">簡單化包裝的堅持</div>
                <p className="q1">沒有多餘的裝飾，以商品本來的顏色與形狀為重點，不採用過度的包裝。藉由整體包裝或是裝入共同容器的方式，讓顧客能夠一目了然地看清楚商品，也可以達到保護地球資源的目的，省略不必要的包裝及加工，同時減少垃圾量為環保盡一份心力。例如簡約扶手沙發、寢織品的包裝等。</p>
            <div className="redline"></div>
        </div>
    </div>
    </div>
    </div>
    );
};

export default Mujitds;