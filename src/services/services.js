import Vue from 'vue'
import { get_item } from '../utils/localStorage'

var lang = get_item('locale') || navigator.language.split('-')[0]
let baseUrl = lang == 'zh' ? 'http://122.112.235.223:8888' : 'http://159.138.3.207:8888'

/**
 * New Block
 * @param {*} callback
 */
export const get_info = callback => {
  $.ajax({
    url: `${baseUrl}/v1/chain/get_info`,
    method: 'post',
    dataType: 'json',
    success: function(res) {
      callback(res)
    }
  })
}

/**
 *TRX
 * @param {*} account_name
 */
export const get_actions = (account_name, callback) => {
  $.ajax({
    url: `${baseUrl}/v1/history/get_actions`,
    method: 'post',
    dataType: 'json',
    data: JSON.stringify(account_name),
    success: function(res) {
      callback(res)
    }
  })
}

/**
 * Block
 * @param {*} block_id
 */
export const get_block = (block_id, callback) => {
  $.ajax({
    url: `${baseUrl}/v1/chain/get_block`,
    method: 'post',
    dataType: 'json',
    data: JSON.stringify(block_id),
    success: function(res) {
      callback(res)
    }
  })
}

/**
 * Block Transaction
 * @param {*} tx_id
 */
export const get_transaction = (tx_id, callback) => {
  // return Vue.http.post(`${baseUrl}/v1/history/get_transaction`, JSON.stringify(tx_id))
  $.ajax({
    url: `${baseUrl}/v1/history/get_transaction`,
    method: 'post',
    dataType: 'json',
    data: JSON.stringify(tx_id),
    success: function(res) {
      callback(res)
    }
  })
}

/**
 * Account Info
 * @param {*} account_name
 */
export const get_account = (account_name, callback) => {
  // return Vue.http.post(`${baseUrl}/v1/chain/get_account`, JSON.stringify(account_name))
  $.ajax({
    url: `${baseUrl}/v1/chain/get_account`,
    method: 'post',
    dataType: 'json',
    data: JSON.stringify(account_name),
    success: function(res) {
      callback(res)
    }
  })
}
