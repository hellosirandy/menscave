import React, { Component } from 'react';
import ParagraphInput from '../components/ParagraphInput/ParagraphInput';
import Paragraph from '../models/paragraph';

let uuid = 0;
export default class ParagraphInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraphs: [new Paragraph(null, 'split', null)],
    }
  }

  handleHasTitleClick = (keyNum) => {
    const { form } = this.props;
    const paragraphs = form.getFieldValue('paragraphs');
    if (paragraphs[keyNum].title === null) {
      paragraphs[keyNum].title = '';
    } else {
      paragraphs[keyNum].title = null;
    }
    form.setFieldsValue({ paragraphs });
  }

  handleAddButtonClick = (num, type) => {
    const { form } = this.props;
    let keys = form.getFieldValue('keys');
    keys.splice(num+1, 0, ++uuid);
    const paragraphs = form.getFieldValue('paragraphs');
    const newParagraph = new Paragraph(null, type, null);
    const nextParagraphs = paragraphs.concat(newParagraph);
    form.setFieldsValue({
      keys: keys,
      paragraphs: nextParagraphs,
    });
    console.log(form.getFieldValue('keys'));
  }

  handleDeleteButtonClick = (k, form) => {
    const keys = form.getFieldValue('keys');
    if (keys.length === 1) {
      return;
    }
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('paragraphs', {initialValue: this.state.paragraphs});
    const paragraphs = getFieldValue('paragraphs');
    getFieldDecorator('keys', {initialValue: paragraphs.map((p, index) => {return index;})});
    const keys = getFieldValue('keys');
    const paragraphInputs = keys.map((k, index) => {
      return(
        <ParagraphInput
          key={k}
          form={this.props.form}
          handleHasTitleClick={this.handleHasTitleClick}
          handleAddButtonClick={this.handleAddButtonClick}
          handleDeleteButtonClick={this.handleDeleteButtonClick}
          index={index}
          paragraph={paragraphs[k]}
          keyNum={k}
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
