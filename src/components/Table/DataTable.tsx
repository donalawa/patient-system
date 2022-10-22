import React, { useEffect,  useState } from 'react'
import {  Table, Button  } from 'antd';
import { EyeOutlined, PlusOutlined } from '@ant-design/icons'

const DataTable = () => {
    const [gridData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortedInfo, setSortedInfo] = useState<any>({});
    const [searchText,  setSearchText] = useState("");
    const [filteredInfo,  setFilteredInfo] = useState<any>({});
    let [filteredData]: any = useState();

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
            dataIndex: "code",
            editTable: true,
            sorter:  (a: any,b: any) => a.code.length - b.code.length,
            sortOrder: sortedInfo.columnKey === 'code' && sortedInfo.order,
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
                title: "Status",
                dataIndex: "status",
                editTable: true,
                sorter:  (a: any,b: any) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
                filters: [
                {text: "passed",  value: "passed"},
                {text: "rescheduled",  value: "rescheduled"},
                {text: "missed",  value: "missed"},
               
                ],
                filteredValue: filteredInfo.age || null,
                onFilter: (value: any, record: any) => String(record.age).includes(value),
                render:  (tag: any) => {
                  let className = tag == 'passed'  ? 'success'  : 'rescheduled';
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
                render: () =>  {

                  return   (
                        <EyeOutlined onClick={(e) => console.log('CLICKED')}/>
                  )
                }
            },
       
      ];
     
      const data:any = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          code: "A109434",
          phone: "676342323",
          status: "passed",
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          code: "A109434",
          phone: "676342323",
          status: "missed",
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          code: "A109434",
          phone: "676342323",
          status: "rescheduled",
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
          code: "A109434",
          phone: "676342323",
          status: "passed",
        },
      ];


      const handleChange  = (_:any, filter: any, sorter: any)   => {
        console.log("Sorter", sorter);
        const  {order, field} = sorter;
        setFilteredInfo(filter);
        setSortedInfo({columnKey: field, order })
      }

      const  loadData  = async () => {
        setLoading(true);
        // const response  = await axios.get('https://jsonplaceholder.typicode.com/comments');
        // setGridData(response.data);
        setGridData(data);
        setLoading(false);
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

      const globalSearch =  () => {
        filteredData = gridData.filter((value: any) => {
          return (
            value.name.toLowerCase().includes(searchText.toLowerCase()) || 
            value.email.toLowerCase().includes(searchText.toLowerCase())
          )
        });
        setGridData(filteredData);
    
      }

    return (
        <>
            <Table rowClassName="table-row" columns={columns} dataSource={data} onChange={handleChange} />
            <Button className='btn-add'>
              <PlusOutlined />
            </Button>
        </>
    )
}

export default DataTable;