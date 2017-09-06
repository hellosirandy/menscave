import React, { Component } from 'react';
import ImageView from '../components/ImageView/ImageView';

export default class ImageViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }
  handleImageLoaded = () => {
    this.setState({ loading: false });
  }
  render() {
    return (
      <ImageView content={this.props.content} loading={this.state.loading} finish={this.handleImageLoaded}/>
    )
  }
}
