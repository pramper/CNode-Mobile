<template>
    <div id="publish">
        <input type="text" placeholder="请输入标题，十字以上" class="publish-title" v-model="topicTitle"/>
        <div>
            <label class="publish-tab_intro">主题分类</label>
            <select class="publish-tab" v-model="topicTab">
                <option value="ask">问答</option>
                <option value="share">分享</option>
                <option value="job">招聘</option>
            </select>
        </div>
        <textarea class="publish-content" placeholder="请输入要发表的内容，支持markdown语法" 
            v-model="topicContent"></textarea>
        <button type="button" class="publish-submit" @click.stop="publishTopic">发&nbsp;&nbsp;表</button>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                topicTitle: '',
                topicTab: '',
                topicContent: ''
            }
        },
        methods: {
            publishTopic() {
                if(this.topicTitle.trim()==='' || this.topicTab==='' 
                    || this.topicContent.trim()==='') {
                    alert("标题、分类和内容不能为空！")
                    return
                }
                if(this.topicTitle.trim().length < 10) {
                    alert("标题字数必须在10字以上！")
                    return
                }
                let postParams = {
                    accesstoken: localStorage.token,
                    title: this.topicTitle,
                    tab: this.topicTab,
                    content: this.topicContent
                }
                this.$http.post("https://cnodejs.org/api/v1/topics", postParams,  {emulateJSON: true})
                    .then(res => {
                        console.log(res)
                        let resBody = JSON.parse(res.body)
                        if(resBody.success) {
                            this.$route.router.go({name: 'topic', params: {id: resBody.topic_id}})
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>
<style lang="less">
    #publish{
        width: 100%;
        .publish-tab_intro{
            margin-left: 5%;
            font-size: 1rem;
            color: #999;
        }
        .publish-submit{
            display: block;
            width: 7rem;
            background-color: #007fff;
            color: #fff;
            padding: .5rem 0;
            margin: 0 auto;
            border-radius: .2rem;
            font-size: .9rem;
        }
        .publish-title{
            display: block;
            width: 90%;
            height: 1.8rem;
            margin: 2rem auto 1.2rem auto;
            border: 1px solid #ccc;
            border-radius: .2rem;
            font-size: 1rem;
            padding: 0 .3rem;
            box-sizing: border-box;
        }
        .publish-tab{
            width: 5rem;
            border: 1px solid #ccc;
            height: 1.8rem;
            border-radius: .2rem;
            margin-left: 1rem;
            font-size: 1rem;
        }
        .publish-content{
            display: block;
            width: 90%;
            height: 10rem;
            margin: 1.2rem auto;
            border: 1px solid #ccc;
            border-radius: .2rem;
            overflow: scroll;
            resize: none;
            padding: .3rem;
            box-sizing: border-box;
            font-size: .8rem;
        }
    }
</style>