import React from 'react'
import { connect } from 'dva'
import { Layout } from 'antd'
import { RcBreadcrumb } from '../../components'

class ProfileView extends React.Component {
  render() {
    return (
      <Layout className="container">
        <RcBreadcrumb name="Profile" />
        <Layout className="page-content">
          Profile view
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ profile }) => ({ profile }))(ProfileView)
