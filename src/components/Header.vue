<template>
    <div id="header">
        <div class="more" @click.stop="displayMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p class="header-index">全部</p>
        <v-menu :show-menu.sync="showMenu"></v-menu>
        <div class="mask" v-show="showMenu" @click.stop="hideSideBar"></div>
    </div>
</template>
<script>
    import Menu from './Menu'
    

    export default{
        data() {
            return {
                showMenu: false
            }
        },
        components: {
            'v-menu': Menu
        },
        methods: {
            displayMenu() {
                this.showMenu = !this.showMenu
                // 弹出侧边栏时，禁止body滚动
                document.body.classList.toggle("scroll-stop")
            },
            hideSideBar() {
                this.showMenu = !this.showMenu
                // 隐藏侧边栏时，解除禁止滚动
                document.body.classList.toggle("scroll-stop")
            }
        }
    }
</script>
<style lang="less">
    @import "../color.less";
    
    #header{
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 2.5rem;
        background-color: rgba(255, 255, 255, .8);
        border-bottom: 1px solid #ccc;
        box-shadow: 0 .1rem .1rem  #ccc;
        .header-index{
            text-align: center;
            line-height: 2.5rem;
            font-size: 1.3rem;
            font-weight: bold;
            font-family: 黑体;
            letter-spacing: 1.5rem;
        }
        .more{
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            margin-left: 1rem;
            span{
                display: inline-block;
                width: 1.7rem;
                height: .1rem;
                background-color: #444;
                margin: .2rem;
            }
        }
        
    }
    .mask{
      position: fixed;
      z-index: 50;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .3);
    }
    .scroll-stop{
        overflow: hidden;
    }
</style>