<template>
    <ul class="user-topics">
        <li v-for="topic in topicList" class="user-topic"
            v-link="{name: 'topic', params: {id: topic.id}}">
            <h3 v-text="topic.title"></h3>
            <p class="topic-brief">
                <span v-text="topic.author.loginname"></span>
                <span v-text="topic.last_reply_at | formatTime"></span>
            </p>
        </li>
    </ul>
</template>
<script>
    export default{
        props: ['topicList']
    }
</script>
<style lang="less">
    .user-topics{
        width: 100%;
        h3{
            font-size: 1rem;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .topic-brief{
            display: flex;
            justify-content: space-between;
            margin-top: .5rem;
            box-sizing: border-box;
            padding: 0 .5rem;
            font-size: .9rem;
            color: #aaa;
        }
        .user-topic{
            border-bottom: 1px solid #ccc;
            width: 100%;
            box-sizing: border-box;
            padding: .5rem .5rem;
        }
        .topic-date{
            font-size: .9rem;
        }
    }
</style>