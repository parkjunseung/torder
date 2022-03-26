<template>
	<div v-if="open" class="toast">
    <div class="toastWrap">
			<div class="toastInner">
				<div class="toastName">{{text}}</div>
			</div>	
		</div>
	</div>
</template>

<script>
import { watch } from 'vue';

export default {
  props: {
		open: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    }
	},
  setup(props, {emit}) {
    watch(() => props.text, () => {
			setTimeout(() => {
        emit('close-toast');
      }, 1500);
    });
  }
}
</script>

<style scoped>
	.toast {
		position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
		z-index:3000
	}
	.toast .toastWrap{
		position: absolute;
    right: 25vw;
    top: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
	}
	.toast .toastWrap .toastInner{
		width: 50vw;
    height: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.875vw;
    border-radius: 3.75vw;
    background-color: #b51900;
    opacity: 0.92;
	}
	.toast .toastWrap .toastInner .toastName{
    width: 80%;
    height: 80%;
    text-align: center;
    padding: 5vw 0;
		font-family: 'SpoqaHanSansNeo-Bold';
		font-size: 30px;
		color:white;
	}
</style>