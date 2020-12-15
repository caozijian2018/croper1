<!--
 * @Author: Rain
 * @Date: 2020-12-15 11:26:57
 * @LastEditTime: 2020-12-15 13:48:42
 * @Description: Do Something
-->
<template>
    <div class="container">
        <nuxt />
    </div>
</template>

<script>
import Vue from "vue";
import allRequest from "../util/glo_request";
Vue.prototype.$http = allRequest;
import "../util/filter";
import "../util/msg";
import "../util/es62es5";
import jquery from "jquery";
Vue.prototype.$jquery = jquery;
if(process.browser) {
  var vueCropper = require('vue-cropper')
  Vue.use(vueCropper.default)
}
import init_token from "../util/init_token";
init_token();
export default {
    mounted() {
    },
    methods: {
    },
};
</script>

<style lang="less">
// @import "http://static.game-park.net/global_css.css";
// @import "http://at.alicdn.com/t/font_1577414_40qjo3s2wj7.css";
@import "../assets/font/fzlt.css";

.container {
    height: 100vh;
    width: 100vw;
}
</style>
