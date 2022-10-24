import React, { useEffect, useState } from 'react';
import  { Row, Typography, Input, Col, Button, Form, Checkbox, DatePicker, TimePicker,  Select } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../state';
import toast, { Toaster } from 'react-hot-toast';

import './Appointment.css';
import moment from 'moment';
import AppointmentType from '../../interfaces/AppointmentInterface';
import { useNavigate, useLocation } from 'react-router-dom';

const { Title } = Typography;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Appointment: React.FC = ()  => {
    // const [appointmentData, setAppointmentData] = useState<AppointmentType>(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    let appointmentState: any =  useSelector((state: State) => state.appointment)
    const { addAppointment, updateAppointment, appointmentReadMode, getSingleAppointment, updateAppointmentMode, resetAppointmentTableMode } = bindActionCreators(actionCreators, dispatch);
    let appointmentData: AppointmentType = appointmentState.appointment ? appointmentState.appointment.appointment.doc : null;


    let isViewing = appointmentState.formMode == 'view' ? true : false;
    

    let query = useQuery();


    const handleSubmit  = (values:  AppointmentType) => {
        let  reqData =  {...values, request_date: values.request_date.format('LL')};
        if(values.appointment_date) {
            reqData = {...reqData, appointment_date: values.appointment_date.format('LL')}
        }
        
        // values.appointment_date.format('LL')
        if(appointmentState.formMode == 'new') {
            addAppointment(reqData);
            toast.success('Added Appointment Successfuly');
            setTimeout(() => {
                navigate('/')
            },  1000)
            
        }else if(appointmentState.formMode == 'edit') {
            try {
                updateAppointment(appointmentData.id, reqData);
                
                toast.success('Updated Appointment Successfuly');
               
                setTimeout(() => {
                    navigate('/')
                },  1000)
            } catch (error) {
                console.log("ERROR: ",error);
            }
        }
    }


    const handleBack = () => {
        resetAppointmentTableMode();
        navigate('/')
    };

    useEffect(() => {
        let id = query.get('id')
        if(id != null) {
            if(!appointmentData) {
                appointmentReadMode();
                getSingleAppointment(id);
            }
            
         
            if(appointmentData !=  null) {
                form.setFieldsValue({
                    uniqueCode: appointmentData.uniqueCode,
                    name: appointmentData.name,
                    gender: appointmentData.gender,
                    phone: appointmentData.phone,
                    email: appointmentData.email,
                    age: appointmentData.age,
                    appointment_date: appointmentData.appointment_date ? moment(appointmentData.appointment_date) : "",
                    first_time:  appointmentData.first_time,
                    request_date: moment(appointmentData.request_date),
                    appointment_status: appointmentData.appointment_status,
                    appointment_time: appointmentData.appointment_time ? moment(appointmentData.appointment_time): "",
                    address:  appointmentData.address,
                    city: appointmentData.city,
                    note_before_appointment:  appointmentData.note_before_appointment,
                    note_after_appointment: appointmentData.note_after_appointment
                })
            }
        }else {
            resetAppointmentTableMode();
        }
     
    },[appointmentData])
    return  (
        <div >
            <Row style={{ padding: '0 30px', marginTop: '20px'}}>
                <Col>
                    <ArrowLeftOutlined onClick={handleBack} style={{ fontSize: '20px'}}/>
                </Col>
                <Col style={{ marginLeft: '30px'}}>
                    <Title level={5} style={{ fontWeight: 'bold'}}>NEW RECORD</Title>
                </Col>
                
            </Row>
            <hr style={{width: '3%', backgroundColor: 'var(--red)', height: '.1em', margin: '0 auto'}}/>
            <div className='content-container'>
        
            <Form autoComplete='off' layout="vertical" form={form} labelCol={{span: 24}} wrapperCol={{span: 24}} onFinish={handleSubmit}>
                <Row style={{ margin: '0 50px'}} className="section-group">
                    <Title level={5} className="section-title">General Information</Title>
                    <Row style={{ width: '100%',  justifyContent: 'space-between'}} >
                        <Col xs={24} sm={24} md={11} lg={4} xl={3}>
                            <Form.Item  
                            name="uniqueCode" 
                            label="Unique Code"  
                            rules={[
                            {
                                required: true,
                                message: "Please enter  a unique code"
                            },
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input disabled={isViewing} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                            <Form.Item  
                            name="name" 
                            label="Name"  
                            rules={[
                            {
                                required: true,
                                message: "Please enter  a unique code"
                            },
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input disabled={isViewing} />
                            </Form.Item>
                        </Col>
                        
                        <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                            <Form.Item rules={[{required: true,  message: "Select Gender"}]}  name="gender" label="Sex">
                                <Select placeholder='Select your gender' disabled={isViewing}> 
                                    <Select.Option value="male">Male</Select.Option>
                                    <Select.Option value="female">Female</Select.Option>
                                </Select>
                            </Form.Item> 
                        </Col>

                        <Col xs={24} sm={24} md={11} lg={4} xl={4}>
                            <Form.Item  
                            name="phone" 
                            label="Phone"  
                            rules={[
                            {
                                required: true,
                                message: "Please enter  a unique code"
                            },
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input disabled={isViewing} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={11} lg={4} xl={4}>
                        <Form.Item  
                        name="email" 
                        label="Email" 
                        rules={[
                        {
                            required: true,
                            message: "Please enter  your email"
                        },
                        {
                            type: 'email',
                            message:  "Please enter a valid email"
                        }
                        ]}
                        hasFeedback
                        >
                            <Input disabled={isViewing} placeholder='Type your email' />
                        </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={11} lg={2} xl={2}>
                        <Form.Item  
                        name="age" 
                        label="Age" 
                        rules={[
                        {
                            required: true,
                            message: "Please enter  your age"
                        },
                        {
                            type: 'string',
                            message:  "Please enter a valid age"
                        }
                        ]}
                        hasFeedback
                        >
                            <Input disabled={isViewing} placeholder='Age' />
                        </Form.Item>
                        </Col>
                    </Row>
                </Row>
                <hr style={{ width: '94%', marginBottom:  '40px', marginTop: '20px'}}/>
                <Row style={{ margin: '0 50px'}} className="section-group" >
                    <Title level={5} className="section-title">Appointment Information</Title>
                    <Row style={{ width: '100%',  justifyContent: 'space-between'}} >
                        <Col xs={24} sm={24} md={11} lg={4} xl={4}>
                            <Form.Item  name="appointment_date" requiredMark="optional" label="Appointment Date">
                                <DatePicker disabled={isViewing} style={{width: '100%'}} picker='date' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                            <Form.Item  name="first_time" rules={[{required: true, message: "Select Option"}]} label="New">
                                <Select disabled={isViewing} placeholder='First time' > 
                                    <Select.Option value="Yes">Yes</Select.Option>
                                    <Select.Option value="No">No</Select.Option>
                                </Select>
                            </Form.Item> 
                        </Col>

                        <Col xs={24} sm={24} md={11} lg={4} xl={4}>
                            <Form.Item  name="request_date" rules={[{required: true, message: "Select Date Of Request"}]} label="Request date">
                                <DatePicker disabled={isViewing} style={{width: '100%'}} picker='date' />
                            </Form.Item>
                        </Col>
                            
                        <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                            <Form.Item  name="appointment_status" rules={[{ required: true, message: "Select Status"}]} label="Appointment Status">
                                <Select disabled={isViewing} placeholder='Select your gender' > 
                                    <Select.Option value="pending">Pending</Select.Option>
                                    <Select.Option value="missed">Missed</Select.Option>
                                    <Select.Option value="rescheduled">Rescheduled</Select.Option>
                                    <Select.Option value="success">Success</Select.Option>
                                </Select>
                            </Form.Item> 
                        </Col>

                    

                        <Form.Item  
                        name="appointment_time" 
                        label="Appointment Time" 
                        requiredMark="optional"
                        hasFeedback
                        >
                            <TimePicker disabled={isViewing} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                        </Form.Item>
                    </Row>
                </Row>

                <Row style={{ margin: '15px 50px'}} className="section-group">
                    <Title level={5} className="section-title">Address Information</Title>
                    <Row style={{ width: '100%', columnGap: '20px'}} >
                    

                        <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                            <Form.Item  
                            name="address" 
                            label="Address 1"  
                            rules={[
                            {
                                required: true,
                                message: "Please Enter Address"
                            },
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input disabled={isViewing}  placeholder='Address'/>
                            </Form.Item>
                        </Col>
                

                        <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                            <Form.Item  
                            name="city" 
                            label="City"  
                            rules={[
                            {
                                required: true,
                                message: "Select City"
                            },
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input disabled={isViewing}  placeholder='City'/>
                            </Form.Item>
                        </Col>

                    </Row>
                </Row>

                <Row style={{ margin: '15px 50px'}} className="section-group">
                    <Title level={5} className="section-title">Notes</Title>
                    <Row style={{ width: '100%', columnGap: '40px'}} >
                    

                        <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                            <Form.Item  
                            name="note_before_appointment" 
                            label="Before appointment"  
                            rules={[
                            {
                                required:  true,
                                message: "Enter Note"
                            },
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input.TextArea disabled={isViewing}  className='message-box' rows={4} />
                            </Form.Item>
                        </Col>
                

                        <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                            <Form.Item  
                            name="note_after_appointment" 
                            label="After Appointment"  
                            rules={[
                                
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input.TextArea disabled={isViewing} className='message-box' rows={4}   />
                            </Form.Item>
                        </Col>

                    </Row>
                </Row>

                <Row style={{ margin: '15px 10px', }}>
                    <Row style={{ width: '100%', justifyContent: 'end'}} >
                    <Col xs={24} sm={24} md={4} lg={2} xl={2}>
                            
                            <Form.Item wrapperCol={{span: 20}}>
                               {appointmentState.formMode  == 'new' && <Button type='primary' className='submit-button' block htmlType='submit'>
                                Save
                                </Button> }
                                { appointmentState.formMode  == 'edit'  &&   <Button type='primary'  className='update-button' htmlType='submit' block>
                                    Save Update
                                </Button> }
                            </Form.Item>
                            </Col>
                    </Row>
                </Row>
            </Form>
            <Row style={{ width: '100%', justifyContent: 'end', paddingRight:  '20px'}} >
                { appointmentState.formMode  == 'view'  &&   <Button type='primary' onClick={updateAppointmentMode} block  className='edit-button' >
                    Edit
                </Button> }
            </Row>
            <Toaster />
            </div>
        </div>
    )
}


export default Appointment;