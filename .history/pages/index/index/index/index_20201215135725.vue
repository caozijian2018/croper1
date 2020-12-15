<!--
 * @Author: Rain
 * @Date: 2020-12-15 11:28:30
 * @LastEditTime: 2020-12-15 13:57:25
 * @Description: Do Something
-->
<template>
  <div class='page'>
    <div class="width_90 margin_auto margin_top_20">
      <div v-if="this_step == 'select_template'">
        <div class="text_center head width_80 margin_auto">
          <img
            alt
            class="width_40"
            src="../../../../static/img/logo2.png"
          />
          <div class="head_tet">欢迎使用Bof博峰</div>
          <div class="aa">微信9宫格图片自主生成系统</div>
        </div>
        <div class="display_flex flex_jusify_space wrop">
          <div
            :key="item.img"
            @click="selectTemplate(index)"
            class="width_49"
            v-for="(item, index) in template_img_list"
          >
            <div
              :class="{ selected: index == selected_index }"
              class="tempalte_img width_100 box_szing"
            >
              <img
                :src="item.img_cp"
                alt
                class="width_100"
              />
            </div>
            <div class="button_desc">{{ item.name }}</div>
          </div>
          <div class="width_49">
            <div class="tempalte_img width_100 box_szing">
              <img
                alt
                class="width_100"
                src="../../../../static/img/com.png"
              />
            </div>
            <div class="button_desc">模板定制</div>
          </div>
        </div>
        <div class="red text_center">更多模板持续更新中</div>
        <!-- <div class="margin_top_20 width_100">
                    <el-button
                        class="width_100"
                        @click="UploadImgAndSetTitle()"
                        type="primary"
                        >确认模板</el-button
                    >
        </div>-->
      </div>
      <!-- 上传图片和title -->
      <div v-else-if="this_step == 'upload_img_and_title'">
        <div class="font_size_20 font_weight_600 text_center">
          正在生成
          <span class="template_name">
            {{
            template_name
            }}
          </span>
        </div>
        <div
          class="position_relative overflow_hidden overbox margin_bottom_20"
          style
        >
          <div
            :class="getThisName"
            @mousemove.prevent
            class="img_b_box overflow_hidden"
            style="overflow: hidden"
          >
            <span
              :style="{
                                left: template_img_list[selected_index].left,
                                top: template_img_list[selected_index].top,
                            }"
              class="space_name"
            >{{ title }}</span>
            <span
              :style="{
                                left: template_img_list[selected_index].left,
                                top: template_img_list[selected_index].top,
                            }"
            >{{ title2 }}</span>
            <span
              :style="{
                                left:
                                    template_img_list[selected_index].time_left,
                                top: template_img_list[selected_index].time_top,
                            }"
              class="time_desc"
            >{{ time_desc }}</span>
            <span
              :style="{
                                left:
                                    template_img_list[selected_index]
                                        .ms_time_left,
                                top:
                                    template_img_list[selected_index]
                                        .ms_time_top,
                            }"
              class="time_desc"
              v-if="selected_index == 2"
            >{{ ms_time }}</span>
            <span
              :class="{ notransform: selected_index == '2' }"
              :style="{
                                left:
                                    template_img_list[selected_index]
                                        .price_left,
                                top:
                                    template_img_list[selected_index].price_top,
                            }"
              class="price_desc"
            >
              {{
              selected_index == "2"
              ? "商品名称:" + price
              : price
              }}
            </span>
            <span
              :class="{ notransform: selected_index == '2' }"
              :style="{
                                left:
                                    template_img_list[selected_index]
                                        .price_td_left,
                                top:
                                    template_img_list[selected_index]
                                        .price_td_top,
                            }"
              class="price_desc"
              v-if="selected_index == '2'"
            >
              {{
              selected_index == "2"
              ? "商品特点:" + price_td
              : price_td
              }}
            </span>
            <span
              :class="{ notransform: selected_index == '2' }"
              :style="{
                                left:
                                    template_img_list[selected_index]
                                        .price_tj_left,
                                top:
                                    template_img_list[selected_index]
                                        .price_tj_top,
                            }"
              class="price_desc"
              v-if="selected_index == '2'"
            >
              {{
              selected_index == "2"
              ? "商品推荐:" + price_tj
              : price_tj
              }}
            </span>
            <span
              :style="{
                                left:
                                    template_img_list[selected_index]
                                        .price_old_left,
                                top:
                                    template_img_list[selected_index]
                                        .price_old_top,
                            }"
              class="price_desc"
            >{{ price_old }}</span>
            <span
              :class="
                                real_price.length > 4
                                    ? 'text4priec'
                                    : 'text3price'
                            "
              :style="{
                                left:
                                    template_img_list[selected_index]
                                        .real_price_left,
                                top:
                                    template_img_list[selected_index]
                                        .real_price_top,
                            }"
              class="real_price_desc"
            >{{ real_price }}</span>
            <span
              :style="{
                                left:
                                    template_img_list[selected_index]
                                        .ms_jia_left,
                                top:
                                    template_img_list[selected_index]
                                        .ms_jia_top,
                            }"
              class="ms_jia"
              v-if="selected_index == 2"
            >{{ ms_jia }}</span>

            <span
              :style="{
                                left:
                                    template_img_list[selected_index]
                                        .price_type_left,
                                top:
                                    template_img_list[selected_index]
                                        .price_type_top,
                            }"
              class="price_type_desc"
            >{{ price_type }}</span>

            <img
              :src="image_logo_Url"
              :style="{
                                left:
                                    template_img_list[selected_index].logo_left,
                                top: template_img_list[selected_index].logo_top,
                            }"
              class="logo_img"
              v-if="image_logo_Url"
            />
            <img
              :src="template_img_list[selected_index].img"
              class="width_100 position_relative"
              style="z-index: 2"
            />
            <img
              :src="imageUrl"
              :style="{
                                left:
                                    template_img_list[selected_index].img_left,
                                top: template_img_list[selected_index].img_top,
                            }"
              class="main_img_pc position_absolute"
              v-if="imageUrl"
            />
            <!-- <div
              :class="{ z_index_2: !show_drag }"
              @mousemove.stop
              id="box"
              v-show="imageUrl"
            >
              <img
                :src="imageUrl"
                :style="{
                                    left:
                                        template_img_list[selected_index]
                                            .img_left,
                                    top:
                                        template_img_list[selected_index]
                                            .img_top,
                                }"
                class="main_img"
                v-if="imageUrl"
              />

              <div
                @mousemove.stop
                id="scale"
                v-show="show_drag"
              >
                <img
                  alt
                  class="width_100"
                  src="../../../../static/img/tz.png"
                />
              </div>
            </div>-->

            <!-- <i v-else class="add_text" @click="fileClick()">+</i> -->
          </div>
        </div>
        <input
          @change="UpImg($event)"
          accept="image/*"
          id="file_ipt"
          mutiple="mutiple"
          type="file"
          v-show="false"
        />
        <el-button
          @click="uplogo"
          class="width_100 margin_bottom_10"
          style="margin-left: 0; margin-bottom: 10px"
          type="primary"
          v-if="selected_index == '0'"
        >店名LOGO上传</el-button>
        <el-button
          @click="fileClick"
          class="width_100 margin_bottom_10"
          style="margin-left: 0; margin-bottom: 10px"
          type="primary"
        >商品拍照或上传</el-button>
        <input
          @change="UpImg($event, 'logo')"
          accept="image/*"
          id="logo_file_ipt"
          mutiple="mutiple"
          placeholder="logo"
          type="file"
          v-show="false"
          value="Logo"
        />
        <!-- <el-input type="file"  @change="UpImg($event, 'logo')" class="margin_bottom_10"></el-input> -->
        <div class="bbbx">
          <div class>
            <span>店名:</span>
            <el-input
              class="margin_bottom_10"
              label="店名"
              placeholder="店名"
              v-model="title"
            ></el-input>
          </div>
          <div>
            <span>活动时间:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="活动时间"
              v-model="time_desc"
            ></el-input>
          </div>
          <div v-if="selected_index == 2">
            <span>时间描述:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="时间描述"
              v-model="ms_time"
            ></el-input>
          </div>
          <div>
            <span>商品名:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="商品名"
              v-model="price"
            ></el-input>
          </div>
          <div v-if="selected_index == 2">
            <span>商品特点:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="商品特点"
              v-model="price_td"
            ></el-input>
          </div>
          <div v-if="selected_index == 2">
            <span>商品推荐:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="商品推荐"
              v-model="price_tj"
            ></el-input>
          </div>
          <div v-if="selected_index == 2">
            <span>秒杀描述:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="秒杀描述"
              v-model="ms_jia"
            ></el-input>
          </div>

          <div>
            <span>原价:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="原价"
              v-model="price_old"
            ></el-input>
          </div>
          <div>
            <span>促销价:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="促销价"
              v-model="real_price"
            ></el-input>
          </div>
          <div>
            <span>促销价单位:</span>
            <el-input
              class="margin_bottom_10"
              placeholder="促销价单位"
              v-model="price_type"
            ></el-input>
          </div>
        </div>
        <div class="margin_top_10">
          <el-button
            @click="init()"
            class="width_100"
            type="primary"
          >确认模板</el-button>
        </div>
      </div>
      <div v-else-if="this_step == 'tocanvas'">
        <!-- <div class="canvas_box"></div> -->
        <div class="text_center">
          <img
            alt
            class="width_70"
            id="img"
            src
          />
        </div>
      </div>
      <el-button
        @click="beforeStep()"
        class="width_100 margin_top_10"
        type="primary"
        v-if="this_step != 'select_template'"
      >返回选择模板</el-button>
    </div>
    <div class="cropper"></div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  layout: 'us',

  data() {
    return {
      show_drag: true,
      transform_left: 0,
      image_logo_Url: '',
      title: '',
      price_td: '',
      price_tj: '',
      ms_time: '',
      title2: '',
      time_desc: '',
      ms_jia: '',
      price: '',
      price_old: '',
      real_price: '',
      price_type: '元',
      imageUrl: '',
      this_step: 'select_template',
      price_type_desc: '',
      selected_index: 0,
      template_img_list: [
        {
          img: require('../../../../static/img/1.png'),
          img_cp: require('../../../../static/img/1cp.png'),
          left: '106px',
          name: '模板A',
          top: '40px',
          logo_left: '409px',
          logo_top: '16px',
          img_top: '50%',
          img_left: '50%',
          time_left: '39px',
          time_top: '412px',
          price_left: '11px',
          price_top: '449px',
          price_old_left: '11px',
          price_old_top: '469px',
          real_price_left: '347px',
          real_price_top: '422px',
          price_type_left: '450px',
          price_type_top: '433px'
        },
        {
          name: '模板B',
          img: require('../../../../static/img/2.png'),
          img_cp: require('../../../../static/img/2cp.png'),
          left: '414px',
          top: '44px',
          logo_left: '409px',
          logo_top: '16px',
          img_top: '50%',
          img_left: '50%',
          time_left: '357px',
          time_top: '82px',
          price_left: '362px',
          price_top: '212px',
          price_old_left: '364px',
          price_old_top: '274px',
          real_price_left: '415px',
          real_price_top: '411px',
          price_type_left: '409px',
          price_type_top: '440px'
        },
        {
          name: '模板C',
          img: require('../../../../static/img/3.png'),
          img_cp: require('../../../../static/img/3cp.png'),
          left: '50%',
          top: '30px',
          logo_left: '409px',
          logo_top: '16px',
          img_top: '50%',
          img_left: '50%',
          time_left: '366px',
          time_top: '478px',
          price_left: '292px',
          price_top: '335px',
          price_old_left: '134px',
          price_old_top: '251px',
          price_td_left: '292px',
          price_td_top: '361px',
          price_tj_left: '292px',
          price_tj_top: '387px',
          ms_time_left: '366px',
          ms_time_top: '449px',
          ms_jia_left: '137px',
          ms_jia_top: '293px',

          real_price_left: '137px',
          real_price_top: '389px',
          price_type_left: '137px',
          price_type_top: '477px'
        }
      ],
      showWin:false
    }
  },
  computed: {
    getThisName() {
      return this.selected_index == 0 ? 'template_1' : this.selected_index == 1 ? 'template_2' : 'template_3'
    },
    template_name() {
      return this.selected_index == 0 ? '模板A' : this.selected_index == 1 ? '模板B' : '模板C'
    }
  },
  mounted() {
    // this.drag();
    setTimeout(() => {
      // this.init();
    }, 1000)
  },
  methods: {
    clearData() {
      this.transform_left = 0
      this.image_logo_Url = ''
      this.title = ''
      this.title2 = ''
      this.time_desc = ''
      this.price = ''
      this.price_old = ''
      this.real_price = ''
      this.imageUrl = ''
      this.price_type_desc = ''
    },
    beforeStep() {
      if (this.this_step == 'upload_img_and_title') {
        this.this_step = 'select_template'
      } else if (this.this_step == 'tocanvas') {
        this.this_step = 'upload_img_and_title'
        this.show_drag = true
        this.$nextTick(() => {
          this.drag()
        })
      }
    },
    blurAddr() {
      this.transform_left = parseInt(getComputedStyle(document.querySelector('.space_name')).width) / 2
    },
    back() {
      this.$jquery('canvas').remove()
      this.this_step = 'upload_img_and_title'
      this.$nextTick(() => {
        this.drag()
      })
      this.show_drag = true
    },
    uplogo() {
      logo_file_ipt.click()
    },
    fileClick() {
      file_ipt.click()
    },
    UpImg(event, is_logo) {
      console.log(event.target.files)
      var fileList = event.target.files
      if (
        fileList[0].name.indexOf('png') == -1 &&
        fileList[0].name.indexOf('jpeg') == -1 &&
        fileList[0].name.indexOf('jpg') == -1
      ) {
        alert('请选择png 或者 jpg结尾的')
        return
      }
      var fileArry = []
      var list = []
      let fileUrl = URL.createObjectURL(fileList[0]) // 获取文件url
      if (is_logo) {
        this.image_logo_Url = fileUrl //
      } else {
        this.imageUrl = fileUrl //
        this.showWin = true
      }
      
      // let fileList=$(".photoFile").get(0).files[0] // 获取input file 文件信息
      // let fileUrl = URL.createObjectURL(fileList);  // 获取文件url
      // this.fileArry.push(fileList)
      console.log(fileArry)
      console.log(list)

      // this.list.push({msrc:fileUrl,src:fileUrl})
      event.target.value = '' // 解决不能选同一个文件
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      alert(this.imageUrl)
      console.log(this.imageUrl)
    },
    selectTemplate(index) {
      this.selected_index = index
      this.UploadImgAndSetTitle()
    },
    init() {
      this.show_drag = false
      this.$nextTick(() => {
        var that = this
        html2canvas(document.querySelector('.img_b_box'), {
          allowTaint: true,
          useCORS: true
        }).then(canvas => {
          that.this_step = 'tocanvas'
          that.$nextTick(() => {
            // document.querySelector(".canvas_box").appendChild(canvas);
            var srccc = canvas.toDataURL('image/png')
            that.$jquery('#img').attr('src', srccc)
          })
        })
      })
    },
    UploadImgAndSetTitle() {
      this.this_step = 'upload_img_and_title'
      this.clearData()
      this.show_drag = true

      this.$nextTick(() => {
        this.drag()
      })
    },
    drag() {
      return;
      var box = document.getElementById('box')
      var fa = document.querySelector('.img_b_box')
      var scale = document.getElementById('scale')
      // 图片移动效果
      box.onmousedown = function(ev) {
        var oEvent = ev
        // 浏览器有一些图片的默认事件,这里要阻止
        oEvent.preventDefault()
        var disX = oEvent.clientX - box.offsetLeft
        var disY = oEvent.clientY - box.offsetTop
        fa.onmousemove = function(ev) {
          oEvent = ev
          oEvent.preventDefault()
          var x = oEvent.clientX - disX
          var y = oEvent.clientY - disY

          // 图形移动的边界判断
          x = x <= 0 ? 0 : x
          x = x >= fa.offsetWidth - box.offsetWidth ? fa.offsetWidth - box.offsetWidth : x
          y = y <= 0 ? 0 : y
          y = y >= fa.offsetHeight - box.offsetHeight ? fa.offsetHeight - box.offsetHeight : y
          box.style.left = x + 'px'
          box.style.top = y + 'px'
        }
        // 图形移出父盒子取消移动事件,防止移动过快触发鼠标移出事件,导致鼠标弹起事件失效
        fa.onmouseleave = function() {
          fa.onmousemove = null
          fa.onmouseup = null
        }
        // 鼠标弹起后停止移动
        fa.onmouseup = function() {
          fa.onmousemove = null
          fa.onmouseup = null
        }
      }
      // 图片缩放效果
      scale.onmousedown = function(e) {
        // 阻止冒泡,避免缩放时触发移动事件
        e.stopPropagation()
        e.preventDefault()
        var pos = {
          w: box.offsetWidth,
          h: box.offsetHeight,
          x: e.clientX,
          y: e.clientY
        }
        fa.onmousemove = function(ev) {
          ev.preventDefault()
          // 设置图片的最小缩放为30*30
          var w = Math.max(30, ev.clientX - pos.x + pos.w)
          var h = Math.max(30, ev.clientY - pos.y + pos.h)
          // console.log(w,h)

          // 设置图片的最大宽高
          w = w >= fa.offsetWidth - box.offsetLeft ? fa.offsetWidth - box.offsetLeft : w
          h = h >= fa.offsetHeight - box.offsetTop ? fa.offsetHeight - box.offsetTop : h
          box.style.width = w + 'px'
          box.style.height = h + 'px'
          // console.log(box.offsetWidth,box.offsetHeight)
        }
        fa.onmouseleave = function() {
          fa.onmousemove = null
          fa.onmouseup = null
        }
        fa.onmouseup = function() {
          fa.onmousemove = null
          fa.onmouseup = null
        }
      }
    }
  }
}
</script>
<style lang='less'>
.page{
    position: relative;
}
.width_49 {
  width: 49%;
}
.button_desc {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  font-weight: 800;
  font-size: 20px;
  border-radius: 20px;
  background: red;
  margin: 10px auto;
}
.template_name {
  color: red;
}
.overbox {
  height: 325px;
}
body {
  background: rgba(255, 243, 209, 1);
}
.head {
  .head_tet {
    color: rgba(234, 3, 1, 1);
    font-size: 30px;
  }
  .aa {
    font-size: 34px;
    color: black;
  }
}
.red {
  color: rgba(234, 3, 1, 1);
  font-size: 30px;
}
.margin_top_10 {
  margin-top: 10px;
}
#box {
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  position: absolute;
  z-index: 4;
}
#scale {
  width: 50px;
  height: 50px;
  overflow: hidden;
  cursor: se-resize;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: rgb(122, 191, 238);
}
.margin_top_30 {
  margin-top: 30px;
}
.width_70 {
  width: 70%;
}
.canvas_box {
}

