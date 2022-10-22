import React from 'react';
import  { Row, Typography, Input, Col, Button, Form, Checkbox, DatePicker,  Select } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";

import './Appointment.css';

const { Title } = Typography;

const Appointment: React.FC = ()  => {
    return  (
        <div >
            <Row style={{ padding: '0 30px', marginTop: '20px'}}>
                <Col>
                    <ArrowLeftOutlined style={{ fontSize: '20px'}}/>
                </Col>
                <Col style={{ marginLeft: '30px'}}>
                    <Title level={5} style={{ fontWeight: 'bold'}}>NEW RECORD</Title>
                </Col>
                
            </Row>
            <hr style={{width: '3%', backgroundColor: 'var(--red)', height: '.1em', margin: '0 auto'}}/>
            <div className='content-container'>
            <Form autoComplete='off' layout="vertical" labelCol={{span: 24}} wrapperCol={{span: 24}} onFinish={(values) => console.log("VALUES", values)}>
                <Row style={{ margin: '0 50px'}} className="section-group">
                    <Title level={5} className="section-title">General Information</Title>
                    <Row style={{ width: '100%',  justifyContent: 'space-between'}} >
                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={4}
                            xl={3}>
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
                            <Input  />
                            </Form.Item>
                        </Col>

                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
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
                            <Input  />
                            </Form.Item>
                        </Col>
                        
                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
                            <Form.Item  name="gender" label="Sex" requiredMark="optional">
                                <Select placeholder='Select your gender' > 
                                    <Select.Option value="male">Male</Select.Option>
                                    <Select.Option value="female">Female</Select.Option>
                                </Select>
                            </Form.Item> 
                        </Col>

                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
                            <Form.Item  
                            name="name" 
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
                            <Input  />
                            </Form.Item>
                        </Col>

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
                            <Input placeholder='Type your email' />
                        </Form.Item>
                    </Row>
                </Row>
                <hr style={{ width: '94%', marginBottom:  '40px', marginTop: '20px'}}/>
                <Row style={{ margin: '0 50px'}} className="section-group" >
                    <Title level={5} className="section-title">Appointment Information</Title>
                    <Row style={{ width: '100%',  justifyContent: 'space-between'}} >
                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={4}
                            xl={4}>
                            <Form.Item  name="dob" label="Appointment Date">
                                <DatePicker style={{width: '100%'}} picker='date' />
                            </Form.Item>
                        </Col>

                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
                            <Form.Item  name="firstTime" label="New">
                                <Select placeholder='First time' > 
                                    <Select.Option value="Yes">Yes</Select.Option>
                                    <Select.Option value="No">No</Select.Option>
                                </Select>
                            </Form.Item> 
                        </Col>

                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={4}
                            xl={4}>
                            <Form.Item  name="dob" label="Request date">
                                <DatePicker style={{width: '100%'}} picker='date' />
                            </Form.Item>
                        </Col>
                            
                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
                            <Form.Item  name="gender" label="Appointment Status">
                                <Select placeholder='Select your gender' > 
                                    <Select.Option value="male">Male</Select.Option>
                                    <Select.Option value="female">Female</Select.Option>
                                </Select>
                            </Form.Item> 
                        </Col>

                    

                        <Form.Item  
                        name="email" 
                        label="Appointment Time" 
                        rules={[
                        {
                            type: 'email',
                            message:  "Please enter a valid email"
                        }
                        ]}
                        hasFeedback
                        >
                            <Input placeholder='Type your email' />
                        </Form.Item>
                    </Row>
                </Row>

                <Row style={{ margin: '15px 50px'}} className="section-group">
                    <Title level={5} className="section-title">Address Information</Title>
                    <Row style={{ width: '100%', columnGap: '20px'}} >
                    

                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
                            <Form.Item  
                            name="name" 
                            label="Address 1"  
                            rules={[
                         
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input  />
                            </Form.Item>
                        </Col>
                

                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
                            <Form.Item  
                            name="name" 
                            label="City"  
                            rules={[
                      
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input  />
                            </Form.Item>
                        </Col>

                    </Row>
                </Row>

                <Row style={{ margin: '15px 50px'}} className="section-group">
                    <Title level={5} className="section-title">Notes</Title>
                    <Row style={{ width: '100%', columnGap: '40px'}} >
                    

                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
                            <Form.Item  
                            name="name" 
                            label="Before appointment"  
                            rules={[
                         
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input.TextArea className='message-box' rows={4} />
                            </Form.Item>
                        </Col>
                

                        <Col xs={24}
                            sm={24}
                            md={11}
                            lg={5}
                            xl={5}>
                            <Form.Item  
                            name="name" 
                            label="After Appointment"  
                            rules={[
                                
                            {
                                whitespace: true
                            },
                            { min: 3 }
                            ]}
                            hasFeedback
                            >
                            <Input.TextArea className='message-box' rows={4}   />
                            </Form.Item>
                        </Col>

                    </Row>
                </Row>

                <Row style={{ margin: '15px 50px', }}>
                    <Row style={{ width: '100%', justifyContent: 'end'}} >
                    <Col xs={24}
                            sm={24}
                            md={4}
                            lg={2}
                            xl={2}>
                            
                            <Form.Item wrapperCol={{span: 20}}>
                                <Button type='primary' className='submit-button' block htmlType='submit'>
                                Save
                                </Button>
                            </Form.Item>
                            </Col>
                    </Row>
                </Row>
            </Form>
            </div>
        </div>
    )
}


export default Appointment;