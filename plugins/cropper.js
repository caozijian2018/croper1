import Vue from 'vue';
if(process.browser) {
    vueCropper = require('vue-cropper')
    Vue.use(vueCropper.default)
  }