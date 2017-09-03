import React from 'react';
import { Row, Col } from 'antd';
import './SplitView.css';

const SplitView = () => {
  return(
    <div className="split-view">
      <Row gutter={12}>
        <Col className="content" xs={{ span: 24 }} sm={{ span: 12 }}>
          Whatever content Whatever content Whatever content Whatever content Whatever content Whatever content Whatever content Whatever content Whatever content Whatever content
        </Col>
        <Col className="content" xs={{ span: 24 }} sm={{ span: 12 }}>
          管它的內容管它的內容管它的內容管它的內容管它的內容管它的內容管它的內容管它的內容管它的內容管它的內容管它的內容管它的內容
        </Col>
      </Row>
    </div>
  )
}

export default SplitView;
