<template>
  <div class="main">
		<div class="menuContainer">
			<div class="menu">
				<div :class="(category.id !== selectedMainCategory) ? '' : 'selected'" v-for="( category, id ) in categories" :key=id >{{ category.name }}</div>
			</div>
			<div class="subMenu">
				<div class="subMenuInner">
					<div :class="(subCategory.id !== selectedSubCategory) ? 'subMenuWrap' : 'subMenuWrap selected'" v-for="( subCategory, id ) in subCategories" :key=id>
						<div class="name">{{ subCategory.name }}</div>
						<div class="bar"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="goodsWrap">
			<div class="goodsMainWarp" v-for="( category, id ) in categories" :key=id>
				<div class="goodsMainSubWrap" v-for="( subCategory, id ) in subCategories" :key=id>
						<div class="goodsTitle">
							<div class="goodsMain">{{category.name}}</div>
							<div class="goodsSub">{{subCategory.name}}</div>
						</div>
						<div class="bar"></div>
						<div class="goodsListWrap">
							<div class="goodsList" v-for="(goods, id) in goodsList" :key=id @click="clickGoods(goods);">
								<div class="goodsImgWrap">
									<img class="goodsImg" :src=goods.image>
									<div v-if="goods.soldOut" class="soldOut">SOLD OUT</div>
								</div>
								<div class="goodsInfo">
									<div class="goodsMarkWrap" v-if="goods.optionGroups.length !==0 || goods.description !== ''">
										<div class="goodsMark">{{(goods.optionGroups.length !==0 && goods.description !== '') ? '옵션/상세설명' : (goods.optionGroups.length !==0) ? '옵션' : '상세설명'}}</div>
									</div>
									<div class="goodsNameWrap">
										<div class="goodsName">{{goods.name}}</div>
									</div>
									<div class="goodsPriceWrap">
										<div class="goodsPrice">{{comma(goods.price)}}</div>
									</div>
									<div class="goodsLableWrap">
										<div class="goodsLable" v-if="goods.best !== false">BEST</div>
										<div class="goodsLable" v-if="goods.hit !== false">HIT</div>
										<div class="goodsLable" v-if="goods.recommend !== false">추천</div>
										<div class="goodsLable" v-if="goods.new !== false">신메뉴</div>
									</div>
								</div>
							</div>
						</div>	
				</div>
			</div>
		</div>
  </div>
	<Navigation :open="openShoppingBag" @open-bag="openShoppingBag=true">
	</Navigation>
	<ShoppingBag :open="openShoppingBag" :goods="selectedGoods"  @close-bag="openShoppingBag=value" @open-toast ="openToastPop('')">
	</ShoppingBag>

  <Toast :open="openToast" :text="toastMessage" @close-toast="openToast=false"></Toast>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";
import { ref, watch } from "vue";

import {comma} from '@/util/util'

import Toast from '../components/common/Toast';
import Navigation from '../components/Navigation';
import ShoppingBag from '../components/ShoppingBag';

function fetch() {
	const store = useStore();
	store.dispatch('getMockData')
	const categories = computed(() => store.state.main.categories);
	const subCategories = computed(() => store.state.main.subCategories);
	// const goodsList = computed(() => store.state.main.goods);
	const goodsList = computed(() => store.getters.getGoodsList);

	return {
		categories,
		subCategories,
		goodsList
	}
}

