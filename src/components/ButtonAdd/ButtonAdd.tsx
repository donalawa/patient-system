import  React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import './ButtonAdd.css'

const ButtonAdd = () => {
    const navigate = useNavigate();

    return (
        <>
            <Button className='btn-add' onClick={() => navigate('/appointment')}>
                <PlusOutlined />
            </Button>
        </>
    )
}

export default ButtonAdd;