import React from 'react';
import './Header.css';
import myAvatar from "../../assets/avatar.png"

const Header = () => {
  return (
    <section id="header">
        <div className='container header'>
          <div className='header-left'>
              <img src={myAvatar} alt='avatar'></img>
          </div>

          <div className='header-right'>
              <h1 className='blog-title'>Hi, welcome to my Blog.</h1>
              <p className='u-text-small u-text-light'>I will be talking about myself here and sharing my highlights.</p>
          </div>
        </div>
    </section>
  );
};

export default Header;