import React from 'react'
import { Input, Col } from 'antd'
import './style.less'

const { Search } = Input

export default function RcSelectBox({ placeholder, onSearch }) {
  return (
    <Col xs={24} sm={24} md={8} lg={6} xl={6} className="rc-component rc-search">
      <div className="section-title">
        <h4>Tìm kiếm</h4>
      </div>
      <Search
        className="section-filter"
        placeholder={placeholder}
        onSearch={onSearch}
        enterButton
      />
    </Col>
  )
}