export default {
	components: { 
		Navigation,
		ShoppingBag,
    Toast,
	},
	setup () {
		const store = useStore();
		// 선택된 메인카테고리
		const selectedMainCategory = ref('110701');
		// 선택된 서브카테고리
		const selectedSubCategory = ref('111706');
		const selectedGoods = ref({});
		const openShoppingBag = ref(false);
		const openToast = ref(false);
		const toastMessage = ref('');
		const shoppingBagList = computed(() => store.state.main.shoppingBagList);

		watch(shoppingBagList, () => {
			console.log(shoppingBagList.value)
    });
    const openToastPop = (goods) => {
      //토스트
      if(goods !== '') {
        toastMessage.value= goods + '상품을 추가하였습니다.'
      } else {
        toastMessage.value= '주문을 완료했습니다.'
      }
      openToast.value=true
    }
		const clickGoods = (v) => {
			store.commit('SET_SHOPPINGBAGLIST_DATA', v)
			openShoppingBag.value = true
      openToastPop(v.name)
    };

		return {
			...fetch(),
			clickGoods,
			selectedGoods,
			shoppingBagList,
			selectedMainCategory,
			selectedSubCategory,
			comma,
			openShoppingBag,
      openToastPop,
      openToast,
      toastMessage
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
		position: absolute;
    width: 100vw;
    height: 93vh;
		margin-top: -4vh;
    padding-bottom: 15vh;
    border-top-left-radius: 6.25vw;
    border-top-right-radius: 6.25vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
		z-index: 1000;
  }
	.menuContainer {
		padding-left: 4.75vw;
    box-sizing: border-box;
		overflow: hidden;
	}
	.menu {
		display: flex;
    align-items: center;
    overflow-x: scroll;
		gap: 1.25vw;
		overflow: hidden;
		margin-top: 4vh;
	}
	.menu div {
		font-family: "NotoSerifKR-Black";
    font-size: 3.25vw;
    color: #2f2a26;
    padding: 1.125vw 3.125vw;
    border: 0.25vw solid #2f2a26;
    border-radius: 4.25vw;
	}
	.menu .selected {
		background-color: #2f2a26;
    font-weight: 900;
    color: #fff;
	}
	.subMenu {
    position: relative;
    width: 100%;
    padding: 1.5vw 0 2.3vw;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
	}
	.subMenu .subMenuInner{
		display: flex;
	}
	.subMenu .subMenuInner .subMenuWrap {
    font-family: "NotoSerifKR-Medium";
    font-size: 2.75vw;
    letter-spacing: -.075vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
	}

	.subMenu .subMenuInner .subMenuWrap .name {
    white-space: nowrap;
    padding: 0.875vw 2.625vw 1vw;
    box-sizing: border-box;
	}
	.subMenu .subMenuInner .subMenuWrap.selected .name {
    white-space: nowrap;
    padding: 0.875vw 2.625vw 1vw;
    box-sizing: border-box;
		font-size: 3vw;
    border-radius: 12.5vw;
    background-color: #ab240f;
    font-family: "NotoSerifKR-Bold";
    color: #fff;
	}
	.subMenu .subMenuInner .subMenuWrap .bar {
    margin: 0 2.5vw;
    width: 0.25vw;
    height: 2.5vw;
    background-color: #999;
	}

	.goodsWrap {
		position: relative;
    flex: 1;
    overflow: auto;
    padding: 0 5vw 20vw;
    box-sizing: border-box;
		overflow:auto;
	}

	.goodsWrap .goodsTitle {
		display: flex;
    align-items: center;
    gap: 1.25vw;
	}
	.goodsWrap .goodsTitle .goodsMain{
		font-family: "NotoSerifKR-SemiBold";
    font-size: 2.25vw;
		box-sizing: border-box;
    color: #7a7a7a;
	}
	.goodsWrap .goodsTitle .goodsSub{
		font-family: "NotoSerifKR-Black";
    font-size: 3vw;
    color: #2f2a26;
    box-sizing: border-box;
    line-height: 1.3;
	}
	.goodsWrap .bar{
		width: 90vw;
    height: 0.25vw;
    margin-top: 1.125vw;
    background-color: #2f2a26;
	}

	.goodsWrap .goodsListWrap{
		margin-top: 2.375vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5vw;
    row-gap: 1.875vw;
	}

	.goodsWrap .goodsListWrap .goodsList{
		position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5vw;
	}

	.goodsWrap .goodsListWrap .goodsList .goodsImgWrap{
		position: relative;
    width: 100%;
	}
	.goodsWrap .goodsListWrap .goodsList .goodsImgWrap .goodsImg{
		width: 100%;
    height: 33.125vw;
    background-size: cover;
    background-position: 50%;
    border: 0.125vw solid #e8e8e8;
    border-radius: 1.25vw;
	}
	.goodsWrap .goodsListWrap .goodsList .goodsImgWrap .soldOut{
		position: absolute;
    left: 0.125vw;
    bottom: 0;
    width: calc(100% - 0.25vw);
    height: 4.75vw;
    background-color: rgba(0,0,0,.8);
    border-bottom-left-radius: 1.25vw;
    border-bottom-right-radius: 1.25vw;
    font-family: "NotoSerifKR-Bold";
    font-size: 2.25vw;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
	}

	.goodsWrap .goodsListWrap .goodsList .goodsInfo{
		display: flex;
    flex-direction: column;
    align-items: center;
	}
	.goodsWrap .goodsListWrap .goodsList .goodsInfo .goodsMarkWrap{
		display: flex;
    margin: 0.4vh 0;
    gap: 1.25vw;
    font-size: 2.35vw;
	}
	.goodsWrap .goodsListWrap .goodsList .goodsInfo .goodsMarkWrap .goodsMark{
		height: 2.3vh;
    line-height: 2vh;
    padding: 0.2vh 1vw;
    border-radius: 0.625vw;
    color: #fff;
    background-color: #2f2a26;
	}
	.goodsWrap .goodsListWrap .goodsList .goodsInfo .goodsNameWrap{
    font-family: "NotoSerifKR-SemiBold";
    font-size: 2.75vw;
    width: 35vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    line-height: 1.25;
	}
	.goodsWrap .goodsListWrap .goodsList .goodsInfo .goodsNameWrap .goodsName{

	}
	.goodsWrap .goodsListWrap .goodsList .goodsInfo .goodsPriceWrap{
		margin-top: 0.25vw;
    font-family: "NotoSerifKR-Bold";
    font-size: 3.125vw;
	}
	.goodsWrap .goodsListWrap .goodsList .goodsInfo .goodsPriceWrap .goodsPrice{}
	.goodsWrap .goodsListWrap .goodsList .goodsInfo .goodsLableWrap{
		margin-top: 1.375vw;
    display: flex;
    align-items: center;
    gap: 0.625vw;
	}
	.goodsWrap .goodsListWrap .goodsList .goodsInfo .goodsLableWrap .goodsLable{
		width: 8.125vw;
    height: 3.25vw;
    font-family: "NotoSerifKR-SemiBold";
    font-size: 1.75vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.125vw solid #2f2a26;
    border-radius: 4.25vw;
    box-sizing: border-box;
	}
</style>