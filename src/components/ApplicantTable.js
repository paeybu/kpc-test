import React, { useState } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { removeApplicant } from '../redux/actions';

const ApplicantTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dispatch = useDispatch();
  const onSelectChange = (selectedRowKeys) => {
    console.log(selectedRowKeys);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (f, applicant) => `${applicant.firstName} ${applicant.lastName}`,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Mobile Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (phone) => `${phone.areaCode}${phone.number}`,
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
    },
    {
      title: '',
      dataIndex: 'key',
      key: 'key',
      render: (key) => (
        <span>
          <a>Edit</a>/
          <a onClick={() => dispatch(removeApplicant(key))}>Delete</a>
        </span>
      ),
    },
  ];

  const applicants = useSelector((state) => state.applicants);

  const dataSource = [];
  applicants.forEach((a, i) =>
    dataSource.push({
      key: i,
      ...a,
    })
  );

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowSelection={{
        type: 'checkbox',
        selectedRowKeys,
        onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
      }}
    />
  );
};

export default ApplicantTable;
