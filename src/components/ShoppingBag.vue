<template>
	<div v-if="open" class="bag">
    <div class="bellWrap">
			<div class="bellInner">
				<img class="bellImg" src="@/assets/footerBell.png" />
				<div class="bellName">직원호출</div>
			</div>	
		</div>
    <div class="bagTitleWrap">
			<div class="bagTitle">펼처보기</div>
		</div>
    <div class="bagWrap">
			<div class="bagHeaderWrap">
				<div class="bagHeaderName">장바구니</div>
				<button class="bagHeaderButton">전체삭제</button>
			</div>
			<div class="bagListWrap">
				<div class="bagList">
					<div class="bagListContainer"  v-for="( goods, index ) in shoppingBagList" :key=index>
						<div class="deleteButton">
							<img src="@/assets/bagCloseButton.png">
						</div>
						<div class="goodsNameWrap">
							<div class="goodsName">{{goods.name}}</div>
							<div classe="goodsOption"></div>
						</div>
						<div class="goodsPriceWrap">
							<div class="goodsPrice">{{goods.price}}</div>
							<div class="goodsMount">
								<button class="plusButton">
									<img src="@/assets/bagPlusButton.png">
								</button>
								<div class="ea">{{ 1 +"개"}}</div>
								<button class="minorButton">
									<img src="@/assets/bagMinorButton.png">
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bagTotalWrap">
				<div class="totalMount">{{shoppingBagList.length +"개"}}</div>
				<div class="totalPrice">{{totalPrice + "원"}}</div>
			</div>
			<div class="bagButtonWrap">
				<div class="closeButton" @click="closeBag">
					<div class="closeButtonTitle"> 닫기 </div>
				</div>
				<div class="orderButton" @click="clickOrder">
					<div class="orderButtonTitle"> 주문하기</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";

export default {
  props: {
		open: {
      type: Boolean,
      default: false,
    },
	},
  setup(props, { emit }) {
		const store = useStore();
		const shoppingBagList = computed(() => store.state.main.shoppingBagList);
		const totalPrice = computed(() => store.getters.price);

		const clickOrder = () => {
			store.commit('SET_ORDERLIST_DATA', shoppingBagList.value)
    };

		const closeBag = () => {
			emit('close-bag', false);
    };

		return {
			shoppingBagList,
			totalPrice,
			clickOrder,
			closeBag
		}
  }
}
</script>

