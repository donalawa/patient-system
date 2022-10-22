import React from  'react';
import './Card.css';

import { Card, Row, Col, Typography } from 'antd';

type CardProps = {
  title: String,
  value: String,
  backGround: Object,
  valueColor: Object
}
const HomeCard= ({ title, value, backGround,  valueColor} : CardProps) => {
    const { Title } = Typography;

    return (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={7}
              xl={7}
              className="card"
              
            >
              <Card bordered={false} style={{ borderTopRightRadius: 30, borderBottomLeftRadius: 30,  ...backGround}}>
                <div>
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span className='card-title'>{title}</span>
                      <Title level={1} style={{ color: 'var(--black)', ...valueColor,  marginTop: '10px', marginBottom: '10px',  fontWeight: 'bold' }}>
                        {value} 
                      </Title>
                    </Col>
                   
                  </Row>
                </div>
              </Card>
            </Col>
    )
}

export  default HomeCard;