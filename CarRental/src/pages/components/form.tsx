import React, { useState } from "react"
import { Button, Form, Input, InputNumber } from "antd"
import { CarFilled } from "@ant-design/icons"

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
}
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values)
}
const layout = { labelCol: { span: 15 }, wrapperCol: { span: 5 } }

const SearchForm = () => {
  const [state,useName] = useState()
  
  return (
  <Form
    // {...layout}
    layout="inline"
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: "none" }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["user", "name"]}
      rules={[{ required: true }]}
      
    >
      <Input placeholder="Car Mark" prefix={<CarFilled className="site-form-item-icon" />}  style={{width: "20rem",height: "3rem"}}/>
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      rules={[{ type: "email" }]}
    >
      <Input placeholder="unavailable choice" style={{width: "20rem",height: "3rem"}}/>
    </Form.Item>
    <Form.Item name={["user", "website"]}>
      <Input placeholder="unavailable choice" style={{width: "20rem",height: "3rem"}}/>
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
)
}
export default SearchForm
