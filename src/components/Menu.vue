<template>
    <div id="menu" :class="{'slide': showMenu}">
        <ul class="menu-list" @click.stop="hideSideBar">
            <user-info></user-info>
            <hr />
            <li class="menu-list-item iconfont icon-all"
                v-link="{name:'index', query:{tab: 'all', page: 1}}">
                全部
            </li>
            <li class="menu-list-item iconfont icon-good"
                v-link="{name:'index', query:{tab: 'good', page: 1}}">
                精华
            </li>
            <li class="menu-list-item iconfont icon-share"
                v-link="{name:'index', query:{tab: 'share', page: 1}}">
                分享
            </li>
            <li class="menu-list-item iconfont icon-ask"
                v-link="{name:'index', query:{tab: 'ask', page: 1}}">
                问答
            </li>
            <li class="menu-list-item iconfont icon-job"
                v-link="{name:'index', query:{tab: 'job', page: 1}}">
                招聘
            </li>
            <hr />
            <li v-if="isLogin"
                class="menu-list-item"
                v-link="{name: 'publish'}">
                发帖
            </li>
            <li class="menu-list-item iconfont icon-msg"
                v-link="{name: 'message'}"
                v-if="isLogin">
                消息
            </li>
            <li class="menu-list-item iconfont icon-about"
                v-link="{name:'about'}">
                关于
            </li>
        </ul>
    </div>
</template>
<script>
    import UserInfo from "./UserInfo"
    import '../assets/iconfont.css'

    export default{
        props: ['showMenu'],
        data() {
            return {
                loginname: localStorage.loginname
            }
        },
        methods: {
            hideSideBar() {
                this.showMenu = !this.showMenu
                document.body.classList.toggle("scroll-stop")
            }
        },
        components: {
            'user-info': UserInfo
        },
        vuex: {
            getters: {
                isLogin: state => state.isLogin
            }
        }
    }
</script>
<style lang="less">
    #menu{
        position: fixed;
        top: 0;
        left: -14rem;
        width: 14rem; 
        height: 100%;
        font-size: 1.1rem;
        z-index: 100;
        background-color: #fff;
        transform: translateZ(0);
        transition: all .3s ease;
        box-sizing: border-box;
        .menu-list{
            background-color: #fff;
            box-sizing: border-box;
            padding: 2rem 1.5rem 0 1.5rem;
            width: 100%;
        }
        .menu-list-item{
            padding: .5rem 0;
            text-align: center;
        }
         &.slide{
            transform: translateX(14rem);
        } 
        .avatar{
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
        }
        .userName{
            font-size: 1.1rem;
        }
        .login{
            display: flex;
            justify-content: space-between;
            align-items: center;
        } 
        .arrow{
            font-size: .9rem;
            color: #f00;
        }
    }
</style>