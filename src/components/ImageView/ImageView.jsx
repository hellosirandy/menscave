import React from 'react';
import { Spin } from 'antd';
import './ImageView.css';

const ImageView = ({ content, loading, finish }) => {
  return (
    <Spin spinning={loading}>
      <div className="image-view">
        <img src={content} alt="" onLoad={finish}/>
      </div>
    </Spin>
  )
}

export default ImageView;
