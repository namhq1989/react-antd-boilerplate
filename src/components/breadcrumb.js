import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Icon } from 'antd'
import './style.less'

class RcBreadcrumb extends React.Component {
  render() {
    return (
      <Breadcrumb className="rc-breadcrumb">
        {/* <Breadcrumb.Item><Icon type="shop" />&nbsp;&nbsp;Cửa hàng</Breadcrumb.Item> */}
        <Breadcrumb.Item><Icon type="shop" />{this.props.name}</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

RcBreadcrumb.propTypes = {
  name: PropTypes.string.isRequired
}

export default RcBreadcrumb
