<template>
    <div id="header">
        <div class="more" @click.stop="displayMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
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
                // 隐藏侧边栏时，戒除禁止滚动
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 2.5rem;
        background-color: rgba(255, 255, 255, .8);
        border-bottom: 1px solid #ccc;
        box-shadow: 0 .1rem .1rem  #ccc;
        .more{
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