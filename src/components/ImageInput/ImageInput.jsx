import React from 'react';
import { Col, Row, Icon, Upload } from 'antd';
import './ImageInput.css';
const Dragger = Upload.Dragger;

const ImageUploader = ({ handleFileSelected }) => {
  const uploadProps = {
    action: '/',
    beforeUpload: (file) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        handleFileSelected(reader.result, file);
      };
      return false;
    },
  };
  return (
    <div className="image-uploader">
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">Click or drag image to this area to upload</p>
      </Dragger>
    </div>
  )
}

const ImageWall = ({ imageUrl }) => {
  return (
    <div className="image-wall">
      <img src={imageUrl} alt=""/>
    </div>
  )
}

const ImageInput = ({ handleFileSelected, imageUrl }) => {
  const content = imageUrl === '' ? (
    <ImageUploader handleFileSelected={handleFileSelected}/>
  ) : (
    <ImageWall imageUrl={imageUrl}/>
  );
  return (
    <div className="image-input">
      { content }
    </div>
  )
}

export default ImageInput;
