import React from 'react'
import { connect } from 'dva'
import { Redirect } from 'dva/router'

function ErrorView() {
  return (
    <Redirect to="/" />
  )
}

export default connect()(ErrorView)
