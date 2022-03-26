import axios from "axios";

export const main = {
  state: {
    categories: {
      id: "",
      name: "",
    },
    subCategories: {
      id: "",
      parentCategoriesCodes: ""
    },
    goods:[],
    shoppingBagList:[],
    orderList:[],
  },
  actions: {
    getMockData({commit}) {
      axios.get("/mock.json").then(response => {
        commit("SET_CATEGORIES_DATA", response.data.categories)
        commit("SET_SUBCATEGORIES_DATA", response.data.subCategories)
        commit("SET_GOODS_DATA", response.data.goods)
      })
    }
  },
  //데이터 가공
  getters: {
    price(state) {
      let totalPrice = 0;
      for(let i = 0; i < state.shoppingBagList.length; i++) {
				totalPrice += state.shoppingBagList[i].price
			}
      return totalPrice
    },
    getGoodsList(state){
      let list = [];
      for(let i = 0; i < state.goods.length; i++) {
        if(state.goods[i].belongToCategories.includes('111706')) {
          list.push(state.goods[i])
        }
			}
      return list
    }
  },
  mutations: {
    SET_CATEGORIES_DATA(state, payload) {
      return state.categories = payload;
    },
    SET_SUBCATEGORIES_DATA(state, payload) {
      return state.subCategories = payload;
    },
    SET_GOODS_DATA(state, payload) {
      return state.goods = payload;
    },
    SET_SHOPPINGBAGLIST_DATA(state, payload) {
      return state.shoppingBagList.push(payload);
    },
    SET_SHOPPINGBAGLIST_RESET(state, payload) {
      return state.shoppingBagList = payload;
    },
    SET_ORDERLIST_DATA(state, payload) {
      return state.orderList = payload;
    },
  }
};
 