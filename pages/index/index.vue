<template>
    <div class="height_100">
        <div
            class="display_flex flex_column height_100 width_80 phone_width_100 margin_auto"
        >
            <!-- <app-head></app-head> -->
            <div class="flex_1 child_box nscrol overflow_scroll scroll_box">
                <nuxt-child></nuxt-child>
            </div>
        </div>
    </div>
</template>

<script>
import glo_axios from "../../util/glo_request";
import isPc from "../../util/is_pc";
import initOp from "../../util/init_op";
import appHead from "../../components/app_header";
import i18n from "../../plugins/i18n";
export default {
    components: {
        appHead,
    },
    transition: "fade",
    // loading: true,
    middleware: "auth",
    data() {
        return {
            fullscreenLoading: true,
        };
    },
    methods: {
        saveOp() {
            var op = this.$route.query.op || this.$route.query.country;
            initOp(op);
        },
        watchOnresize() {
            window.onresize = this.setHeightAndPhoneOrPc;
        },
        setHeightAndPhoneOrPc() {
            this.$store.commit("ChangeisPc", isPc());
            // history.go(0)
        },
        jdt() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start();
                setTimeout(() => this.$nuxt.$loading.finish(), 1500);
            });
        },
    },
    mounted() {
        this.watchOnresize();
        this.setHeightAndPhoneOrPc();
    },
};
</script>
<style lang="less">
@import "../../assets/css/them.less";
</style>
