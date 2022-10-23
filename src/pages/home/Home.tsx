import React, { useEffect } from 'react';
import  { Row, Typography, Input, Col, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';


import './Home.css';
import HomeCard from '../../components/Card/Card';
import DataTable from '../../components/Table/DataTable';

const { Title } = Typography;

const Home: React.FC = ()  => {
    const navigate = useNavigate();

    return  (
        <div className='home-container'>
            <div className='cards-container'>
                <Row style={{ justifyContent: 'space-between',  alignItems: 'end', marginBottom: '30px'}}>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                    >
                    <Title level={4} className="home-title">Appointments</Title>
                    <hr className='hr'/>
                    </Col>
                    <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={5}
                    xl={5}
                
                    >
                    <Input
                        className="home-search"
                        placeholder="Search"
                        suffix={<SearchOutlined  style={{ color: 'red', fontSize: 18 }}/>}
                    />
                    </Col>
                </Row>
                <Row gutter={[24, 0]} style={{ justifyContent: 'space-between'}}>
                    <HomeCard title="Missed" value="15" valueColor={{color: 'var(--red)'}} backGround={{backgroundColor: 'var(--lightRed)'}}/>
                    <HomeCard title="Rescheduled" valueColor={{color: 'var(--orange)'}} value="21" backGround={{backgroundColor: 'var(--lightOrange)'}}/>
                    <HomeCard title="Passed" valueColor={{color: 'var(--green)'}} value="05" backGround={{backgroundColor: 'var(--lightGreen)'}}/>
                </Row>
            </div>
            <div>
                <DataTable />
            </div>
            <Button className='btn-add'>
              <PlusOutlined />
            </Button>
        </div>
    )
}


export default Home;