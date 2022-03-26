<template>
  <div class="bill">
		<div class="billHeader">
			<div class="previous-button" @click="$router.go(-1)">
				<svg xmlns="http://www.w3.org/2000/svg" width="39.159" height="26.849" viewBox="0 0 39.159 26.849">
						<g data-name="&lt;-">
								<path data-name="Union 6" d="m-2713.99 26.264-11.425-11.425a2 2 0 0 1-.472-.747v-.011a2 2 0 0 1-.1-.485V13.38a1.989 1.989 0 0 1 .2-.836l.007-.014v-.016a2 2 0 0 1 .19-.3l.011-.014.005-.007.009-.011.008-.01.006-.007.011-.014c.041-.049.084-.1.129-.14L-2713.99.586a2 2 0 0 1 2.829 0 2 2 0 0 1 0 2.829l-8.011 8.01h30.331a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-30.331l8.011 8.011a2 2 0 0 1 0 2.829 2 2 0 0 1-1.415.585 1.99 1.99 0 0 1-1.414-.586z" transform="translate(2726)" style="fill:#2f2a26"/>
						</g>
				</svg>
			</div>
			<div class="headerTitle">계산서</div>
		</div>
		<div class="billGoodsList">
			<div class="billInfo">
				<div class="billInfoWrap"  v-for="( order, index ) in orderList" :key=index>
					<div class="billInfoContainer">
						<div class="billInfoName">
							<div class="billGoodsName">{{order.name}}</div>	
							<div class="billGoodsPrice">
								<div class="billGoodsMount">1개</div>
								<div class="billGoodsTotalPrice">{{comma(order.price)}}</div>
							</div>	
						</div>
						<div class="billInfoOption">
							<div class="billOptionPrice">
								<div class="optionText">기본</div>
								<div class="optionPrice">{{comma(order.price)}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="billPrice">
					<div class="billTotalPriceText">총주문금액</div>
					<div class="billTotalPrice">{{comma(totalPrice)}}</div>
				</div>
			</div>
			<div class="dutchPay">
				<div class="dutchPayText">더치페이</div>
				<div class="dutchPayCount">
					<div class="dutchPayCountPlus" @click="countGroup('+')">
						<img src="@/assets/billPlus.svg">
					</div>
					<div class="dutchPayCountPerson">{{groupCount + '명'}}</div>
					<div class="dutchPayCountMinor" @click="countGroup('-')">
						<img src="@/assets/billMinor.svg">
					</div>
				</div>
			</div>
			<div class="dutchPayPrice">
				<div class="dutchPayPriceText">{{groupCount + '인당'}}</div>
				<div class="dutchPayTotalPrice">{{comma(totalPrice/groupCount) + '원'}}</div>
			</div>
		</div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from "vuex";

import {comma} from '@/util/util'

export default {
	components: { 
	},
  setup(props, { emit }) {
		const store = useStore();
		const groupCount = ref(1);
		const orderList = computed(() => store.state.main.orderList);
		const totalPrice = computed(() => store.getters.price);

		const countGroup = (sign) => {
			if (sign === '+') groupCount.value++;
			else if (sign === '-' && groupCount.value !== 1) groupCount.value--;
		}
		const closeBag = () => {
			emit('close-bag', false);
    };

		return {
			comma,
			groupCount,
			countGroup,
			orderList,
			totalPrice,
			closeBag
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bill{ 
		position: fixed;
    top: 0;
    left: 0;
    z-index: 5000;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
	}
	.bill .billHeader{ 
		position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 11.875vw;
    background-color: #fff;
    border-bottom: 0.125vw solid #dfdfdf;
	}
	.bill .billHeader .previous-button{ 
		position: absolute;
    left: 0;
    padding-left: 3.675vw;
	}
	.bill .billHeader .headerTitle{ 
		font-family: "NotoSerifKR-Bold";
    font-size: 4.25vw;
    letter-spacing: -.10625vw;
	}
	.bill .billGoodsList{ 
		width: 100vw;
	}
	.bill .billGoodsList .billInfo{ 
		padding: 0 5vw;
    box-sizing: border-box;
    height: calc(100vh - 38.75vw);
    overflow: auto;
	}
	.bill .billGoodsList .billInfo .billInfoWrap{ }
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer{ 
		padding: 3.75vw 0;
    box-sizing: border-box;
    border-bottom: 0.125vw solid #ddd;
	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoName{ 
		display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.25vw;
    font-family: "NotoSerifKR-Bold";
    color: #131313;
	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoName .billGoodsName{ 
		flex: 1;
    font-size: 4vw;
    letter-spacing: -.2vw;
    text-align: left;
	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoName .billGoodsPrice{ 
		width: 28.75vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.5vw;
	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoName .billGoodsPrice .billGoodsMount{ 
		flex: 1;
		text-align: right;
    font-size: 3.75vw;
	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoName .billGoodsPrice .billGoodsTotalPrice{ 
		width: 18vw;
		text-align: right;
    font-size: 3.75vw;
	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoOption{ 
		margin-top: 2.375vw;
    font-family: "SpoqaHanSansNeo-Bold";
    font-size: 2.75vw;
    color: #666;
    display: flex;
    flex-direction: column;
    gap: 1.25vw;
	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoOption .billOptionPrice{ 
		display: flex;
    justify-content: space-between;
    align-items: center;
	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoOption .billOptionPrice .optionText{ 

	}
	.bill .billGoodsList .billInfo .billInfoWrap .billInfoContainer .billInfoOption .billOptionPrice .optionPrice{ }
	.bill .billGoodsList .billInfo .billPrice{ 
		padding: 2.9375vw 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "NotoSerifKR-Bold";
    font-size: 3.5vw;
    color: #ab240f;
    letter-spacing: -.175vw;
    box-sizing: border-box;
	}
	.bill .billGoodsList .billInfo .billPrice .billTotalPriceText{ 

	}
	.bill .billGoodsList .billInfo .billPrice .billTotalPrice{ }
	.bill .billGoodsList .dutchPay{ 
		height: 13.75vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    box-sizing: border-box;
    border-top: 0.125vw solid #ccc;
	}
	.bill .billGoodsList .dutchPay .dutchPayText{ 
		font-family: "NotoSerifKR-Bold";
    font-size: 4.25vw;
    letter-spacing: -.10625vw;
    color: #2f2a26;
	}
	.bill .billGoodsList .dutchPay .dutchPayCount{ 
		display: flex;
    align-items: center;
    gap: 2.625vw;
    font-family: "NotoSerifKR-semibold";
    font-size: 3.5vw;
    letter-spacing: -.175vw;
	}
	.bill .billGoodsList .dutchPay .dutchPayCount .dutchPayCountPlus{ }
	.bill .billGoodsList .dutchPay .dutchPayCount .dutchPayCountPerson{ }
	.bill .billGoodsList .dutchPay .dutchPayCount .dutchPayCountMinor{ }
	.bill .billGoodsList .dutchPayPrice{ 
		height: 13.75vw;
    background-color: #2f2a26;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.125vw;
    font-family: "SpoqaHanSansNeo-Bold";
	}
	.bill .billGoodsList .dutchPayPrice .dutchPayPriceText{ 
		font-size: 3.5vw;
    color: #dcd6d1;
	}
	.bill .billGoodsList .dutchPayPrice .dutchPayTotalPrice{ 
		font-size: 4.25vw;
    font-weight: 700;
    color: #fff;
	}

</style>