<template>
    <div id="message">
        <div class="msg-select" @click.stop="selectMsgType($event)">
            <button type="button" 
                :class="{active: currentMsgType==='notRead'}"
                data-msgtype="notRead">未读的消息
            </button>
            <button type="button" 
                :class="{active: currentMsgType==='read'}"
                data-msgtype="read">已读的消息
            </button>
        </div>
        <ul>
            <li v-for="item in msgList" class="msg-item">
                <p v-if="item.type==='at'" class="msg-content">
                    <a v-link="{name: 'user', params: {loginname: item.author.loginname}}">{{item.author.loginname}}</a>&nbsp;在话题&nbsp;<a v-link="{name: 'topic', params: {id: item.topic.id}}" v-text="item.topic.title"></a>&nbsp;中@了你
                </p>
                <p v-if="item.type==='reply'" class="msg-content">
                    <a v-link="{name: 'user', params: {loginname: item.author.loginname}}">{{item.author.loginname}}</a>&nbsp;回复了你的话题&nbsp;<a v-link="{name: 'topic', params: {id: item.topic.id}}" v-text="item.topic.title"></a>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                msg: {},
                msgList: [],
                currentMsgType: 'notRead'
            }
        },
        route: {
            data() {
                return this.getMsg()
            }
        },
        methods: {
            getMsg() {
                this.$http.get("https://cnodejs.org/api/v1/messages", 
                    {params: {accesstoken: localStorage.token, mdrender: 'true'}})
                    .then(res => {
                        let resBody = JSON.parse(res.body)
                        this.msg = resBody.data
                        this.msgList = resBody.hasnot_read_messages //默认呈现未读消息
                    }).catch(err => {
                        alert(err.body)
                        console.log(err)
                    })
            },
            selectMsgType(event) {
                // 选择展示的消息类型
                let msgType = event.target.dataset.msgtype
                if(this.currentMsgType === msgType) {
                    return
                } else {
                    this.currentMsgType = msgType
                    this.msgList = this.currentMsgType==='notRead'?this.msg.hasnot_read_messages:
                        this.msg.has_read_messages
                }
                
            }
        }
    }
</script>
<style lang="less">
    #message{
        width: 100%;
        .msg-select{
            display: flex;
            button{
                flex: 1;
                font-size: 1rem;
                padding: .5rem 0;
                border-bottom: 1px solid #ccc;
            }
            button:first-child{
                border-right: 1px solid #ccc;
            }
            .active{
                color: #007fff;
                border-bottom: 2px solid #007fff;
            }
        }
        .msg-item{
            width: 100%;
            border-bottom: 1px solid #ccc;
            a{
                color: #07d;
                text-decoration: none;
            }
        }
        .msg-content{
            width: 100%;
            padding: .5rem .5rem;
            box-sizing: border-box;
        }
    }
</style>