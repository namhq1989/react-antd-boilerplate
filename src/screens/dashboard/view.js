import React from 'react'
import { connect } from 'dva'
import { Layout } from 'antd'
import { RcBreadcrumb } from '../../components'

class DashboardView extends React.Component {
  render() {
    return (
      <Layout className="container">
        <RcBreadcrumb name="Dashboard" />
        <Layout className="page-content">
          Dashboard view
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ dashboard }) => ({ dashboard }))(DashboardView)
