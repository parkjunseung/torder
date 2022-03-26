<template>
  <div class="landingContainer">
    <div class="landingImg">
      <img :src=storeUrl @click="handleClick">
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";

function fetch() {
		const store = useStore();
		const storeUrl = computed(() => store.state.landing.store.logoURL); // 상태값 가져오기

		return {
			storeUrl,
		}
}

export default {
  methods: {
    handleClick() {
       this.$router.push({name: 'main'})
    }
  },
	setup () {
		return {
			...fetch()
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .landingContainer{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: #000;
    display: flex;
    flex-direction: column;
  }
  .landingImg {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
