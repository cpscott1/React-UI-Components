import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

function HeaderContainer() {
  return (
    <div className="header">
      <ImageThumbnail />
      <div className="header-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}


export default HeaderContainer;
