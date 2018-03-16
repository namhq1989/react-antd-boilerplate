import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { MenuConst } from '../../../configs'
import './style.less'

const MenuItem = Menu.Item
const { SubMenu } = Menu

const DASHBOARD_KEY = 'dashboard'

class MenuView extends React.Component {
  render() {
    const { mode, location } = this.props
    let pathname = location ? location.pathname.substring(1) : DASHBOARD_KEY
    if (!pathname) {
      pathname = DASHBOARD_KEY
    }

    const menu = MenuConst.slice(0)

    return (
      <Menu className="app-menu" theme="dark" mode={mode} selectedKeys={[pathname]}>
        {
          menu.map((item) => {
            if (!item.children || !item.children.length) {
              return (
                <MenuItem key={item.id} className={`parent-menu-item ${item.isBorderTopItem ? 'app-menu-divider' : ''}`}>
                  <Link to={`/${item.id}`}>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </Link>
                </MenuItem>
              )
            } else {
              return (
                <SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                  {
                    item.children.map((child) => {
                      return (
                        <MenuItem key={child.id}>
                          <Link to={`/${child.id}`}>
                            <span>{child.name}</span>
                          </Link>
                        </MenuItem>
                      )
                    })
                  }
                </SubMenu>
              )
            }
          })
        }
      </Menu>
    )
  }
}

MenuView.propTypes = {
  location: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired
}

export default MenuView
