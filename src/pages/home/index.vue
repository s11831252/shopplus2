<template>
  <div class="root">
    <div class="banner">
      <img src="/static/img/2@3x.png">
    </div>
    <div class="classify">
      <ul>
        <li>
          <img src="/static/img/t1@3x.png">
          <p>空调</p>
        </li>
        <li>
          <img src="/static/img/t1拷贝@3x.png">
          <p>空调</p>
        </li>
        <li>
          <img src="/static/img/t1拷贝2@3x.png">
          <p>空调</p>
        </li>
        <li>
          <img src="/static/img/t1拷贝3@3x.png">
          <p>空调</p>
        </li>
        <li>
          <img src="/static/img/youyanji.png">
          <p>空调</p>
        </li>
        <li>
          <img src="/static/img/fengshan.png">
          <p>空调</p>
        </li>
        <li>
          <img src="/static/img/kongt.png">
          <p>空调</p>
        </li>
        <li>
          <img src="/static/img/yi3x.png">
          <p>空调</p>
        </li>
      </ul>
    </div>
    <div class="hotproducts">
      <ul>
        <li v-for="(item,index) in hotGoods" :key="index" @click="go({path:'/pages/shop/good-detail',query:{sId:item.sId,gId:item.gId}})">
          <img :src="item.Images[0].Image_url" >
          <p class="name">{{item.gName}}</p>
          <div class="price">
            <p>￥{{item.Price}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="topProducts">
      <p class="title">
        精选单品
        <i class="icon">&#xe68b;</i>
      </p>
      <ul class="products_list">
        <li>
          <img src="/static/img/goods.png">
          <p class="name">这是商品名称</p>
          <p class="brief">节能静音BD/BC-203KM</p>
          <div class="price">
            <p>
              ￥{{6999.00}}
              <i class="icon">&#xe691;</i>
            </p>
          </div>
        </li>
        <li>
          <img src="/static/img/goods.png">
          <p class="name">浴霸 灯暖换气照明三合一</p>
          <p class="brief">灯暖、换气、照明三合一</p>
          <div class="price">
            <p>
              ￥6999.00
              <i class="icon">&#xe691;</i>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      hotGoods:[]
    };
  },
  async mounted()
  {
    var result = await this.$ShoppingAPI.Goods_Search({bId:this.extConfig.bId});
    this.hotGoods=result.data[0].Goods_list;
    console.log(this.hotGoods)

  }
};
</script>
<style lang="less" scoped>
page {
}
.root {
  background-color: #f2f3f5;
}
.banner {
  background-color: #fff;
  img {
    width: 10.8rem;
    height: 4.68rem;
  }
}
.classify {
  background-color: #fff;
  li {
    display: inline-block;
    margin: 0.46rem 0.6rem;
    img {
      width: 1.4rem;
      height: 1.56rem;
      margin: 0 0 0.09rem 0;
    }
    p {
      text-align: center;
      font-size: 0.35rem;
      color: #3f3f3f;
      vertical-align: middle;
    }
  }
}
.hotproducts {
  margin-top: 0.4rem;
  li {
    background-color: #fff;

    margin-bottom: 0.43rem;
    img {
      width: 100%;
      height: 4.64rem;
      margin-bottom: 0.4rem;
    }
    p.name {
      color: #3f3f3f;
      font-size: 0.39rem;
      margin-bottom: 0.4rem;
      margin-left: 0.42rem;
    }
    .price {
      font-size: 0.45rem;
      color: #ff4c4c;
      margin-bottom: 0.33rem;
      margin-left: 0.53rem;
    }
  }
}
.topProducts {
  margin-top: 0.43rem;
  background-color: #fff;
  .title {
    text-align: center;
    font-size: 0.56rem;
    color: #1bb6f0;
    padding-top: 0.52rem;
    padding-bottom: 0.46rem;
    display: block;
    line-height: 0.56rem;
    border-bottom: solid 0.01rem #d6d7dc;
    i {
      font-size: 0.56rem;
      display: inline;
      line-height: 0.56rem;
    }
  }
  ul.products_list {
    padding-left:  0.36rem;
    li {
      display: inline-block;
      border: solid 0.01rem #d6d7dc;
      border-radius: 0.06rem;
      padding-bottom: 0.45rem;
      margin: 0.43rem  0.43rem  0.43rem 0;
      img {
        width: 4.73rem;
        height: 4.73rem;
        padding: 0.05rem;
        border-bottom: solid 0.01rem #d6d7dc;
      }
      p.name {
        margin-top: 0.22rem;
        font-family: MicrosoftYaHei;
        font-size: 0.39rem;
        color: #3f3f3f;
        padding-left: 0.16rem;
      }
      p.brief {
        margin-top: 0.29rem;
        font-family: MicrosoftYaHei;
        font-size: 0.34rem;
        color: #7f8699;
        padding-left: 0.16rem;

      }
      .price{
        margin-top: 0.53rem;
        font-family: MicrosoftYaHei;
        font-size: 0.45rem;
        color: #3f3f3f;
        padding-left: 0.14rem;
        vertical-align: middle;
        line-height: 0.45rem;
        i{
          display: inline;
          float: right;
          font-size: 0.45rem;
          line-height: 0.45rem;
          color: #00a0e9;
          margin-right: 0.24rem;
        }
      }
    }
  }
}
</style>

