export default {
  common: {
    cities: {
      title: 'Thành phố',
      default: 'all',
      list: [{
        id: 'all',
        text: 'Tất cả'
      }, {
        id: 'da-nang',
        text: 'Đà Nẵng'
      }, {
        id: 'ho-chi-minh',
        text: 'TPHCM'
      }]
    }
  },
  merchant: {
    statuses: {
      title: 'Trạng thái',
      default: 'all',
      list: [{
        id: 'all',
        text: 'Tất cả'
      }, {
        id: 'active',
        text: 'Đang hoạt động'
      }, {
        id: 'inactive',
        text: 'Không hoạt động'
      }]
    }
  }
}
