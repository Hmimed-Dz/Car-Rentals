import { Button, Form, Input } from "antd"
import {
  CalculatorOutlined,
  CarFilled,
  CiCircleOutlined,
} from "@ant-design/icons"
import "../css/home.css"
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
const onFinish = (values: any) => {
  console.log(values)
}
const layout = { labelCol: { span: 15 }, wrapperCol: { span: 5 } }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function SearchForm() {
  return (
    <Form
      // {...layout}
      layout="inline"
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: "none" }}
      validateMessages={validateMessages}
    >
      <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
        <Input
          placeholder="Car Mark"
          prefix={
            <CarFilled
              className="site-form-item-icon"
              style={{ height: "30px", width: "40px" }}
            />
          }
          style={{ width: "20rem", height: "3rem" }}
        />
      </Form.Item>
      <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
        <Input
          prefix={<CiCircleOutlined />}
          placeholder="unavailable choice"
          style={{ width: "20rem", height: "3rem" }}
        />
      </Form.Item>
      <Form.Item name={["user", "website"]}>
        <Input
          prefix={<CalculatorOutlined />}
          placeholder="unavailable choice"
          style={{ width: "20rem", height: "3rem" }}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "10rem",
            height: "3rem",
            fontSize: "19px",
            color: "black",
            background: "silver",
          }}
        >
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}
export default SearchForm
