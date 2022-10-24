import React, { useEffect,  useState, forwardRef, useImperativeHandle } from 'react'
import {  Table  } from 'antd';
import { EyeOutlined } from '@ant-design/icons'
import { bindActionCreators, combineReducers } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { actionCreators,  State } from '../../state';
import Appointment from '../../interfaces/AppointmentInterface';
import moment from 'moment';


// type TableProps = {
//   data: Array<Object>,
//   loading: boolean
// }
type DataTableProps = {
  searchText: string
}


const DataTable = ({searchText}: DataTableProps,   ref: any) => {
    const [gridData, setGridData] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [sortedInfo, setSortedInfo] = useState<any>({});
    // const [searchText,  setSearchText] = useState("");
    const [filteredInfo,  setFilteredInfo] = useState<any>({});
    let [filteredData]: any = useState();
    // GETING DATA FORMSTATE
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateData:any = useSelector((state: State) => state.appointmentList);
    const { getAppointments, appointmentReadMode, getSingleAppointment} = bindActionCreators(actionCreators, dispatch)

    let data: any;
    let loading = stateData.loading;

    try {
      data = stateData.appointments.docs;
    } catch (error) {
      console.log('ERROR GETING DATA')
    }

    
    let appointmentState =  useSelector((state: State) => state.appointment)

    const handleView = (data: Appointment) => {
      // console.log("ID: ", id);
      appointmentReadMode();
      getSingleAppointment(data.id)
      navigate(`/appointment?id=${data.id}`);
    }

    // handleView();
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            editTable: true,
            sorter:  (a: any,b: any) => a.name.localeCompare(b.name),
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
          },
          {
            title: "Code",
            dataIndex: "uniqueCode",
            editTable: true,
            sorter:  (a: any,b: any) => a.code.length - b.code.length,
            sortOrder: sortedInfo.columnKey === 'uniqueCode' && sortedInfo.order,
          },
            {
                title: "Age",
                dataIndex: "age",
                editTable: true,
                sorter:  (a: any,b: any) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                filters: [
                {text: "20",  value: "20"},
                {text: "21",  value: "21"},
                {text: "22",  value: "22"},
                {text: "23",  value: "23"},
                {text: "24",  value: "24"},
                {text: "32",  value: "32"},
                ],
                filteredValue: filteredInfo.age || null,
                onFilter: (value: any, record: any) => String(record.age).includes(value)
            },
            {
              title: "Gender",
              dataIndex: "gender",
              editTable: true,
              sorter:  (a: any,b: any) => a.gender.localeCompare(b.gender),
              sortOrder: sortedInfo.columnKey === 'gender' && sortedInfo.order,
              filters: [
              {text: "Male",  value: "male"},
              {text: "Female",  value: "female"},
              ],
              filteredValue: filteredInfo.gender || null,
              onFilter: (value: any, record: any) => record.gender  == value
          },

            {
                title: "Address",
                dataIndex: "address",
                editTable: true,
                sorter:  (a: any,b: any) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
              },

              {
                title: "Phone",
                dataIndex: "phone",
                editTable: true,
                sorter:  (a: any,b: any) => a.phone.length - b.phone.length,
                sortOrder: sortedInfo.columnKey === 'phone' && sortedInfo.order,
              },
              {
                title: "Date Created",
                dataIndex: "request_date",
                editTable: true,
                sorter:  (a: any,b: any) => moment(a.request_date).unix() - moment(b.request_date).unix(),
                sortOrder: sortedInfo.columnKey === 'request_date' && sortedInfo.order,
              },
              {
                title: "Appointment Date",
                dataIndex: "appointment_date",
                editTable: true,
                sorter:  (a: any,b: any) => moment(a.appointment_date).unix() - moment(b.appointment_date).unix(),
                sortOrder: sortedInfo.columnKey === 'appointment_date' && sortedInfo.order,
              },
              {
                title: "Status",
                dataIndex: "appointment_status",
                editTable: true,
                sorter:  (a: any,b: any) => a.appointment_status.localeCompare(b.appointment_status),
                sortOrder: sortedInfo.columnKey === 'appointment_status' && sortedInfo.order,
                filters: [
                {text: "success",  value: "success"},
                {text: "rescheduled",  value: "rescheduled"},
                {text: "missed",  value: "missed"},
                {text: "pending",  value: "pending"},
               
                ],
                filteredValue: filteredInfo.appointment_status || null,
                onFilter: (value: any, record: any) => String(record.appointment_status).includes(value),
                render:  (tag: any) => {
                  let className = tag == 'success'  ? 'success'  : 'rescheduled';
                  if(tag == "missed") {
                    className = 'missed';
                  }

                  return (
                    <span className={className}>
                      {tag}
                    </span>
                  )
                } 
            },
            {
                title: "Action",
                align: 'center' as  'center',
                dataIndex: "action",
                render: (_:any, record: Appointment) =>  {

                  return   (
                        <EyeOutlined onClick={() => handleView(record)}/>
                  )
                }
            },
       
      ];
     
   
      const handleChange  = (_:any, filter: any, sorter: any)   => {
        console.log("Sorter", sorter);
        console.log(filter)
        const  {order, field} = sorter;
        setFilteredInfo(filter);
        setSortedInfo({columnKey: field, order })
      }

      

      const reset = () => {
        getAppointments();
      }



   

      useImperativeHandle(ref , () => ({
        globalSearch,
        reset
      }))
      const globalSearch =  () => { 
        console.log("GLOBAL SEARCH")
        console.log(searchText)
        filteredData = data.filter((value: Appointment) => {
          return (
            value.name.toLowerCase().includes(searchText.toLowerCase()) ||
            value.phone.includes(searchText.toLowerCase()) ||
            value.address.toLowerCase().includes(searchText.toLowerCase())
          )
        });
        setGridData(filteredData);
        // data = filteredData;
        // console.log(data);
    
      }


      useEffect(()  => {
          if(!gridData) {
            getAppointments();
          }
          setGridData(data);
      }, [data])

    return (
        <>
            <div className='table-container'>
              <Table rowClassName="table-row" rowKey="id" columns={columns} loading={loading} dataSource={filteredData && filteredData.length ? filteredData : gridData} onChange={handleChange} />
            </div>
          
        </>
    )
}
 
export default forwardRef(DataTable);