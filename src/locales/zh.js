const locale = {
  //header
  header: {
    blcok: '区块',
    transaction: '交易',
    account: '账户',
    asset: '资产',
    about: '关于',
    language: '语言: 中文',
    flag: 'zh',
    search: '在此输入区块id、交易id(txid)、账户id或者账户名进行查询'
  },
  index: {
    latest_status: '最新状态',
    last_updated_at: '上次更新时间: {seconds}秒前',
    summary: {
      title: '区块信息',
      head_block_number: '最新区块',
      last_irreversible_block_num: '最新不可逆区块',
      block_interval: '出块时间(秒)',
      recently_missed_count: '最近缺失'
    },
    witness: {
      title: '活跃见证人',
      witness: '见证人',
      last_confirmed_block: '最近确认',
      votes: '总票数'
    },
    committee: {
      title: '活跃理事会成员',
      account: '账户',
      votes: '总票数'
    },
    transactions: {
      title: '最近交易记录',
      type: '类型',
      content: '内容',
      time: '时间'
    },
    asset: {
      title: 'GXChain资产',
      symbol: '资产',
      issuer: '发行人',
      supply: '当前供给'
    },
    ranking: {
      title: '持仓排名',
      number: '序号',
      account: '账户',
      locked_balance: '锁仓资产',
      balance: '流通资产',
      total_balance: '总资产',
      percent: '流通占比'
    },
    statistics: {
      title: '10日交易统计',
      blockchain_run_duration: '{days}天 {hours}时 {minutes}分 {seconds}秒'
    },
    overview: {
      transactions: '总交易数',
      accounts: '账户数',
      duration: '运行时间'
    }
  }
}

export default locale
