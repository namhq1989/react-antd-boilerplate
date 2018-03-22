import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.less'

class TransitionView extends React.Component {
  render() {
    return (
      <CSSTransition
        {...this.props}
        classNames="fade"
        timeout={700}
      />
    )
  }
}

export default TransitionView
