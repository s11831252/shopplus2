<template>
  <div class="page">
    <div class="head">
      <div class="count">
        <div class="num">
          0
          <br>
          <div class="tip">小伙伴总人数</div>
        </div>
      </div>
    </div>
    <ul class="list">
      <li class="list_item">
        <div class="list-item-info">
          <span class="icon_span goodfriend_icon" >
            <i class="icon">&#xe640;</i>
          </span>
          <span class="left_info">
            <div class="friend_count">亲密小伙伴&nbsp;&nbsp;(0)</div>
            <div class="income">历史总收益：￥0</div>
          </span>
          <span class="right_info" @click="showgoodfriend" >
            <div class="icon" :class="{show:isshow}">&#xe610;</div>
            <div class="month_income">本月预估收益&nbsp;&nbsp;￥0</div>
          </span>
        </div>
        <ul class="income-detail" :class="{show:isshow}">
            <li>
                <span>李xxx</span>
                <span>产生收益￥3.00</span>
                <span>2019-10-01</span>
            </li>
            <li>
                <span>李xxx</span>
                <span>产生收益￥5.00</span>
                <span>2019-10-02</span>
            </li>
        </ul>
      </li>
      <li class="list_item">
        <div class="list-item-info">
          <span class="icon_span friend_icon">
            <i class="icon">&#xe640;</i>
          </span>
          <span class="left_info">
            <div class="friend_count">小伙伴&nbsp;&nbsp;(0)</div>
            <div class="income">历史总收益：￥0</div>
          </span>
          <span class="right_info" @click="showfriend">
            <div class="icon" :class="{show:isshow2}">&#xe610;</div>
            <div class="month_income">本月预估收益&nbsp;&nbsp;￥0</div>
          </span>
        </div>
        <ul class="income-detail" :class="{show:isshow2}">
        </ul>
      </li>
    </ul>
    <div class="bottom">邀请好友加入</div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            isshow:false,
            isshow2:false
        }
    },
    methods:{
        showgoodfriend(){
            this.isshow = !this.isshow;
        },
        showfriend(){
            this.isshow2 = !this.isshow2;
        }
    }
};
</script>
<style>
page {
  background-color: #f7f7f7;
}
</style>
<style lang="less" scoped>
.page {
  height: 100%;
  .head {
    width: 100%;
    height: 5.73rem;
    background-color: #ea532a;
    display: flex;
    align-items: center; /*定义子元素垂直居中*/
    justify-content: center; /*定义子元素水平居中*/
    .count {
      height: 4.47rem;
      width: 4.47rem;
      border: 0.12rem solid #ffeef6;
      color: #ffeef6;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
      align-items: center; /*定义子元素垂直居中*/
      justify-content: center; /*定义子元素水平居中*/
      .num {
        font-size: 1.02rem;
        text-align: center;
        .tip {
          font-size: 0.3rem;
        }
      }
    }
  }
  .list {
    .list_item {
      margin-bottom: 0.31rem;
      background-color: #fff;
      .list-item-info {
        height: 2.01rem;
        display: flex;
        align-items: center; /*定义子元素垂直居中*/
        .icon_span {
          height: 1.24rem;
          width: 1.24rem;
          border-radius: 50%;
          margin: 0 0.34rem;
          display: flex;
          align-items: center; /*定义子元素垂直居中*/
          justify-content: center; /*定义子元素水平居中*/
          .icon {
            font-size: 0.58rem;
            color: #fff6ff;
          }
        }
        .goodfriend_icon {
          background-color: #e93631;
        }
        .friend_icon {
          background-color: #f09535;
        }
        .left_info {
          width: 4.33rem;
          font-size: 0.35rem;
          div {
            display: block;
            padding: 0.12rem 0;
          }
          div.friend_count {
            color: #e93631;
            border-bottom: 0.02rem solid #ededed;
          }
          div.income {
            color: #989898;
          }
        }
        .right_info {
          font-size: 0.35rem;
          color: #989898;

          .icon {
            font-size: 0.17rem;
            text-align: right;
            font-weight: bold;
            margin-bottom: 0.53rem;
          }
          .icon.show{
              text-align: left;
              transform:rotate(-180deg);
          }
          .month_income {
            margin-left: 1.47rem;
          }
        }
      }

      .income-detail{
          display: none;
          overflow: hidden;
          height: 0px;
          li{
            display: flex;
            align-items: center; /*定义子元素垂直居中*/
            justify-content: center; /*定义子元素水平居中*/
            color: #989898;
            padding: 0.15rem 0;
            span{
                flex:1 1 auto;
                font-size: 0.3rem;
                text-align: center;
            }
            
          }
          li:nth-child(odd){
                background-color: #f7f7f7;
                color: #989898;
            }
      }
    }
    .income-detail.show{
        display: block;
        height: auto;
    }
    //固定高度后可以使用
    @keyframes myfirst
    {
        from {height:0;}
        to {height: auto;}
    }
  }
  .bottom{
    position: fixed;
    bottom: 0;
    text-align: center;
    font-size: 0.42rem;
    background: #e93631;
    color: #ededed;
    width: 100%;
    padding: 0.2rem;
  }
}
</style>
