import React, { useEffect,   useState, useRef } from 'react';
import  { Row, Typography, Input, Col, Button, Table } from 'antd';
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import './Home.css';
import HomeCard from '../../components/Card/Card';
import DataTable from '../../components/Table/DataTable';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import { State } from '../../state';
import Appointment from '../../interfaces/AppointmentInterface';

const { Title } = Typography;


interface GlobalSearch {
    globalSearch(): void;
    reset(): void;
}

const Home: React.FC = ()  => {
    const [totalMissed, setMissed] = useState(0);
    const [totalRescheduled, setRecheduled] = useState(0);
    const [totalPassed, setPassed] = useState(0);
    const [searchText,  setSearchText] = useState('');
    const stateData:any = useSelector((state: State) => state.appointmentList);
    let data: any;

    const  TableRef = useRef<GlobalSearch>(null)

    try {
        data = stateData.appointments.docs;
      } catch (error) {
        console.log('ERROR GETING DATA');
        // console.log(error)
    }

    const handleInputChange = (text: any) => {
        setSearchText(text.trim(" "));
        if(text == "") {
            TableRef.current?.reset();
        }else {
            TableRef.current?.globalSearch()
        }
      }

    function  setStat()  {
        let missedVals = 0;
        let resceduleVals = 0;
        let passedVals = 0;
        data.forEach((data: Appointment)  => {
          
            if(data.appointment_status == 'missed') {
                missedVals += 1;
            }else if(data.appointment_status == 'rescheduled') {
                resceduleVals += 1;
            }else if(data.appointment_status  == 'success'){
                passedVals += 1;
            }
        })

        setMissed(missedVals);
        setRecheduled(resceduleVals);
        setPassed(passedVals);
    }
    useEffect(() => {
        if(data) {
           setStat();
        }

    },[stateData])

    return  (
        <div className='home-container'>
            <div className='cards-container'>
                <Row style={{ justifyContent: 'space-between',  alignItems: 'end', marginBottom: '30px'}}>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} >
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
                        suffix={<SearchOutlined onClick={() => TableRef.current?.globalSearch()} style={{ color: 'red', fontSize: 18 }}/>}
                        onChange={(e: any) => handleInputChange(e.target.value)}
                    />
                    </Col>
                </Row>
                <Row gutter={[24, 0]} style={{ justifyContent: 'space-between'}}>
                    <HomeCard title="Missed" value={`${totalMissed}`} valueColor={{color: 'var(--red)'}} backGround={{backgroundColor: 'var(--lightRed)'}}/>
                    <HomeCard title="Rescheduled" value={`${totalRescheduled}`} valueColor={{color: 'var(--orange)'}}  backGround={{backgroundColor: 'var(--lightOrange)'}}/>
                    <HomeCard title="Passed" value={`${totalPassed}`} valueColor={{color: 'var(--green)'}}  backGround={{backgroundColor: 'var(--lightGreen)'}}/>
                </Row>
            </div>
            <div>
                <DataTable searchText={searchText} ref={TableRef}/>
            </div>
            <ButtonAdd />
            <Toaster />
        </div>
    )
}


export default Home;