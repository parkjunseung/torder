<template>
  <div id="app">
    <Header />
    
    <router-view />
	
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from './components/common/Header'; //import 헤더 추가

export default {
  name: 'App',
  components: {
    Header,          //헤더 컴포넌트 추가
    // Landing,
    // Footer         //풋터 컴포넌트 추가
  }
}
</script>

<style>
@import './assets/style/reset.css';
@import './assets/style/fonts.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  overflow:hidden;
}
::-webkit-scrollbar {
  display: none;
}

</style>
