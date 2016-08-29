<template>
    <div id="user">
        <div class="box">
            <img :src="userData.avatar_url" class="user-avatar">
            <p class="user-name" v-text="userData.loginname"></p>
            <p class="user-field">
                <span>注册时间&nbsp;{{userData.create_at | formatTime}}</span>
                <span>积分&nbsp;{{userData.score}}</span>
            </p>
        </div>
        <div class="box">
            <div @click.stop="selectTopic" class="topic-select">
                <button type="button" data-topic="create" class="right-border"
                    :class="{active: showCreate}">最近创建的话题</button>
                <button type="button" data-topic="reply"
                    :class="{active: !showCreate}">最近参与的话题</button>
            </div>
            <div>
                <user-topic-list :topic-list='userData.recent_topics' v-show="showCreate"></user-topic-list>
                <user-topic-list :topic-list='userData.recent_replies' v-show="!showCreate"></user-topic-list>
            </div>
            
        </div>
    </div>
</template>
<script>
    import UserTopicList from '../components/UserTopicList'

    export default{
        data() {
            return {
                userData: '',
                topicList: '',
                showCreate: true
            }
        },
        route: {
            data({to, next}) {
                let loginName = to.params.loginname
                return this.getUserTopics(loginName)
                
            }
        },
        methods: {
            // 获取和当前user相关的topic
            getUserTopics(userName) {
                this.$http.get("https://cnodejs.org/api/v1/user/"+userName)
                    .then(res => {
                        this.userData = JSON.parse(res.body).data
                        this.topicList = this.userData.recent_topics
                    }).catch(err => {
                        console.log(err)
                    })
            },
            selectTopic(event) {
                let topic = event.target.dataset.topic
                if(topic === "create") {
                    this.showCreate = true
                } else {
                    this.showCreate = false
                }
            }
        },
        components: {
            'user-topic-list': UserTopicList
        }
    }

</script>
<style lang="less">
    #user{
        .box{
            width: 100%;
        }
        .right-border{
            border-right: 1px solid #ccc;
        }
        
        .topic-select{
            display: flex;
            border-top: 1px solid #ccc;
            button{
                flex: 1;
                border-bottom: 1px solid #ccc;
                height: 2.5rem;
                font-size: 1rem;
            }
            .active{
                border-bottom: 2px solid #007fff;
                color: #007fff;
            }
        }
        .user-avatar{
            display: block;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            margin: 1rem auto;
        }
        .user-name{
            font-size: 1.5rem;
            text-align: center;
            font-weight: bold;
        }
        .user-field{
            display: flex;
            justify-content: space-around;
            font-size: .9rem;
            margin: .5rem 0;
            color: #aaa;
        }
    }
</style>