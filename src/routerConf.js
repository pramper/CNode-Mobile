export default function(router) {
    router.map({
        // 首页
        '/': {
            name: 'index',
            component: function(resolve) {
                require(['./views/Index.vue'], resolve)
            }
        },
        // 专题
        '/topic/:id': {
            name: 'topic',
            component: function(resolve) {
                require(['./views/Topic.vue'], resolve)
            }
        },
        // 关于
        '/about': {
            name: 'about',
            component: function(resolve) {
                require(['./views/About.vue'], resolve)
            }
        },
        // 登录
        '/login': {
            name: 'login',
            component: function(resolve) {
                require(['./views/Login.vue'], resolve)
            }
        },
        // 用户详情
        '/user/:loginname': {
            name: 'user',
            component: function(resolve) {
                require(['./views/User.vue'], resolve)
            }
        },
        // 发表主题
        '/publish': {
            name: 'publish',
            component: function(resolve) {
                require(['./views/Publish.vue'], resolve)
            }
        },
        // 消息
        '/message': {
            name: 'message',
            component: function(resolve) {
                require(['./views/Message.vue'], resolve)
            }
        }
    })
}