webpackJsonp([4,7],{25:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{msg:{},msgList:[],currentMsgType:"notRead"}},route:{data:function(){return this.getMsg()}},methods:{getMsg:function(){var e=this;this.$http.get("https://cnodejs.org/api/v1/messages",{params:{accesstoken:localStorage.token,mdrender:"true"}}).then(function(t){var s=JSON.parse(t.body);e.msg=s.data,e.msgList=s.hasnot_read_messages})["catch"](function(e){alert(e.body),console.log(e)})},selectMsgType:function(e){var t=e.target.dataset.msgtype;this.currentMsgType!==t&&(this.currentMsgType=t,this.msgList="notRead"===this.currentMsgType?this.msg.hasnot_read_messages:this.msg.has_read_messages)}}}},63:function(e,t,s){t=e.exports=s(1)(),t.push([e.id,"#message{width:100%}#message .msg-select{display:-webkit-box;display:-ms-flexbox;display:flex}#message .msg-select button{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:1rem;padding:.5rem 0;border-bottom:1px solid #ccc}#message .msg-select button:first-child{border-right:1px solid #ccc}#message .msg-select .active{color:#007fff;border-bottom:2px solid #007fff}#message .msg-item{width:100%;border-bottom:1px solid #ccc}#message .msg-item a{color:#07d;text-decoration:none}#message .msg-content{width:100%;padding:.5rem;box-sizing:border-box}","",{version:3,sources:["/./src/views/Message.vue"],names:[],mappings:"AAAA,SAAS,UAAU,CAAC,qBAAqB,oBAAoB,oBAAoB,YAAY,CAAC,4BAA4B,mBAAmB,WAAW,OAAO,eAAe,gBAAgB,4BAA4B,CAAC,wCAAwC,2BAA2B,CAAC,6BAA6B,cAAc,+BAA+B,CAAC,mBAAmB,WAAW,4BAA4B,CAAC,qBAAqB,WAAW,oBAAoB,CAAC,sBAAsB,WAAW,cAAoB,qBAAqB,CAAC",file:"Message.vue",sourcesContent:["#message{width:100%}#message .msg-select{display:-webkit-box;display:-ms-flexbox;display:flex}#message .msg-select button{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:1rem;padding:.5rem 0;border-bottom:1px solid #ccc}#message .msg-select button:first-child{border-right:1px solid #ccc}#message .msg-select .active{color:#007fff;border-bottom:2px solid #007fff}#message .msg-item{width:100%;border-bottom:1px solid #ccc}#message .msg-item a{color:#07d;text-decoration:none}#message .msg-content{width:100%;padding:.5rem .5rem;box-sizing:border-box}"],sourceRoot:"webpack://"}])},78:function(e,t,s){var o=s(63);"string"==typeof o&&(o=[[e.id,o,""]]);s(2)(o,{});o.locals&&(e.exports=o.locals)},95:function(e,t){e.exports=' <div id=message> <div class=msg-select @click.stop=selectMsgType($event)> <button type=button :class="{active: currentMsgType===\'notRead\'}" data-msgtype=notRead>未读的消息 </button> <button type=button :class="{active: currentMsgType===\'read\'}" data-msgtype=read>已读的消息 </button> </div> <ul> <li v-for="item in msgList" class=msg-item> <p v-if="item.type===\'at\'" class=msg-content> <a v-link="{name: \'user\', params: {loginname: item.author.loginname}}">{{item.author.loginname}}</a>&nbsp;在话题&nbsp;<a v-link="{name: \'topic\', params: {id: item.topic.id}}" v-text=item.topic.title></a>&nbsp;中@了你 </p> <p v-if="item.type===\'reply\'" class=msg-content> <a v-link="{name: \'user\', params: {loginname: item.author.loginname}}">{{item.author.loginname}}</a>&nbsp;回复了你的话题&nbsp;<a v-link="{name: \'topic\', params: {id: item.topic.id}}" v-text=item.topic.title></a> </p> </li> </ul> </div> '},110:function(e,t,s){var o,i;s(78),o=s(25),i=s(95),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}});
//# sourceMappingURL=4.e49a85a962a193530fa2.js.map