import http_axios from '../utils/http/axios'
import http_wx from '../utils/http/wxhttp'
const http = mpvue_Mode === 'WX' ? http_wx : http_axios;

let BaseHost = process.env.NODE_ENV == 'production'?"https://live.ujianchina.net/":"http://192.168.0.119:810/"

export default {
    Account_wxLogin: (code,extAppid) => {
        return http.post(BaseHost + `api/WXMP/wxLogin?code=${code}&extAppid=${extAppid}`)
    },
    Account_SimpleLogin: param => {
        return http.post(BaseHost + "api/WXMP/SimpleLogin", param)
    },
    Account_ValidationCode: (param) => {
        return http.get(BaseHost + "api/WXMP/ValidationCode", param)
    },
    BusinesScircle_GetBS_Shopping: (param) => {
        return http.get(BaseHost + "api/BusinesScircle/GetBS_Shopping", param)
    },
    BusinesScircle_GetBS_ShoppingGoods: (param) => {
        return http.get(BaseHost + "api/BusinesScircle/GetBS_ShoppingGoods", param)
    },
    BusinesScircle_GetBS_Shop_CustomGoodsType: (param) => {
        return http.get(BaseHost + "api/BusinesScircle/GetBS_Shop_CustomGoodsType", param)
    },
    
}