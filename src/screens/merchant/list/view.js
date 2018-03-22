import React from 'react'
import PropTypes from 'prop-types'
import { Row, Table } from 'antd'
import columns from './columns'

class ListView extends React.Component {
  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool
  }

  render() {
    const { pageSize, total, current, data, isLoading } = this.props
    return (
      <Row className="background-white">
        <Table
          className="app-table app-table-small"
          defaultCurrent={0}
          columns={columns()}
          dataSource={data}
          rowKey="_id"
          pagination={{ pageSize, total, current: current + 1 }}
          onChange={this.props.onChange}
          loading={isLoading}
        />
      </Row>
    )
  }
}

ListView.defaultProps = {
  isLoading: false
}

export default ListView
