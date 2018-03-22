import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import viVn from 'antd/lib/locale-provider/vi_VN'
import { LocaleProvider } from 'antd'
import { AppConst, RoleConst } from './configs'

// Load views
import { LayoutView } from './screens/layout'
import { LoginView, LoginModel } from './screens/login'
import { MerchantView, MerchantModel } from './screens/merchant'
import { AnalyticView, AnalyticModel } from './screens/analytic'
import { ProfileView, ProfileModel } from './screens/profile'

const { ConnectedRouter } = routerRedux

function Routers({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./screens/error')
  })

  // Routes
  const routes = [{
    path: '/login',
    models: () => [LoginModel],
    component: () => LoginView
  }, {
    path: '/merchant',
    models: () => [MerchantModel],
    component: () => MerchantView
  }, {
    path: '/analytic',
    models: () => [AnalyticModel],
    component: () => AnalyticView
  }, {
    path: '/profile',
    models: () => [ProfileModel],
    component: () => ProfileView
  }]

  const role = localStorage.getItem(AppConst.localStorage.roleKey) || 'admin'

  return (
    <LocaleProvider locale={viVn}>
      <ConnectedRouter history={history}>
        <LayoutView>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to={`/${RoleConst[role].pages[0]}`} />)} />
            {
              routes.map(({ path, ...dynamics }) => (
                <Route
                  key={path}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics
                  })}
                />
              ))
            }
            <Route component={error} />
          </Switch>
        </LayoutView>
      </ConnectedRouter>
    </LocaleProvider>
  )
}

Routers.propTypes = {
  history: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired
}

export default Routers
