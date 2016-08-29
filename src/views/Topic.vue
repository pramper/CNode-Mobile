<template>
    <div id="topic">
        <div class="list-item">
            <h3 v-text="currentTopic.title"></h3>
            <div class="topic-brief">
                <img :src="currentTopic.author.avatar_url" class="topic-author-avatar">
                <div class="topic-brief-info">
                    <p>
                        <span v-text="currentTopic.author.loginname"></span>
                        <span :class="currentTopic.tab | getTabClass currentTopic.top currentTopic.good"
                            class="tab"></span>
                    </p>
                    <p>
                        <span>{{currentTopic.create_at | formatTime}}</span>
                        <span>{{currentTopic.reply_count}}/{{currentTopic.visit_count}}</span>
                    </p>
                </div>
            </div>
        </div>
        <article class="markdown-body" v-html="currentTopic.content"></article>
        <button type="button" class="comment-load" v-if="!isShowComment"
            @click.stop="showComment">加载评论</button>
        <Comment :comment-list="commentList" v-if="isShowComment"></Comment>
    </div>
</template>
<script>
    import 'github-markdown-css'
    import Comment from '../components/Comment'

    export default{
        props: ['currentTopic'],
        data() {
            return {
                isShowComment: false,
                commentList: '',
                topicId: ''
            }
        },
        route: {
            data(transition) {
                this.topicId = this.$route.params.id
                if(transition.from.name === "index") {
                    transition.next()
                } else {
                    return this.getTopicInfo(this.topicId)
                }
            }
        },
        methods: {
            getTopicInfo(topicId, showComment) {
                this.$http.get("https://cnodejs.org/api/v1/topic/"+topicId)
                    .then(res => {
                        let resBody = JSON.parse(res.body)
                        if(!this.currentTopic.id) {
                            // 如果文章存在， 就不需要再重新渲染文章
                            this.currentTopic = resBody.data
                        }
                        this.commentList = resBody.data.replies
                        if(showComment) {
                                this.isShowComment = true
                        }
                    }).catch(err => {
                        alert(JSON.parse(err.body).error_msg)
                        console.log(err)
                    })
            },
            showComment() {
                if(this.commentList) {
                    this.isShowComment = true // 如果评论存在，则隐藏按钮展示评论
                } else {
                    this.getTopicInfo(this.topicId, true)
                }
            }
        },
        components: {
            Comment
        }
    }
</script>
<style lang="less">
    #topic{
        .comment-load{
            display: block;
            width: 6rem;
            padding: .5rem 0;
            border: 1px solid #ccc;
            margin: 2rem auto;
            text-align: center;
            border-radius: .3rem;
            box-shadow: 2px 2px 2px #ccc;
        }
        .tab::before{
            display: inline-block;
            font-size: .9rem;
            font-weight: normal;
            border-radius: .2rem;
            width: 3rem;
            text-align: center;
            color: #fff;
        }
       .list-item{
            h3{
                font-size: 1.1rem;
                white-space: normal;
                overflow: visible;
            }
            p+p{
                margin-top: .1rem;
            }
       }
       .markdown-body{
            width: 100%;
            box-sizing: border-box;
            padding: 0 1rem;
            margin-top: 1.5rem;
       }
    }
</style>