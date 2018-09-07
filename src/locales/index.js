import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { get_item, set_item } from '../utils/localStorage'

import en from './en'
import zh from './zh'

Vue.use(VueI18n)

const messages = {
  en: en,
  zh: zh
}

let locale = get_item('locale') || navigator.language.split('-')[0]
set_item('locale', locale)

export default new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages
})
