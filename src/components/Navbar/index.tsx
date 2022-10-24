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
                    <Col xxl={8} xl={8} lg={12} xs={16} md={12} sm={12} style={{ textAlign: 'left', backgroundColor: 'var(--primary)', height: '100%', borderBottomRightRadius:  55, paddingLeft:  5, paddingRight: 5 }}>
                        <Row style={{ marginLeft: '22px'}}>
                            <h3 className='title'>DrNG</h3>
                                <Divider type="vertical" />
                            <h3 className='title-2'>PATIENTS</h3>
                        </Row>
                    </Col>
                    </Row>
                </Header>
            </Layout>
        </>
    )
}


export  default Navbar;