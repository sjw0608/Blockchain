<template>
  <div class="blcok_header">
    <nav class="navbar navbar-inverse navbar-no-bg" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<div class="logo">
            <img src="./MisToken.jpg" alt="">
          </div>
				</div>
				<div class="collapse navbar-collapse" id="top-navbar-1">
					<ul class="nav navbar-nav navbar-right">
            <li><a href="javascript:;">{{$t('header.home')}}</a></li>
            <li><a href="javascript:;">{{$t('header.transaction')}}</a></li>
            <li v-if="name !=='Index' ">
              <div class="search-wraper" role="search">
                <div class="form-group">
                  <input @change="eventChanged" v-model="search" class="form-control search clearable"
                     :placeholder="$t('header.search')" autocomplete="off" autofocus=""
                     tabindex="0" autocorrect="off" autocapitalize="off" spellcheck="false">
                </div>
              </div>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                 <img class="flagimg" :src="flagImg[$t('header.flag')]">
                 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                  <li @click="switchLanguage('zh')"><a href="javascript:;">
                      <img class="flagimg"
                           :src="flagImg['zh']">中文</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li @click="switchLanguage('en')"><a href="javascript:;">
                      <img class="flagimg"
                           :src="flagImg['en']">English</a>
                  </li>
              </ul>
            </li>
					</ul>
				</div>
			</div>
		</nav>
  </div>
</template>

<script>
import { set_item } from '@/utils/localStorage'
export default {
  data() {
    return {
      name: '',
      search: '',
      flagImg: {
        zh: require('../../../static/language-dropdown/img/CN.png'),
        en: require('../../../static/language-dropdown/img/US.png')
      }
    }
  },
  created() {
    this.name = this.$route.name
  },
  methods: {
    eventChanged() {
      this.search = this.search.replace(/(^\s*)|(\s*$)/g, '')
    },
    switchLanguage(locale) {
      this._i18n.locale = locale
      set_item('locale', locale)
    }
  }
}
</script>

<style scoped>
.blcok_header {
  background-color: #fff;
}
.navbar-inverse {
  background-color: #fff;
  border: none;
}
.navbar {
  border-radius: 0;
  margin-bottom: 0;
}
.logo {
  padding: 10px 0;
}
.logo img {
  width: 100%;
  vertical-align: middle;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #fff;
}
.navbar-inverse .navbar-nav > li > a {
  font-size: 16px;
  line-height: 60px;
  color: #000;
}
.navbar-inverse .navbar-nav > li > a:hover {
  color: #000;
}
.nav > li > a > img {
  width: 40px;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #fff;
}
.flagimg {
  width: 20px;
  margin-right: 10px;
}
.dropdown-menu > li > a {
  padding: 0 20px;
}
.nav > li .form-group {
  margin-bottom: 0;
}
.nav > li .form-group .form-control {
  margin-top: 20px;
  height: 35px;
}
.dropdown-menu {
  top: 80%;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
  }
}
</style>
