<template>
<div id="app">
    <md-tabs  id="nav" class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Create">
        <home/>
      </md-tab>
      <md-tab id="tab-control" md-label="Control">
        <control/>
      </md-tab>
      <md-tab id="tab-about" md-label="About">
        <about/>
      </md-tab>

    </md-tabs>
    
  </div>
  
</template>

<script>
import home from  '@/views/Home.vue';
import about from  '@/views/About.vue';
import control from '@/components/Control.vue';

export default {
  components: {
    home,
    about,
    control
  }
}
</script>



<style lang="scss">
  body {
    background-color: #fff;
  }
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
