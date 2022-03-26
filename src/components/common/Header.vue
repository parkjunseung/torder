<template>
	<header>
		<div class="headWrap">
			<div class="headmenu">
				<div class="headSide">
					<div><img src="@/assets/headerHam.png" /></div>
					<div><img src="@/assets/headerLogo.png" /></div>
				</div>
				<div class="headName">{{ storeName }}</div>
				<div class="headNo">
					<div class="headNoWrap">
						<div class ="table">Table NO.</div>
						<div class ="tableNo">{{ tableTitle }}</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";

function fetch() {
		const store = useStore();
		store.dispatch('getLandingData')
		const storeName = computed(() => store.state.landing.store.name); // 상태값 가져오기
		const tableTitle = computed(() => store.state.landing.table.title); // 상태값 가져오기

		return {
			storeName,
			tableTitle
		}
}

export default {
	setup () {
		return {
			...fetch()
		}
	}
}
</script>

<style scoped>
	header {
		width:100%;
		text-align:center;
		position:relative;
		height:120px;
		background: black;
		z-index:500;
	}
	.headWrap {
		width: 100vw;
    height: 13vw;
		display: flex;
    justify-content: space-between;
    gap: 1.25vw;
		padding: 1.875vw 3.125vw 2.5vw 2.5vw;
	}
	.headWrap .headmenu{
		flex: 1;
		height: 7.99875vw;
    display: flex;
    align-items: center;
    gap: 1.25vw;
    padding: 0 1.25vw;
	}

	.headWrap .headmenu .headSide{
		width: 17.5vw;
    height: 4.675vw;
    display: flex;
    align-items: center;
    gap: 1.875vw;
	}
	.headWrap .headmenu .headName{
		flex:1;
		font-family: "mapoflower";
    font-size: 4.875vw;
    color: #fff;
    text-align: center;
	}

	.headWrap .headmenu .headNo{
    width: 17.5vw;
    height: 7.99875vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
	}

	.headWrap .headmenu .headNo .headNoWrap{
		font-family: "SpoqaHanSansNeo";
    display: flex;
    flex-direction: column;
		width: 100%;
    text-align: right;
    color: #fff;
	}

	.headWrap .headmenu .headNo .headNoWrap .table{
		font-size: 1.75vw;
	}
	.headWrap .headmenu .headNo .headNoWrap .tableNo{
		font-family: "SpoqaHanSansNeo-Bold";
		font-size: 4vw;
    font-weight: 700;
    letter-spacing: -.2vw;
	}
</style>