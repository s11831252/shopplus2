<template>
  <div>
    <ul class="navbar">
        <li v-for="(item,index) in Tabs" :key="index" :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick(item,$event)">
          <div class="navbar_title">{{item.name}}</div>
        </li>
      </ul>
    <div class="navbar_slider" :class="navbarSliderClass"></div>
    <ul class="orderlist">
      <li v-for="(order,i) in OrderList" :key="i">
        <orderItemView :order="order"></orderItemView>
      </li>
    </ul>
  </div>
</template>
<script>
import orderItemView from '@/pages/order/index-orderItem'
export default {
  components: {
    orderItemView
  },
  data() {
    return {
      OrderList: null,
      activeIndex: 0,
      Tabs:[]
    };
  },
  computed:{
   navbarSliderClass() {
      return "navbar_slider_" + this.activeIndex;
    },
  },
  methods: {
   async init(){
      var rep = await this.$ShoppingAPI.Order_Get({ PageIndex: 1, PageSize: 10 });
      if (rep.ret == 0) {
        this.OrderList = rep.data;
      }
    },
    async tabClick(tab, e) {
      if (e) this.activeIndex = e.currentTarget.id;
    },
  },
   mounted() {
    this.activeIndex = 0;
    this.Tabs = [
      { name: "全部", type: "1", checked: true },
       { name: "待支付", type: "2", checked: true },
       { name: "待评价", type: "3", checked: true },
    ];
    this.init();
  },
  onPullDownRefresh(){
    this.init();
    wx.stopPullDownRefresh()
  },
};
</script>
<style lang="less" scoped>
ul.orderlist{
  background-color:#ecf0f1;
  li{
    background: #fff;
    margin-top: 10px;
  }
}

.navbar {
  height: 40px;
  line-height: 40px;
  width: 100%;
  border-bottom: 1rpx solid #ccc;
  position: relative;
  font-size: 0.41rem;
  background-color: #fff;
}

.navbar_item {
  text-align: center;
  display: inline-block;
  width: 33%;
}

.navbar_item_on {
  color: #12b7f5 ;
}

.navbar_title {
  font-weight: 500;
  display: inline-block;
}
.navbar-body {
  // margin-top: 10px;
}
.navbar_slider {
  position: absolute;
  content: " ";
  left: 0;
  width: 33%;
  height: 2px;
  background-color: #12b7f5;
  -webkit-transition: -webkit-transform 0.1s;
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.navbar_slider_0 {
  transform: translateX(0);
}

.navbar_slider_1 {
  transform: translateX(100%);
}
.navbar_slider_2 {
  transform: translateX(200%);
}
.navbar_slider_3 {
  transform: translateX(300%);
}
</style>
