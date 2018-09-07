<template>
  <div class="container">
    <h4 class="page-header">{{$t('index.latest_status')}}:
      <small>{{$t('index.last_updated_at', {seconds: delta})}}</small>
    </h4>
    <div class="row">
      <div class="col-md-12 no-padding">
        <!-- <div class="col-md-5">
          <div class="section-summary">
            <div class="row">
              <div class="col-md-12">
                <div class="title">{{$t('index.overview.transactions')}}</div>
                <digital-roll :number="transaction_num"
                    :font-size="digital_roll_font_size"></digital-roll>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="title">{{$t('index.overview.accounts')}}</p>
                <div class="font-bebas">{{account_number|number(0)}}</div>
              </div>
              <div class="col-sm-6">
                <p class="title">{{$t('index.overview.duration')}}</p>
                <div class="font-bebas">{{blockchain_run_duration}}</div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="col-md-7">
          <Chart ref="sta"
            style="width:100%;height:250px;"
            :options="statistics"
            theme="light"
            auto-resize>
          </Chart>
        </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/title'
import 'echarts/lib/component/axis'
export default {
  data() {
    return {
      timer: 0,
      last_updated_at: 0,
      statistics: {
        title: {
          text: this.$t('index.statistics.title'),
          left: 'left',
          textStyle: {
            color: '#9d9faf'
          }
        },
        grid: {
          bottom: 20,
          left: 10,
          right: 20,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLine: {
            lineStyle: {
              color: '#919191'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#b9bac5'
            }
          }
        },
        series: [
          {
            data: [],
            type: 'line',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#6699ff'
                  },
                  {
                    offset: 1,
                    color: '#e5eaff'
                  }
                ])
              }
            }
          }
        ]
      }
    }
  },
  computed: {
    delta() {
      return parseInt((this.timer - this.last_updated_at) / 1000)
    }
  }
}
</script>

<style>
</style>
