import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

export default function FormPage() {
  const onFinish = (values) => {
    console.log('Success:', values)
    localStorage.setItem('values', JSON.stringify(values))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const toptext = 'Вxод в личный кабинет'
  return (
    <div className="form-page-wrapper">
      <div className="top-text">
        <h2>{toptext} </h2>
      </div>
      <div className="form-page">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className='form-item'  >
            <Form.Item
              label="Логин"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
           Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
