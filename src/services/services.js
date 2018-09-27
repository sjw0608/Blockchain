import Vue from 'vue'

let baseUrl = 'http://192.168.1.67:8888'

/**
 * New Block
 * @param {*} callback
 */
export const get_info = () => {
  return Vue.http.post(`${baseUrl}/v1/chain/get_info`)
}

/**
 *TRX
 * @param {*} account_name
 */
export const get_actions = account_name => {
  return Vue.http.post(`${baseUrl}/v1/history/get_actions`, JSON.stringify(account_name))
}

/**
 * Block
 * @param {*} block_id
 */
export const get_block = block_id => {
  return Vue.http.post(`${baseUrl}/v1/chain/get_block`, JSON.stringify(block_id))
}

/**
 * Block Transaction
 * @param {*} tx_id
 */
export const get_transaction = tx_id => {
  return Vue.http.post(`${baseUrl}/v1/history/get_transaction`, JSON.stringify(tx_id))
}

/**
 * Account Info
 * @param {*} account_name
 */
export const get_account = account_name => {
  return Vue.http.post(`${baseUrl}/v1/chain/get_account`, JSON.stringify(account_name))
}
