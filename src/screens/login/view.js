import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import { AppConst, ImageConst, MessageConst } from '../../configs'
import { notification } from '../../utils'
import './style.less'

const FormItem = Form.Item

class LoginView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  // Input on enter
  onEnter = (e) => {
    if (e.keyCode === 13) {
      this.submitLogin()
    }
  }

  // Input change event
  handleChange = (e) => {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  // Submit login
  submitLogin = () => {
    if (!this.state.email || !this.state.password) {
      notification.error(MessageConst.Login.RequireEmailAndPassword)
    } else if (!AppConst.regex.email.test(this.state.email)) {
      notification.error(MessageConst.Login.EmailIsNotValid)
    } else if (this.state.password.length < 6) {
      notification.error(MessageConst.Login.PasswordLengthLeastCharacters)
    } else {
      this.props.dispatch({
        type: 'login/login',
        payload: {
          email: this.state.email,
          password: this.state.password
        }
      })
    }
  }

  render() {
    const { loading } = this.props

    return (
      <div className="login-page">
        <Row type="flex" justify="center" align="top">
          <Col xs={18} sm={18} md={8} className="page-container">
            <div className="logo">
              <img src={ImageConst.loginHeader} alt="" />
            </div>
            <Form className="form-container">
              <FormItem>
                <Input
                  prefix={<Icon type="user" />}
                  type="email" placeholder="Email" name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  onKeyDown={this.onEnter}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="lock" />}
                  type="password" placeholder="Mật khẩu" name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  onKeyDown={this.onEnter}
                />
              </FormItem>
              <FormItem>
                <Button
                  icon="login"
                  type="primary"
                  htmlType="button"
                  className="zody-button"
                  disabled={loading.effects['login/login']}
                  onClick={this.submitLogin}
                >
                  Đăng nhập
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

LoginView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.object.isRequired
}

export default connect(({ loading }) => ({ loading }))(LoginView)
