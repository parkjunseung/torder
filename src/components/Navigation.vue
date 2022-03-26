<template>
	<div class="navigationBar">
		<div class="wrap" @click="Navigation('orderHistory')">
			<div class="navIconWrap">
				<img class="navIcon orderHistory" src="@/assets/footerList.png"/>
			</div>
			<div class="navName orderHistory">주문내역</div>
		</div>
		<div class="wrap" @click="Navigation('bill')">
			<div class="navIconWrap">
				<img class="navIcon payment" src="@/assets/footerPayment.png" />
			</div>
			<div class="navName payment">계산서</div>
		</div>	
		<div class="wrap bellWrap">
			<img class="navIcon bell" src="@/assets/footerBell.png" />
			<div class="navName bell">직원호출</div>
		</div>	
		<div class="wrap">
			<div class="navIconWrap">
				<img class="navIcon event" src="@/assets/footerEvent.png" />
			</div>
			<div class="navName event">이벤트</div>
		</div>	
		<div class="wrap">
			<div class="navIconWrap">
				<img class="navIcon bag" src="@/assets/footerShoppingBag.png" />
			</div>
			<div class="navName bag">장바구니</div>
		</div>		
	</div>
</template>

<script>
export default {
	methods: {
		Navigation(to) {
			this.$router.push({name: to})
		}
	},
}
</script>

<style scoped>
	.navigationBar {
		position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 13.25vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-top: 0.125vw solid #ccc;
    padding: 0 12.5vw;
    box-sizing: border-box;
		z-index:2000;
	}

	.navigationBar .wrap{
		width: 13.25vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.45vw;
	}

	.navigationBar .wrap .navIconWrap{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
	}

	.navigationBar .wrap.bellWrap{
    width: 17vw;
    height: 17vw;
    border-radius: 3.75vw;
    background-color: #b51900;
    color: #fff;
    margin-bottom: 7vw;
		padding-top:2vw;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
	}

	.navigationBar .wrap .navIconWrap .navIcon.orderHistory{
		width: 26px;
    height: 18.5px;
	}
	.navigationBar .wrap .navIconWrap .navIcon.payment{
		width: 34.2px;
    height: 22.2px;
	}
	.navigationBar .wrap .navIcon.bell{
		width: 36px;
    height: 41.7px;
	}
	.navigationBar .wrap .navIconWrap .navIcon.event{
		width: 26.8px;
    height: 30.5px;
	}
	.navigationBar .wrap .navIconWrap .navIcon.bag{
		width: 23.7px;
    height: 26.3px;
	}
	
	.navigationBar .wrap .navName{
    margin-bottom: 3vw;
    font-family: "SpoqaHanSansNeo";
    font-size: 2.25vw;
		font-weight: 500;
    letter-spacing: -.1375vw;
	}

	.navigationBar .wrap .navName.bell{
		font-weight: 700;
	}
</style>