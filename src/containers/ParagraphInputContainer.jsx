import React, { Component } from 'react';
import ParagraphInput from '../components/ParagraphInput/ParagraphInput';
import Paragraph from '../models/paragraph';

export default class ParagraphInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasTitle: false,
      paragraphs: [new Paragraph(null, 'single', '')],
    }
  }

  handleHasTitleClick = () => {
    const hasTitle = this.state.hasTitle;
    this.setState({ hasTitle: !hasTitle });
  }

  handleAddButtonClick = (type) => {
    console.log(type);
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { hasTitle, paragraphs } = this.state;
    getFieldDecorator('keys', {initialValue: paragraphs.map((p, index) => {return index;})});
    const keys = getFieldValue('keys');
    const paragraphInputs = paragraphs.map((p, index) => {
      return(
        <ParagraphInput
          hasTitle={hasTitle}
          form={this.props.form}
          handleHasTitleClick={this.handleHasTitleClick}
          handleAddButtonClick={this.handleAddButtonClick}
          paragraph={p}
          key={index}
        />
      )
    });
    return(
      <div>
        {paragraphInputs}
      </div>
    )
  }
}
