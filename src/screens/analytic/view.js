import React from 'react'
import { connect } from 'dva'
import { Layout } from 'antd'
import { RcBreadcrumb } from '../../components'

class AnalyticView extends React.Component {
  render() {
    return (
      <Layout className="container">
        <RcBreadcrumb name="Analytic" />
        <Layout className="page-content">
          Analytic view
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ analytic }) => ({ analytic }))(AnalyticView)
