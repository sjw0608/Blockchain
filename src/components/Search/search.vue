<template>
  <div>
    <div class="block-search">
      <div class="container jumbotron">
        <div class="row">
          <div class="col-xs-1"></div>
          <div class="col-xs-10">
            <p class="text-center">
                MisToken
            </p>
            <div class="search-wraper" role="search">
              <div class="form-group">
                <input @change="eventChanged" v-model="search" class="form-control search clearable"
                       :placeholder="$t('header.search')" autocomplete="off" autofocus=""
                       tabindex="0" autocorrect="off" autocapitalize="off" spellcheck="false">
              </div>
            </div>
          </div>
          <div class="col-xs-1"></div>
        </div>
      </div>
    </div>
    <div class="container block_pandect">
      <div class="row">
        <div class="col-md-2 col-xs-6">
          <p class="index-bar-num">15,823,860</p>
          <p class="index-bar-description">{{$t('search.height')}}</p>
        </div>
         <div class="col-md-2 col-xs-6">
          <p class="index-bar-num">15,823,534</p>
          <p class="index-bar-description">{{$t('search.reversible')}}</p>
        </div>
         <div class="col-md-2 col-xs-6">
          <p class="index-bar-num">3</p>
          <p class="index-bar-description">{{$t('search.time')}}</p>
        </div>
         <div class="col-md-2 col-xs-6">
          <p class="index-bar-num">1.25.254</p>
          <p class="index-bar-description">{{$t('search.node')}}</p>
        </div>
         <div class="col-md-2 col-xs-6">
          <p class="index-bar-num">978206</p>
          <p class="index-bar-description">{{$t('search.newBlock')}}</p>
        </div>
         <div class="col-md-2 col-xs-6">
          <p class="index-bar-num">310,632</p>
          <p class="index-bar-description">{{$t('search.transaction')}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      keywords: 'keywords'
    })
  },
  watch: {
    keywords() {
      if (this.keywords != this.search) {
        this.search = this.keywords
      }
    }
  },
  methods: {
    ...mapActions({
      setKeywords: 'setKeywords'
    }),
    eventChanged() {
      this.search = this.search.replace(/(^\s*)|(\s*$)/g, '')
      this.setKeywords({ keywords: this.search })
    }
  }
}
</script>

<style scoped>
.block-search {
  background-color: #4090f7;
  height: 280px;
}
.jumbotron {
  background-color: #4090f7;
}
.form-control {
  height: 60px;
  text-align: center;
}
.block_pandect {
  margin-top: -65px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 5px 2px #efefef;
}
.block_pandect p {
  text-align: center;
}
.block_pandect .index-bar-num {
  padding-top: 10px;
  font-size: 24px;
  margin: 0 0 15px;
  color: #000;
}
.block_pandect .index-bar-description {
  font-size: 16px;
  color: #666;
}
</style>
