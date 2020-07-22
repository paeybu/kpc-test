import React, { useState } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { removeApplicant, clearAllApplicants } from '../redux/actions';

const ApplicantTable = ({
  setIsEditing,
  setCurrentApplicant,
  setCurrentApplicantIndex,
}) => {
  const applicants = useSelector((state) => state.applicants);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dispatch = useDispatch();

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
          <a
            onClick={() => {
              setIsEditing(true);
              setCurrentApplicant(applicants[key]);
              setCurrentApplicantIndex(key);
            }}
          >
            Edit
          </a>
          /<a onClick={() => dispatch(removeApplicant(key))}>Delete</a>
        </span>
      ),
    },
  ];

  const dataSource = [];
  applicants.forEach((a, i) =>
    dataSource.push({
      key: i,
      ...a,
    })
  );

  const isNotEmpty = applicants.length !== 0;
  const hasSelectedAll = applicants.length === selectedRowKeys.length;

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys,
          onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
        }}
      />
      {hasSelectedAll && isNotEmpty && (
        <a onClick={() => dispatch(clearAllApplicants())}>Delete all</a>
      )}
    </>
  );
};

export default ApplicantTable;
