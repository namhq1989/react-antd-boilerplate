import React from 'react'
import { Tooltip } from 'antd'
import './style.less'

export default function RcSelectBox({ status = 'inactive' }) {
  const title = status === 'active' ? 'Đang hoạt động' : 'Không hoạt động'
  return (
    <Tooltip title={title}>
      <div className={`rc-icon-status rc-icon-status-${status}`} />
    </Tooltip>
  )
}
