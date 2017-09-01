import React, { Component } from 'react';
import { Card, Col, Icon, Row } from 'antd';
import './ArticleCard.css';

const Single = () => {
  return(
    <div className="single">
      Whatever content
    </div>
  )
}

const Split = () => {
  return(
    <div className="split">
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

const Image = () => {
  return (
    <div className="image">
      <img src="https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.0-9/21271045_1674821659197276_9061070553551669497_n.jpg?oh=af75ff7b8c7b287c580bdeb0b5e23571&oe=5A59B696" alt=""/>
    </div>
  )
}

export default class ArticleCard extends Component {
  render() {
    return(
      <Card className="article-card" title="Card title" extra="01/01/2018" style={{ width: '100%' }}>
        <Split/>
        <hr/>
        <div className="bottom-buttons">
          <Icon type="message" />
        </div>
      </Card>
    )
  }
}
