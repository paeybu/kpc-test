import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  DatePicker,
  InputNumber,
  Radio,
} from 'antd';
import { TITLES, NATIONALITIES, GENDER } from '../helper/const';
import ThaiFlag from '../assets/thailand.svg';
import { addApplicant, editApplicant } from '../redux/actions';
import moment from 'moment';

const { Option } = Select;

const ApplicantForm = ({
  isEditing,
  currentApplicant,
  currentApplicantIndex,
  reset,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinishFailed = () => {};

  const handleOnFinish = (value) => {
    if (!isEditing) {
      dispatch(addApplicant(value));
    } else {
      dispatch(
        editApplicant({
          value,
          index: currentApplicantIndex,
        })
      );
      reset();
    }
  };

  useEffect(() => {
    form.resetFields();
  }, [currentApplicant]);

  return (
    <Form
      onFinish={handleOnFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      initialValues={
        currentApplicant && {
          ...currentApplicant,
          birthday: moment(currentApplicant.birthday),
        }
      }
    >
      <Row>
        <Col span={4}>
          <Form.Item
            label='Title'
            name='title'
            rules={[{ required: true, message: 'Please input your title!' }]}
          >
            <Select>
              {TITLES.map(({ value, text }) => (
                <Option key={value} value={value}>
                  {text}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={10} className='pl-1'>
          <Form.Item
            label='First Name'
            name='firstName'
            rules={[
              { required: true, message: 'Please input your first name!' },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={10} className='pl-1'>
          <Form.Item
            label='Last Name'
            name='lastName'
            rules={[
              { required: true, message: 'Please input your last name!' },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Form.Item
            label='Birthday'
            name='birthday'
            rules={[{ required: true }]}
          >
            <DatePicker
              format='MM/DD/YYYY'
              placeholder='mm/dd/yy'
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={16} className='pl-1'>
          <Form.Item label='Nationality' name='nationality'>
            <Select placeholder='---Please select---'>
              {NATIONALITIES.map((n) => (
                <Option key={n} value={n}>
                  {n}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label='Citizen Id' name='id'>
        <InputNumber max={9999999999999} style={{ width: '20%' }} />
      </Form.Item>
      <Form.Item name='gender' label='Gender'>
        <Radio.Group>
          {GENDER.map(({ value, text }) => (
            <Radio key={value} value={value}>
              {text}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label='Mobile Phone'
        name='phone'
        style={{ marginBottom: '0' }}
        rules={[{ required: true }]}
      >
        <Input.Group compact>
          <Form.Item name={['phone', 'areaCode']}>
            <Select style={{ width: '100px' }}>
              <Option value='+66'>
                <img
                  src={ThaiFlag}
                  style={{ width: '20px', position: 'relative', bottom: '2px' }}
                />
                +66
              </Option>
            </Select>
          </Form.Item>
          -
          <Form.Item name={['phone', 'number']}>
            <InputNumber style={{ width: '200px' }} />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label='Passport No' name='passport'>
        <Col span={4}>
          <InputNumber style={{ width: '100%' }} />
        </Col>
      </Form.Item>
      <Form.Item
        label='Expected salary'
        name='Salary'
        rules={[{ required: true }]}
      >
        <Row>
          <Col span={4}>
            <InputNumber style={{ width: '100%' }} />
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }} span={2}>
            <span className='pl-1'>THB</span>
          </Col>
          <Col span={2} offset={16}>
            <Button type='submit' htmlType='submit'>
              {isEditing ? 'Update' : 'Submit'}
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default ApplicantForm;
