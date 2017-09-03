import React, { Component } from 'react';

import ImageInput from '../components/ImageInput/ImageInput';

export default class ImageInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    }
  }
  handleFileSelected = (url, file) => {
    this.setState({ imageUrl: url });
    console.log(file);
  }
  render() {
    return (
      <ImageInput handleFileSelected={this.handleFileSelected} imageUrl={this.state.imageUrl}/>
    )
  }
}
