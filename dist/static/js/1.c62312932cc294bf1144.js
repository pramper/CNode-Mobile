webpackJsonp([1,7],{22:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["topicList"]}},28:function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(101),r=o(i);t["default"]={data:function(){return{userData:"",topicList:"",showCreate:!0}},route:{data:function(e){var t=e.to,s=(e.next,t.params.loginname);return this.getUserTopics(s)}},methods:{getUserTopics:function(e){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/"+e).then(function(e){t.userData=JSON.parse(e.body).data,t.topicList=t.userData.recent_topics})["catch"](function(e){console.log(e)})},selectTopic:function(e){var t=e.target.dataset.topic;"create"===t?this.showCreate=!0:this.showCreate=!1}},components:{"user-topic-list":r["default"]}}},59:function(e,t,s){t=e.exports=s(1)(),t.push([e.id,".user-topics{width:100%}.user-topics h3{font-size:1rem;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.user-topics .topic-brief{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:.5rem;box-sizing:border-box;padding:0 .5rem;font-size:.9rem;color:#aaa}.user-topics .user-topic{border-bottom:1px solid #ccc;width:100%;box-sizing:border-box;padding:.5rem}.user-topics .topic-date{font-size:.9rem}","",{version:3,sources:["/./src/components/UserTopicList.vue"],names:[],mappings:"AAAA,aAAa,UAAU,CAAC,gBAAgB,eAAe,WAAW,gBAAgB,mBAAmB,sBAAsB,CAAC,0BAA0B,oBAAoB,oBAAoB,aAAa,yBAAyB,sBAAsB,8BAA8B,iBAAiB,sBAAsB,gBAAgB,gBAAgB,UAAU,CAAC,yBAAyB,6BAA6B,WAAW,sBAAsB,aAAmB,CAAC,yBAAyB,eAAe,CAAC",file:"UserTopicList.vue",sourcesContent:[".user-topics{width:100%}.user-topics h3{font-size:1rem;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.user-topics .topic-brief{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:.5rem;box-sizing:border-box;padding:0 .5rem;font-size:.9rem;color:#aaa}.user-topics .user-topic{border-bottom:1px solid #ccc;width:100%;box-sizing:border-box;padding:.5rem .5rem}.user-topics .topic-date{font-size:.9rem}"],sourceRoot:"webpack://"}])},65:function(e,t,s){t=e.exports=s(1)(),t.push([e.id,"#user .box{width:100%}#user .right-border{border-right:1px solid #ccc}#user .topic-select{display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid #ccc}#user .topic-select button{-webkit-box-flex:1;-ms-flex:1;flex:1;border-bottom:1px solid #ccc;height:2.5rem;font-size:1rem}#user .topic-select .active{border-bottom:2px solid #007fff;color:#007fff}#user .user-avatar{display:block;width:6rem;height:6rem;border-radius:50%;margin:1rem auto}#user .user-name{font-size:1.5rem;text-align:center;font-weight:700}#user .user-field{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;font-size:.9rem;margin:.5rem 0;color:#aaa}","",{version:3,sources:["/./src/views/User.vue"],names:[],mappings:"AAAA,WAAW,UAAU,CAAC,oBAAoB,2BAA2B,CAAC,oBAAoB,oBAAoB,oBAAoB,aAAa,yBAAyB,CAAC,2BAA2B,mBAAmB,WAAW,OAAO,6BAA6B,cAAc,cAAc,CAAC,4BAA4B,gCAAgC,aAAa,CAAC,mBAAmB,cAAc,WAAW,YAAY,kBAAkB,gBAAgB,CAAC,iBAAiB,iBAAiB,kBAAkB,eAAgB,CAAC,kBAAkB,oBAAoB,oBAAoB,aAAa,yBAAyB,6BAA6B,gBAAgB,eAAe,UAAU,CAAC",file:"User.vue",sourcesContent:["#user .box{width:100%}#user .right-border{border-right:1px solid #ccc}#user .topic-select{display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid #ccc}#user .topic-select button{-webkit-box-flex:1;-ms-flex:1;flex:1;border-bottom:1px solid #ccc;height:2.5rem;font-size:1rem}#user .topic-select .active{border-bottom:2px solid #007fff;color:#007fff}#user .user-avatar{display:block;width:6rem;height:6rem;border-radius:50%;margin:1rem auto}#user .user-name{font-size:1.5rem;text-align:center;font-weight:bold}#user .user-field{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;font-size:.9rem;margin:.5rem 0;color:#aaa}"],sourceRoot:"webpack://"}])},72:function(e,t,s){var o=s(59);"string"==typeof o&&(o=[[e.id,o,""]]);s(2)(o,{});o.locals&&(e.exports=o.locals)},78:function(e,t,s){var o=s(65);"string"==typeof o&&(o=[[e.id,o,""]]);s(2)(o,{});o.locals&&(e.exports=o.locals)},87:function(e,t){e.exports=' <ul class=user-topics> <li v-for="topic in topicList" class=user-topic v-link="{name: \'topic\', params: {id: topic.id}}"> <h3 v-text=topic.title></h3> <p class=topic-brief> <span v-text=topic.author.loginname></span> <span v-text="topic.last_reply_at | formatTime"></span> </p> </li> </ul> '},94:function(e,t){e.exports=' <div id=user> <div class=box> <img :src=userData.avatar_url class=user-avatar> <p class=user-name v-text=userData.loginname></p> <p class=user-field> <span>注册时间&nbsp;{{userData.create_at | formatTime}}</span> <span>积分&nbsp;{{userData.score}}</span> </p> </div> <div class=box> <div @click.stop=selectTopic class=topic-select> <button type=button data-topic=create class=right-border :class="{active: showCreate}">最近创建的话题</button> <button type=button data-topic=reply :class="{active: !showCreate}">最近参与的话题</button> </div> <div> <user-topic-list :topic-list=userData.recent_topics v-show=showCreate></user-topic-list> <user-topic-list :topic-list=userData.recent_replies v-show=!showCreate></user-topic-list> </div> </div> </div> '},101:function(e,t,s){var o,i;s(72),o=s(22),i=s(87),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},108:function(e,t,s){var o,i;s(78),o=s(28),i=s(94),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}});
//# sourceMappingURL=1.c62312932cc294bf1144.js.map