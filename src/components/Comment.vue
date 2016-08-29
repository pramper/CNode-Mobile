<template>
    <div id="comment">
        <div class="comment-num">{{commentList.length}}&nbsp;回复</div>
        <ul class="comment-list">
            <li v-for="comment in commentList" class="comment-item">
                <div class="comment-brief">
                    <img :src="comment.author.avatar_url" class="layer-avatar">
                    <span v-text="comment.author.loginname"></span>&nbsp;
                    <span>{{$index+1}}楼</span>&nbsp;
                    <span v-text="comment.create_at | formatTime"></span>
                </div>
                <div v-html="comment.content" class="comment-content"></div>
            </li>
        </ul>
        <div>
            <textarea class="comment-input" placeholder="添加回复，支持markdown语法"
                v-model="inputComment"></textarea>
            <button type="button" class="comment-submit" @click.stop="submitComment">评&nbsp;&nbsp;论</button>
        </div>
    </div>
</template>
<script>
    import 'github-markdown-css'

    export default{
        props: ['commentList'],
        data() {
            return {
                inputComment: ''
            }
        },
        methods: {
            submitComment() {
                if(!localStorage.token) {
                    // 如果本地token不存在，则跳转到登录页面
                    this.$route.router.go({name: 'login'})
                    return 
                } 
                if(this.inputComment.trim() === '') {
                    alert("输入不能为空！")
                    return
                }
                let url = `https://cnodejs.org/api/v1/topic/${this.$route.params.id}/replies`
                this.$http.post(url, {accesstoken: localStorage.token, content: this.inputComment},
                        {emulateJSON: true}).then(res => {
                            let resBody = JSON.parse(res.body)
                            if(resBody.success) {
                                this.inputComment = ''
                                // 刷新回复，重新渲染comment
                                this.getCommentList()
                            }
                        }).catch(err => {
                            console.log(err)
                        })
            },
            getCommentList() {
                this.$http.get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id)
                    .then(res => {
                        let resBody = JSON.parse(res.body)
                        this.commentList = resBody.data.replies
                    }).catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>
<style lang="less">
    #comment{
        width: 100%;
        
        .comment-input{
            display: block;
            width: 90%;
            margin: 1rem auto;
            overflow: scroll;
            resize: none;
            height: 8rem;
            font-size: 1rem;
            padding: .5rem;
        }
        .comment-input:focus{
            border: 1px solid #007fff;
        }
        .comment-submit{
            display: block;
            width: 7rem;
            background-color: #007fff;
            margin: 0 auto 2rem auto;
            padding: .5rem 0;
            color: #fff;
            font-size: 1rem;
            border-radius: .2rem;
        }
        .comment-num{
            width: 100%;
            background-color: #ccc;
            text-align: center;
            padding: .5rem 0;   
            font-weight: bold;
        }
        .comment-content{
            width: 100%;
            padding: 0 1rem;
            box-sizing: border-box;
            margin-top: .5rem; 
            white-space: pre-wrap;
            img{
                width: 100%;
            }
            pre{
                width: 100%;
                overflow: scroll;
            }
        }
        .comment-list{
            width: 100%;
        }
        .comment-item{
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding: .5rem 0;
        }
        .comment-brief{
            display: flex;
            align-items: center;
            width: 100%;
            box-sizing: border-box;
            padding: 0 .5rem;
            color: #aaa;
            font-size: .8rem;
        }
        .layer-avatar{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            margin-right: .5rem;
        }
    }
</style>