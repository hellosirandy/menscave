import React, { Component } from 'react';
import ImageInput from '../components/ImageInput/ImageInput';
import API from '../api';
const api = new API();

export default class ImageInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      percentage: 0,
      upoadFinish: false,
    }
  }
  handleFileSelected = (url, file, form, keyNum) => {
    this.setState({ imageURL: url });
    api.uploadImage(file, (snapshot) => {
      const percentage = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      this.setState({ percentage });
    }, (snapshot) => {
      let update = {};
      update[`paragraphs-${keyNum}.content`] = snapshot.downloadURL;
      form.setFieldsValue(update);
      this.setState({ upoadFinish: true });
    });
  }
  render() {
    const { imageURL, percentage, upoadFinish } = this.state;
    return (
      <ImageInput
        handleFileSelected={this.handleFileSelected}
        imageURL={imageURL}
        percentage={percentage}
        keyNum={this.props.keyNum}
        form={this.props.form}
        upoadFinish={upoadFinish}
      />
    )
  }
}
