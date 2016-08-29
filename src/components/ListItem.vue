    <template>
    <div class="list-item">
        <h3 v-text="item.title"
            :class="item.tab | getTabClass item.top item.good">
        </h3>
        <div class="topic-brief">
            <img :src="item.author.avatar_url" class="topic-author-avatar">
            <div class="topic-brief-info">
                <p>
                    <span v-text="item.author.loginname"></span>
                    <span>{{item.reply_count}}/{{item.visit_count}}</span>
                </p>
                <p>
                    <span v-text="item.create_at | formatTime"></span>
                    <span v-text="item.last_reply_at | formatTime"></span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['item']
    }
</script>
<style lang="less">
    
</style>