<style scoped>
	.bag {
		position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 43.75vh;
    margin: 0;
    padding: 0;
		z-index:3000
	}
	.bag .bellWrap{
		position: absolute;
    right: 2.5vw;
    top: -15.75vw;
    width: 17vw;
    height: 17vw;
    display: flex;
    justify-content: center;
    align-items: center;
	}
	.bag .bellWrap .bellInner{
		width: 17vw;
    height: 17vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.875vw;
    border-radius: 3.75vw;
    background-color: #b51900;
	}
	.bag .bellWrap .bellInner .bellImg{
		width: 36px;
    height: 41.7px;
	}
	.bag .bellWrap .bellInner .bellName{
		font-size: 23px;
		color:white;
	}
	.bag .bagTitleWrap{
		position: absolute;
    top: 0;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    height: 7vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
	}
	.bag .bagTitleWrap .bagTitle{
		width: 16.25vw;
    height: 3.75vw;
    font-family: Spoqa Han Sans Neo,"sans-serif";
    font-size: 2.625vw;
    letter-spacing: -.13125vw;
    background-image: url(https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/front/Intersection-no-shadow.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    filter: drop-shadow(0 -3.25vw 3.125vw rgba(0,0,0,.1));
	}
	.bag .bagWrap{
		margin-top: 3.75vw;
    height: calc(43.75vh - 3.75vw);
    background-color: #fff;
    box-shadow: 0 -1.25vw 3.75vw 0 rgb(0 0 0 / 16%);
    border-radius: 3.125vw 3.125vw 0 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
	}
	.bag .bagWrap .bagHeaderWrap{
		padding: 4.375vw 3.75vw 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
	}
	.bag .bagWrap .bagHeaderWrap .bagHeaderName{
		font-family: "notoserif-bold";
    font-size: 3.25vw;
    letter-spacing: -.08125vw;
	}
	.bag .bagWrap .bagHeaderWrap .bagHeaderButton{
		border: 1px solid;
		background-color: #fff;
		padding: 0.5vw 2vw;
		border-radius: 1vw;
		font-size: 2.5vw;
	}
	.bag .bagWrap .bagListWrap{
		flex: 1;
    box-sizing: border-box;
    overflow: auto;
    padding: 0 3.125vw;
	}
	.bag .bagWrap .bagListWrap .bagList{
		margin-top: 2vw;
    height: 30.25vw;
    display: flex;
    align-items: center;
    gap: 2.5vw;
    padding-right: 3.125vw;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer{
		position: relative;
    min-width: 27.5vw;
    height: 30.25vw;
    background-color: #f5f3f2;
    border-radius: 2.5vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .deleteButton{
		position: absolute;
    top: 0;
    right: 0;
    width: 7.875vw;
    height: 7.875vw;
    filter: drop-shadow(0 0 1vw rgba(0,0,0,.2));
    display: flex;
    justify-content: flex-end;
    transform: translate(15%,-15%);
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .deleteButton img{
		width: 42px;
    height: 42px;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsNameWrap{
		padding-top: 4.375vw;
    display: flex;
    flex-direction: column;
    gap: 0.625vw;
    box-sizing: border-box;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsNameWrap .goodsName{
		padding: 0 2.75vw;
    box-sizing: border-box;
    width: 100%;
    max-height: 7.25vw;
    font-family: "notoserif-bold";
    font-size: 2.625vw;
    letter-spacing: -.06625vw;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.33;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsNameWrap .goodsOption{
		font-family: "Spoqa Han Sans";
    font-size: 2.375vw;
    color: #0080ff;
    text-decoration: underline;
    padding: 0 2.75vw;
    box-sizing: border-box;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsPriceWrap{
		flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsPriceWrap .goodsPrice{
		padding: 0 2.75vw;
    font-family: "notoserif-bold";
    font-size: 2.875vw;
    line-height: 1.1;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsPriceWrap .goodsMount{
		display: flex;
    justify-content: space-between;
    align-items: center;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsPriceWrap .goodsMount .plusButton{
		width: 10.25vw;
    height: 10.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: unset;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsPriceWrap .goodsMount .plusButton img{
		width: 46px;
    height: 46px;	
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsPriceWrap .goodsMount .ea{
		font-family: "notoserif-semibold";
    font-size: 3.5vw;
    letter-spacing: -.175vw;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsPriceWrap .goodsMount .minorButton{
		width: 10.25vw;
    height: 10.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: unset;
    transition: all .2s;
	}
	.bag .bagWrap .bagListWrap .bagList .bagListContainer .goodsPriceWrap .goodsMount .minorButton img{
		width: 46px;
    height: 46px;	
	}
	.bag .bagTotalWrap{
		padding: 2.25vw 3.75vw 1.75vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
	}
	.bag .bagTotalWrap .totalMount{
		font-family: "Spoqa Han Sans";
    font-size: 3.25vw;
    font-weight: 700;
    letter-spacing: -.08125vw;
	}
	.bag .bagTotalWrap .totalPrice{
		font-family: "notoserif-bold";
    font-size: 3.75vw;
    color: #b51900;
    letter-spacing: -.09375vw;
	}
	.bag .bagButtonWrap{
		height: 14.625vw;
    display: flex;
    gap: 1.25vw;
	}
	.bag .bagButtonWrap .closeButton{
		width: 22.5vw;
    display: flex;
    justify-content: flex-end;
	}
	.bag .bagButtonWrap .closeButton .closeButtonTitle{
		width: 18.75vw;
    height: 11.5vw;
		background-color: #999;
		font-family: "Spoqa Han Sans";
    font-size: 4.25vw;
    font-weight: 700;
    color: #fff;
    letter-spacing: -.2125vw;
    border-radius: 1.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
	}
	.bag .bagButtonWrap .orderButton{
		flex: 1;
	}
	.bag .bagButtonWrap .orderButton .orderButtonTitle{
		width: 72.5vw;
    height: 11.5vw;
		font-family: "Spoqa Han Sans";
    font-size: 4.25vw;
    font-weight: 700;
    color: #fff;
    letter-spacing: -.2125vw;
    border-radius: 1.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
		background-color: #b51900;
	}
</style>