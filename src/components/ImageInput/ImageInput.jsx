import React from 'react';
import { Icon, Progress, Spin, Upload } from 'antd';
import './ImageInput.css';
const Dragger = Upload.Dragger;

const ImageUploader = ({ handleFileSelected, form, keyNum }) => {
  const uploadProps = {
    action: '/',
    beforeUpload: (file) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        handleFileSelected(reader.result, file, form, keyNum);
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

const ImageWall = ({ imageURL, percentage, spinning }) => {
  return (
    <div className="image-wall">
      <div className="section progress-section">
        <Progress percent={percentage} type="circle" width={40}/>
      </div>
      <div className="section image-section">
        <Spin spinning={spinning}>
          <img src={imageURL} alt=""/>
        </Spin>
      </div>
    </div>
  )
}

const ImageInput = ({ handleFileSelected, imageURL, percentage, keyNum, form, upoadFinish, existedUrl }) => {
  const { getFieldDecorator } = form;
  const content = imageURL === '' && !existedUrl ? (
    <ImageUploader handleFileSelected={handleFileSelected} form={form} keyNum={keyNum}/>
  ) : (
    <ImageWall imageURL={imageURL||existedUrl} percentage={existedUrl ? 100 : percentage} spinning={!upoadFinish&&!existedUrl}/>
  );
  getFieldDecorator(`paragraphs-${keyNum}.content`, { initialValue: existedUrl ? existedUrl : '' });
  return (
    <div className="image-input">
      { content }
    </div>
  )
}

export default ImageInput;
