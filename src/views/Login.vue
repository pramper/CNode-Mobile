<template>
    <div id="login">
        <input type="text" placeholder="Access Token" class="token" v-model="token"/>
        <p class="token-prompt">*请从PC端的个人设置中获取 accesstoken</p>
        <button type="button" data-login="login" class="button" @click="login">登录</button>
        <p v-if="showLoading" class="loading" v-text="waitPrompt"></p>
        
    </div>
</template>
<script>
    export default{
        data() {
            return {
                token: '',
                showLoading: false,
                waitPromt: '',
                backRouter: {name: 'index'} // 记录跳转过来的路由，如果没有，则登录后回到主页
            }
        },
        methods: {
            login() {
                this.waitPrompt = "登录中..."
                
                if(this.token.trim() === "") {
                    alert("令牌格式错误,应为36位UUID字符串")
                    return 
                }
                this.showLoading = true
                this.$http.post("https://cnodejs.org/api/v1/accesstoken", {accesstoken: this.token}, 
                    {emulateJSON: true}).then(res => {
                            let resBody = JSON.parse(res.body)
                            let userInfo = {}
                            if(resBody.success) {
                                localStorage.loginname = resBody.loginname
                                localStorage.avatar_url = resBody.avatar_url
                                localStorage.userId = resBody.id
                                localStorage.token = this.token
                                localStorage.success = resBody.success
                                this.setToken(true)
                                this.$route.router.go(this.backRouter) // 跳转回登录前的陀
                            }
                        })
            }
        },
        route: {
            data(transition) {
                if(transition.from.path) {
                    this.backRouter = transition.from
                }
                transition.next()
            }
        },
        vuex: {
            actions: {
                setToken({dispatch}, isLogin) {
                    dispatch('SET_TOKEN', isLogin)
                }
            }
        }
    }
</script>
<style lang="less">
    
    #login{
        width: 100%;
        .token-prompt{
            margin: 1rem 0 2.5rem 1rem;
            font-size: .8rem;
        }
        .loading{
            text-align: center;
            font-size: 1.1rem;
        }
        .token{
            display: block;
            width: 90%;
            border-bottom: 1px solid #007fff;
            border-left: none;
            border-top: none;
            border-right: none;
            margin: 3rem auto 0 auto;
            text-align: center;
            font-size: 1rem;
        }
        .button{
            display: block;
            width: 9rem;
            height: 3rem;
            background-color: #007fff;
            color: #fff;
            border-radius: .2rem;
            margin: 0 auto;
        }
    }
</style>