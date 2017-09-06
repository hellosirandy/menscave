import React from 'react';
import { Row, Col } from 'antd';
import './SplitView.css';

const SplitView = ({ content }) => {
  return(
    <div className="split-view">
      <Row gutter={12}>
        <Col className="content" xs={{ span: 24 }} sm={{ span: 12 }}>
          {content.english}
        </Col>
        <Col className="content" xs={{ span: 24 }} sm={{ span: 12 }}>
          {content.chinese}
        </Col>
      </Row>
    </div>
  )
}

export default SplitView;