.tempalte_img {
  transition-duration: 0.5s;
  padding: 4px;
  // margin-bottom: ;
  border: 4px solid transparent;
  &.selected {
    border: 4px solid #409eff;
    border-radius: 4px;
  }
}
.bbbx {
  span {
    display: inline-block;
    width: 90px;
  }
  & > div {
    align-items: center;
    display: flex;
  }
  // display: inline-block;
}
// 通用的
.img_b_box {
  font-family: '方正兰亭';
  transform-origin: 0% 0%;
  transform: scale(0.65);
  background-size: 500px;
  width: 500px;
  height: 500px;
  border: 1px solid gray;
  margin: 10px auto;
  position: relative;
  span {
    position: absolute;
    z-index: 3;
  }
  .z_index_2 {
    z-index: -2;
  }
  .template_img {
    width: 100%;
  }
  .logo_img {
    position: absolute;
    width: 58px;
  }
  .main_img {
    // z-index: -2;
    // width: 500px;
    width: 100%;
    height: 100%;
    cursor: move;
    // transform: translate(-50%, -50%);
  }
  .main_img_pc {
    z-index: 1;
    width: 500px;
    transform: translate(-50%, -50%);
  }
}

.template_1 {
  .add_text {
    position: absolute;
    left: 50%;
    font-family: '方正兰亭粗黑';

    font-size: 150px;
    top: 50%;
    z-index: 10001;
    transition: 0.4s;
    transform: translate(-50%, -50%);
  }

  .space_name {
    font-family: '方正兰亭粗黑';
    font-size: 26px;
    // font-weight: 800;
    color: white;
    transform: translate(-50%, -50%);
  }
  .space_name_2 {
    font-size: 26px;
    font-weight: 800;
    color: white;
    transform: translate(-50%, -50%);
    font-family: '方正兰亭';
  }
  .time_desc {
    font-size: 18px;
    color: white;
    font-family: '方正兰亭粗黑';

    // font-weight: 500;
  }
  .price_desc {
    font-size: 18px;
    color: white;
  }
  .real_price_desc {
    font-family: 'impact111';
    color: rgba(255, 241, 0, 1);
    font-weight: 800;
    font-style: italic;
    transform: translate(-50%, -50%);
  }
  .text4priec {
    font-size: 86px;
  }
  .text3price {
    font-size: 105px;
  }
  .price_type_desc {
    font-family: '方正兰亭粗黑';
    font-size: 24px;
    color: rgba(255, 241, 0, 1);
    // font-weight: 600;
  }
}
.template_2 {
  .space_name {
    // 阆中世纪华联购物中心
    font-size: 23px;
    font-weight: 800;
    color: white;
    transform: translate(-50%, -50%);
    font-family: '方正兰亭粗黑';
    width: 160px;
    text-align: center;
    font-weight: 800;
    line-height: 26px;
  }
  .time_desc {
    // 限时12月12日-13日
    font-size: 14px;
    color: white;
    color: tomato;
    font-weight: 500;
  }
  .price_desc {
    font-size: 18px;
    font-family: '方正兰亭粗黑';
    font-weight: 800;
    width: 121px;
    color: rgba(218, 49, 48, 1);
  }
  .real_price_desc {
    font-family: 'impact111';
    color: rgba(212, 22, 22, 1);
    font-weight: 800;
    transform: translate(-50%, -50%);
  }
  .text4priec {
    font-size: 54px;
  }
  .text3price {
    font-size: 68px;
  }
  .price_type_desc {
    font-size: 17px;
    color: black;
    font-weight: 500;
    font-family: '方正兰亭粗黑';
  }
}
.template_3 {
  .space_name {
    // 阆中世纪华联购物中心
    font-size: 40px;
    font-weight: 800;
    color: white;
    transform: translate(-50%, -50%);
    font-family: '方正兰亭粗黑';
    width: 160px;
    text-align: center;
    font-weight: 800;
    line-height: 26px;
  }
  .time_desc {
    // 限时12月12日-13日
    font-size: 24px;
    color: yellow;
    width: max-content;
    font-weight: 500;
    transform: translate(-50%, -50%);
  }

  .price_desc {
    font-size: 24px;
    // font-family: "方正兰亭粗黑";
    font-weight: 400;
    // width: 151px;
    color: white;
    transform: translate(-50%, -50%);
  }
  .notransform {
    transform: none;
  }
  .real_price_desc {
    font-family: 'impact111';
    color: white;
    font-weight: 800;
    transform: translate(-50%, -50%);
  }
  .ms_jia {
    font-weight: 800;
    transform: translate(-50%, -50%);
    color: yellow;
    font-family: '方正兰亭粗黑';
    font-size: 40px;
  }
  .text4priec {
    font-size: 121px;
  }
  .text3price {
    font-size: 160px;
  }
  .price_type_desc {
    font-size: 24px;
    color: white;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-family: '方正兰亭粗黑';
  }
}
.margin_bottom_20 {
  margin-bottom: 20px;
}
</style>
