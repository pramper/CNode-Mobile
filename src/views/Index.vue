<template>
    <div id="index">
        <ul>
            <li v-for="topicItem in topicList"
                @click.stop="showTopic(topicItem)">
                <list-item :item="topicItem"></list-item>
            </li>
        </ul>
        <div @click.stop="turnPage($event)" class="page-turn">
            <button type="button" data-operation="lastPage" 
                v-show="requestParams.page !== 1">上一页</button>
            <button type="button" data-operation="nextPage">下一页</button>
        </div>
    </div>
</template>
<script>
    import ListItem from '../components/ListItem'

    export default{
        props: ['currentTopic'],
        data() {
            return {
                topicList: [],
                requestParams: {
                    page: 1,
                    limit: 25,
                    tab: 'all'
                },
                // loadTopics: true,
                requestUrl: 'https://cnodejs.org/api/v1/topics'
            }
        },
        components: {
            'list-item': ListItem
        },
        route: {
            data(transition) {
                this.requestParams.page = parseInt(this.$route.query.page) || 1
                this.requestParams.tab = this.$route.query.tab || 'all'
                return this.getTopics(this.requestUrl, this.requestParams)
            }
        },
        methods: {
            showTopic(topic) {
                this.currentTopic = topic
                this.$router.go({
                    name: 'topic',
                    params: {id: topic.id}
                })
            },
            getTopics(url, urlParams) {
                this.$http.get(url, {params: urlParams}).then(res => {
                    this.loadTopics = true
                    if(res.status === 200) {
                        this.topicList = JSON.parse(res.body).data;
                        window.scrollTo(0, 0)
                    }
                })
            },
            turnPage(event) {
                let operation = event.target.dataset.operation
                if(this.$route.query.tab) {
                    // 如果当前url存在query；首次加载app时，url中是没有query的
                    this.requestParams.page = parseInt(this.$route.query.page)
                    this.requestParams.tab = this.$route.query.tab
                }                 
                if(operation === 'nextPage') {
                    // 下一页
                    this.requestParams.page += 1
                } else {
                    // 上一页
                    this.requestParams.page -= 1 
                }
                // 为了跟踪当前页数，必须在url中显示query，所以用router.go；
                // 直接请求更新内容列表的话，无法再url中显示query
                this.$route.router.go({name: 'index', query: this.requestParams})
            }
        }
    }
</script>
<style lang="less">
    #index{
        li{
            width: 100%;
            border-bottom: 1px solid #ccc;
        }
        .page-turn{
            display: flex;
            justify-content: space-around;
            button{
                padding: .6rem 0;
                font-size: .9rem;
                color: #007fff;
                font-weight: bold;
            }
        }
    }
</style>