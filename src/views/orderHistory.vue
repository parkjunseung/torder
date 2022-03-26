<template>
  <div class="orderHistory">
		<div class="orderHistoryHeader">
			<div class="previous-button" @click="$router.go(-1)">
				<svg xmlns="http://www.w3.org/2000/svg" width="39.159" height="26.849" viewBox="0 0 39.159 26.849">
						<g data-name="&lt;-">
								<path data-name="Union 6" d="m-2713.99 26.264-11.425-11.425a2 2 0 0 1-.472-.747v-.011a2 2 0 0 1-.1-.485V13.38a1.989 1.989 0 0 1 .2-.836l.007-.014v-.016a2 2 0 0 1 .19-.3l.011-.014.005-.007.009-.011.008-.01.006-.007.011-.014c.041-.049.084-.1.129-.14L-2713.99.586a2 2 0 0 1 2.829 0 2 2 0 0 1 0 2.829l-8.011 8.01h30.331a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-30.331l8.011 8.011a2 2 0 0 1 0 2.829 2 2 0 0 1-1.415.585 1.99 1.99 0 0 1-1.414-.586z" transform="translate(2726)" style="fill:#2f2a26"/>
						</g>
				</svg>
			</div>
			<div class="headerTitle">주문내역</div>
		</div>
		<div class="orderHistoryGoodsList">
			<div class="historyInfo">
				<div class="historyInfoWrap" v-for="( order, index ) in orderList" :key=index>
					<div class="historyInfoContainer">
						<div class="historyInfoTitle">
							<div class="number">{{index + 1}}</div>
							<div class="text">마지막주문</div>
							<div class="orderTime">오전 01:58:55</div>
						</div>
						<div class="historyInfoList">
							<div class="detailWrap">
								<div class="detailName">
									<div class="detailTitle">{{order.name}}</div>
									<div class="detailMount">1개</div>
								</div>
							</div>
						</div>					
					</div>
				</div>
			</div>
			<div class="historyTotal">
				<div class="totalText">주문합계</div>
				<div class="totalMount">{{orderList.length}}</div>
			</div>
		</div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";

export default {
	components: { 
	},
  setup(props, { emit }) {
		const store = useStore();
		const orderList = computed(() => store.state.main.orderList);
		const totalPrice = computed(() => store.getters.price);

		const closeBag = () => {
			emit('close-bag', false);
    };

		return {
			orderList,
			totalPrice,
			closeBag
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.orderHistory { 
		position: fixed;
    top: 0;
    left: 0;
    z-index: 4000;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
	}
	.orderHistory .orderHistoryHeader{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 11.875vw;
    background-color: #fff;
    border-bottom: 0.125vw solid #dfdfdf;
	}
	.orderHistory .orderHistoryHeader .previous-button{
		position: absolute;
    left: 0;
    padding-left: 3.675vw
	}
	.orderHistory .orderHistoryHeader .previous-button img{ 

	}
	.orderHistory .orderHistoryHeader .headerTitle{
		font-family: "notoserif-bold";
    font-size: 4.25vw;
    letter-spacing: -.10625vw;
	}
	.orderHistory .orderHistoryGoodsList{ 

	}
	.orderHistory .orderHistoryGoodsList .historyInfo{ 
		padding: 0 5vw;
    width: 100%;
    height: calc(100vh - 25.625vw);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: auto;
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap{ 

	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer{ 
		margin-top: 3.125vw;
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoTitle{ 
		display: flex;
    align-items: center;
    gap: 2.125vw;
    font-family: "Spoqa Han Sans";
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoTitle .number{ 
		background-color: #ab240f;
		width: 5.125vw;
    height: 5.125vw;
    border-radius: 1.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.75vw;
    font-weight: 700;
    letter-spacing: -.06875vw;
    color: #fff;
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoTitle .text{ 
		font-weight: 700;
    color: #ab240f;
		font-size: 4vw;
    letter-spacing: -.2vw;
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoTitle .orderTime{ 
		font-weight: 500;
    color: #ab240f;
		flex: 1;
    font-size: 3.25vw;
    letter-spacing: -.08125vw;
    text-align: right;
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoList{ }
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoList .detailWrap{ 
		padding: 3.125vw 0 4.375vw;
    box-sizing: border-box;
    border-bottom: 0.125vw solid #ddd;
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoList .detailWrap .detailName{ 
		display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "notoserif-bold";
    color: #131313;
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoList .detailWrap .detailName .detailTitle{ 
		flex: 1;
    font-size: 4vw;
    letter-spacing: -.2vw;
	}
	.orderHistory .orderHistoryGoodsList .historyInfo .historyInfoWrap .historyInfoContainer .historyInfoList .detailWrap .detailName .detailMount{ 
		width: 20.625vw;
    font-size: 3.75vw;
    text-align: right;
	}
	.orderHistory .orderHistoryGoodsList .historyTotal{ 
		height: 13.75vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    background-color: #2f2a26;
    font-family: Spoqa Han Sans Neo,"sans-serif";
    font-weight: 700;
	}
	.orderHistory .orderHistoryGoodsList .historyTotal .totalText{ 
		font-size: 4.25vw;
    color: #fff;
    letter-spacing: -.2125vw;
	}
	.orderHistory .orderHistoryGoodsList .historyTotal .totalMount{ 
		width: 5.25vw;
    height: 5.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.625vw;
    background-color: #fff;
    font-size: 3.5vw;
    color: #000;
	}
</style>