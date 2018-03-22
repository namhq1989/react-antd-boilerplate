import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Tag } from 'antd'
import { RcIconStatus } from '../../../components'

export default () => {
  return [{
    title: '#',
    dataIndex: '',
    className: 'hidden-break-small',
    render: (value, row, index) => {
      return index + 1
    }
  }, {
    title: 'Cover',
    dataIndex: 'covers',
    render: (value, row) => {
      return (
        <Link to={`/merchant/${row._id}`}>
          <Avatar shape="square" size="large" src={value[0].url} />
        </Link>
      )
    }
  }, {
    title: 'Cửa hàng',
    dataIndex: 'name',
    render: (value, row) => {
      return (
        <Link to={`/merchant/${row._id}`}>
          <RcIconStatus status={row.active ? 'active' : 'inactive'} />{value}
        </Link>
      )
    }
  }, {
    title: 'Địa chỉ',
    dataIndex: 'address',
    className: 'hidden-break-small',
  }, {
    title: 'Danh mục',
    dataIndex: 'categories',
    render: (value = []) => {
      return value.map(item => <Tag key={item._id} color="geekblue">{item.name}</Tag>)
    }
  }]
}
