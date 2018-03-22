import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import { TransitionGroup } from 'react-transition-group'
import { Layout } from 'antd'
import styles from './style.less'

import { SidebarView } from './sidebar'
import { HeaderView } from './header'
import { TransitionView } from './transition'

class LayoutView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarCollapsed: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.app.locationPathname !== nextProps.app.locationPathname) {
      console.log('change page')
    }
  }

  // Toggle sidebar
  toggleSidebar = () => {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed
    })
  }

  // On logout
  logout = () => {
    // Logout
    this.props.dispatch({
      type: 'app/logout'
    })
  }

  render() {
    const { children, location, app } = this.props

    return (
      <Layout className={styles.appLayout}>
        {
          app.user ?
            <SidebarView
              isCollapsed={this.state.sidebarCollapsed}
              location={location}
            />
          : null
        }
        <Layout style={{ minHeight: '100vh' }}>
          {
            app.user ?
              <HeaderView
                sidebarCollapsed={this.state.sidebarCollapsed}
                onToggleSidebar={this.toggleSidebar}
                user={app.user}
                logout={this.logout}
              />
            : null
          }
          <Layout>
            <TransitionGroup>
              <TransitionView key={location.key}>
                <div>{children}</div>
              </TransitionView>
            </TransitionGroup>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

LayoutView.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(LayoutView))
