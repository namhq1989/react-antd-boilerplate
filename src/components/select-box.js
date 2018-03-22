import React from 'react'
import { Select, Col } from 'antd'
import './style.less'

const { Option } = Select

export default function RcSelectBox({ title, values, initValue, onChange }) {
  return (
    <Col xs={24} sm={24} md={8} lg={6} xl={6} className="rc-component">
      <div className="section-title">
        <h4>{title}</h4>
      </div>
      <Select defaultValue={initValue} className="section-filter" onChange={onChange}>
        {
          values.map((item) => {
            return (
              <Option key={item.id} value={item.id}>{item.text}</Option>
            )
          })
        }
      </Select>
    </Col>
  )
}
