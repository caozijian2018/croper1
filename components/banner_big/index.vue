<template>
    <div class="big_box width_80 margin_auto">
        <el-carousel
            class="flex_1 banner_big_box"
            arrow="always"
            :interval="900000"
            :height="getBigBannerHeight+'px'"
            indicator-position="inside"
        >
            <el-carousel-item v-for="item in banner_img" :key="item.jump_url">
                <div @click="playGame(item)" class="position_relative height_100 overflow_hidden">
                    <img :src="item.img_url+'?AuthInfo='+$store.state.file_token" class="width_100 border_radius_20px" />
                    <div class="position_absolute desc_banner_box">
                        <div class="action_div text_center app_back_red white">PLAY</div>
                        <div class="font_size_20 margin_top_10 margin_bottom_10 font_weight_600">{{item.title}}</div>
                        <star :text-is-red="true"></star>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
// import getInnerWidth from "../../util/get_width"
import star from "../../components/star"

import { mapGetters } from "vuex";
export default {
    components: {
        star
    },
    props:["banner_img"],
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters(['getBigBannerHeight'])
    },
    mounted(){
        this.setHeight()
    },
    methods:{
        playGame(data) {
            this.$router.push({
                path: '/play/' + data.jump_url,
            })
        },
        setHeight() {
            if(this.$store.getters.getBigBannerHeight){
                // console.log(this.$store.getters.getBannerHeight);
            }else{
                this.$nextTick(() => {
                    this.$store.commit("changeBigBannerHeight", parseInt(this.$jquery(this.$jquery('.banner_big_box')[0]).css("width")) / 2.5 || innerWidth / 2.5 + "px");
                })
            }

        },
    }
};
</script>
<style lang='less'>
@import "../../assets/css/them";
.big_box{
    .el-carousel__arrow{
        border-radius: 0px;
    }
    .desc_banner_box{
        position: absolute;
        bottom: 30px;
        left: 30px;
    }
}
</style>
