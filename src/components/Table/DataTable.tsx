import React, { useEffect,  useState } from 'react'
import {  Table  } from 'antd';
import { EyeOutlined } from '@ant-design/icons'
import { bindActionCreators, combineReducers } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { actionCreators,  State } from '../../state';
import Appointment from '../../interfaces/AppointmentInterface';


// type TableProps = {
//   data: Array<Object>,
//   loading: boolean
// }

const DataTable = () => {
    // const [gridData, setGridData] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [sortedInfo, setSortedInfo] = useState<any>({});
    const [searchText,  setSearchText] = useState("");
    const [filteredInfo,  setFilteredInfo] = useState<any>({});
    let [filteredData]: any = useState();
    // GETING DATA FORMSTATE
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateData:any = useSelector((state: State) => state.appointmentList);
    const { getAppointments, appointmentReadMode} = bindActionCreators(actionCreators, dispatch)

    let data = stateData.appointments.docs;
    let loading = stateData.loading;

    if(loading == false) {
      console.log("UPDATE STATE")
      console.log(data)

      // setGridData(data);
    }
    let appointmentState =  useSelector((state: State) => state.appointment)
    const handleView = (id: string) => {
      console.log("ID: ", id);
      appointmentReadMode();
      navigate(`/appointment?id=${id}`);
    //  console.log("NEW STATE", appointmentState)
    }

    // handleView();
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            editTable: true,
            sorter:  (a: any,b: any) => a.name.length - b.name.length,
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
              title: "Sex",
              dataIndex: "gender",
              editTable: true,
              sorter:  (a: any,b: any) => a.gender - b.gender,
              sortOrder: sortedInfo.columnKey === 'gender' && sortedInfo.order,
              filters: [
              {text: "Male",  value: "male"},
              {text: "Female",  value: "female"},
              ],
              filteredValue: filteredInfo.gender || null,
              onFilter: (value: any, record: any) => String(record.gender).includes(value)
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
                sorter:  (a: any,b: any) => a.phone.length - b.phone.length,
                sortOrder: sortedInfo.columnKey === 'request_date' && sortedInfo.order,
              },
              {
                title: "Appointment Date",
                dataIndex: "appointment_date",
                editTable: true,
                sorter:  (a: any,b: any) => a.phone.length - b.phone.length,
                sortOrder: sortedInfo.columnKey === 'request_date' && sortedInfo.order,
              },
              {
                title: "Status",
                dataIndex: "appointment_status",
                editTable: true,
                sorter:  (a: any,b: any) => a.status - b.status,
                sortOrder: sortedInfo.columnKey === 'appointment_status' && sortedInfo.order,
                filters: [
                {text: "passed",  value: "passed"},
                {text: "rescheduled",  value: "rescheduled"},
                {text: "missed",  value: "missed"},
               
                ],
                filteredValue: filteredInfo.status || null,
                onFilter: (value: any, record: any) => String(record.status).includes(value),
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
                        <EyeOutlined onClick={() => handleView(record.id)}/>
                  )
                }
            },
       
      ];
     
      // const data:any = [
      //   {
      //     key: '1',
      //     name: 'John Brown',
      //     age: 32,
      //     sex: 'male',
      //     address: 'New York No. 1 Lake Park',
      //     code: "A109434",
      //     phone: "676342323",
      //     status: "passed",
      //   },
      //   {
      //     key: '2',
      //     name: 'Jim Green',
      //     age: 42,
      //     sex: 'female',
      //     address: 'London No. 1 Lake Park',
      //     code: "A109434",
      //     phone: "676342323",
      //     status: "missed",
      //   },
      //   {
      //     key: '3',
      //     name: 'Joe Black',
      //     age: 32,
      //     sex: 'male',
      //     address: 'Sidney No. 1 Lake Park',
      //     code: "A109434",
      //     phone: "676342323",
      //     status: "rescheduled",
      //   },
      //   {
      //     key: '4',
      //     name: 'Jim Red',
      //     age: 32,
      //     sex: 'male',
      //     address: 'London No. 2 Lake Park',
      //     code: "A109434",
      //     phone: "676342323",
      //     status: "passed",
      //   },
      // ];


      const handleChange  = (_:any, filter: any, sorter: any)   => {
        console.log("Sorter", sorter);
        console.log(filter)
        const  {order, field} = sorter;
        setFilteredInfo(filter);
        setSortedInfo({columnKey: field, order })
      }

      

      const reset = () => {
        setSortedInfo({});
        setFilteredInfo({});
        setSearchText("");
        // loadData();
      }



      const handleInputChange = (e: any) => {
        setSearchText(e.target.value);
        if(e.targe.value == "") {
        //   loadData();
        }else {
    
        }
      }

      // const globalSearch =  () => {
      //   filteredData = gridData.filter((value: any) => {
      //     return (
      //       value.name.toLowerCase().includes(searchText.toLowerCase()) || 
      //       value.email.toLowerCase().includes(searchText.toLowerCase())
      //     )
      //   });
      //   setGridData(filteredData);
    
      // }


      useEffect(()  => {
          getAppointments();
      }, [])

    return (
        <>
            <div className='table-container'>
              <Table rowClassName="table-row" rowKey="id" columns={columns} loading={loading} dataSource={filteredData && filteredData.length ? filteredData : data} onChange={handleChange} />
            </div>
          
        </>
    )
}

export default DataTable;