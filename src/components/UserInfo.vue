<template>
    <li v-if="token" class="login"
        v-link="{name: 'user', params: {loginname: loginname}}">
        <img :src="avatar" class="avatar">
        <span v-text="loginname" class="userName"></span>
        <span class="arrow">&gt;</span>
    </li>
    <li class="menu-list-item iconfont icon-login"
        @click="goLogin"
        v-else>
        登录
    </li>
</template>
<script>
    

    export default{
        data() {
            return {
                token: localStorage.token || '',
                loginname: localStorage.loginname || '',
                avatar: localStorage.avatar_url || ''
            }
        },
        vuex: {
            getters: {
                userInfo: state => state.userInfo
            }
        },
        methods: {
            goLogin() {
                this.$route.router.go({name: 'login'})
            }
        }
    }
</script>
<style lang="less">
    
</style>