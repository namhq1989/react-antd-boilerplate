import React from 'react'
import { connect } from 'dva'
import lodash from 'lodash'
import { Layout, Row } from 'antd'
import { RcBreadcrumb, RcSelectBox, RcSearch } from '../../components'
import { ComponentConst } from '../../configs'
import { helper } from '../../utils'

// Components
import { ListView } from './list'

class MerchantView extends React.Component {
  componentWillMount() {
    this.onFilterChange({})
  }

  // Change filter
  onFilterChange = (newFilter = {}) => {
    newFilter.page = 0
    const filter = helper.mergeObjects(this.props.merchant.filter, newFilter)

    const query = lodash.pick(filter, ['page', 'keyword', 'city', 'status'])
    this.loadMerchants(query)
  }

  // On table page change
  onTablePageChange = (pagination) => {
    const { current } = pagination
    const filter = helper.mergeObjects(this.props.merchant.filter, { page: current })

    const query = lodash.pick(filter, ['page', 'keyword', 'city', 'status'])
    query.page -= 1
    this.loadMerchants(query)
  }

  // Load merchants
  loadMerchants = (filter) => {
    this.props.dispatch({
      type: 'merchant/fetch',
      payload: { ...filter }
    })
  }

  render() {
    const { merchant: { merchants, filter }, loading } = this.props

    return (
      <Layout className="container">
        <RcBreadcrumb name={`Địa điểm (${filter.total})`} />
        <Layout className="page-content">
          <Row>
            <RcSearch
              placeholder="Tên địa điểm"
              onSearch={keyword => this.onFilterChange({ keyword })}
            />
            <RcSelectBox
              title={ComponentConst.common.cities.title}
              values={ComponentConst.common.cities.list}
              initValue={filter.city}
              onChange={city => this.onFilterChange({ city })}
            />
            <RcSelectBox
              title={ComponentConst.merchant.statuses.title}
              values={ComponentConst.merchant.statuses.list}
              initValue={filter.status}
              onChange={status => this.onFilterChange({ status })}
            />
          </Row>
          <ListView
            total={filter.total}
            current={filter.page}
            pageSize={filter.limit}
            data={merchants}
            onChange={this.onTablePageChange}
            isLoading={loading.effects['merchant/fetch']}
          />
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ merchant, loading }) => ({ merchant, loading }))(MerchantView)
