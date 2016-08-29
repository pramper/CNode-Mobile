<template>
  <div id="container">
    <v-header></v-header>
    
    <div id="page">
      <router-view :current-topic.sync="currentTopic"></router-view>
    </div>
  </div>
</template>
<script>
  import Header from './components/Header.vue'
  
  import store from './vuex/store'

  export default{
    data() {
      return {
        currentTopic: {}
      }
    },
    components: {
      'v-header': Header
    },
    store
  }
</script>
<style lang="less">
  @import "./color.less";
  
  #container{
    width: 100%;
    font-size: 1rem;
  }
  html{
    height: 100%;
  }
  body{font-family:Helvetica;}
  html, body, div, ul, li, h3, h1, h2, img, p, span, button{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  #page{
    width: 100%;
    padding-top: 2.5rem;
  }
  input, textarea, select{
    outline: none;
  }
  input:focus, textarea:focus, select:focus{
    border-color: #007fff;
  }
  button{
    border: none;
    background-color: #fff;
    outline: none;
  }
  @media screen and (min-width: 320px) {
      html {font-size: 14px;}
  }
   
  @media screen and (min-width: 360px) {
      html {font-size: 16px;}
  }
   
  @media screen and (min-width: 400px) {
      html {font-size: 18px;}
  }
   
  @media screen and (min-width: 440px) {
      html {font-size: 20px;}
  }
   
  @media screen and (min-width: 480px) {
      html {font-size: 22px;}
  }
   
  @media screen and (min-width: 640px) {
      html {font-size: 28px;}
  }
  .list-item{
      width: 100%;
      box-sizing: border-box;
      padding: .5rem .8rem;

      .topic-author-avatar{
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
      }
      .topic-brief-info{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 1rem;
          font-size: .8rem;
          p{
              display: flex;
              justify-content: space-between;
              align-items: center
          }
      }
      .topic-brief{
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          margin-top: .7rem;
      }
      h3{
          width: 100%;
          font-size: 1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
      }
      h3::before{
          display: inline-block;
          font-size: .9rem;
          font-weight: normal;
          padding: .1rem 0;
          border-radius: .2rem;
          width: 2.3rem;
          text-align: center;
          color: #fff;
          margin-right: .8rem;
      }
      .ask::before{
          content: '问答';
          background-color: @ask;
      }
      .top::before{
          content: '置顶';
          background-color: @top;
      }
      .good::before{
          content: '精华';
          background-color: @good;
      }
      .share::before{
          content: '分享';
          background-color: @share;
      }
      .job::before{
          content: '招聘';
          background-color: @job;
      }
  }
</style>