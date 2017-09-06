import React from 'react';
import './ImageView.css';

const ImageView = ({ content }) => {
  return (
    <div className="image-view">
      <img src={content} alt=""/>
    </div>
  )
}

export default ImageView;
