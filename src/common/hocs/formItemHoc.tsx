import React, { ReactChild, ReactNode } from "react"
import { UploadOutlined } from "@ant-design/icons"
import { Form, Input, Checkbox, Upload, Button, Select, DatePicker, Switch, InputNumber } from "antd"

const { RangePicker } = DatePicker
const { TextArea } = Input
let Option = Select.Option

/**
 * getSelect component
 * @param params
 * @returns {Select Component}
 */
const SelectComponent = (params: { inputConfig: { style: { width: string }; rest: any }; optionArray: [] }) => {
  const { inputConfig = { style: { width: "100%" }, rest: [] }, optionArray } = params
  const { style = { width: "100%" }, ...rest } = inputConfig
  return (
    <Select style={style} {...rest}>
      {optionArray && // progressive logic determination
        optionArray.length > 0 && // A && B && C means A B and C has all been true for this to be carried out
        optionArray.map((item) => {
          return (
            <Option value={item} key={item}>
              {item[1]}
            </Option>
          )
        })}
    </Select>
  )
}

const formHoc = (WrappedComponent: ReactNode) => {
  const FormComponent = ({ dataIndex = "null", formConfig = {}, getFieldDecorator = () => { }, getFieldValue = () => { }, setFiledValue = () => { }, config = {}, ...restProps }) => {
    const { }
  }
}
