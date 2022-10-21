import React from 'react';
import { Row, Col, Layout,  Divider }  from 'antd';

import './Navbar.css';

const { Header  } = Layout;

const Navbar: React.FC = () => {
    return (
        <>
            <Layout>
                <Header style={{ padding: 0, margin: 0 }}>
                    <Row style={{ height: '100%'}}>
                    <Col xxl={8} xl={20} lg={20} xs={24} md={20} sm={22} style={{ textAlign: 'left', backgroundColor: 'var(--primary)', height: '100%', borderBottomRightRadius:  55, paddingLeft:  5, paddingRight: 5 }}>
                        <Row>
                            <h3 className='title'>DrNG</h3>
                                <Divider type="vertical" />
                            <h3 className='title'>PATIENTS</h3>
                        </Row>
                    </Col>
                    </Row>
                </Header>
            </Layout>
        </>
    )
}


export  default Navbar;