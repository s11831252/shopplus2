<template>
    <nav>
        <router-link to="/pages/home/index">主页</router-link>
        <router-link to="/pages/shop/index">商品分类</router-link>
        <router-link to="/pages/order/index">订单</router-link>
        <router-link to="/pages/my/index">我的</router-link>
    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>

    nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        margin: auto 0;
        text-align: center;
        background-color: #ffffff;
        border-top: 1px solid #ecf0f1;
        padding-top: 10px;
    }
    nav a{
        line-height: 2rem;
        width: 22%;
        text-decoration:none;
        display: inline-block;
        font-size: 0.4rem;
    }
</style>


