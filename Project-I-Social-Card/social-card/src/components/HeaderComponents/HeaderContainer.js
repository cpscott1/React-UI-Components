import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

function HeaderContainer() {
  return (
    <React.Fragment>
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </React.Fragment>
  )
}


export default HeaderContainer;
