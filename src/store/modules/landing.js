
import axios from "axios";

export const landing = {
  state: {
    store: {
      id: "",
      logoURL: "",
      name: "",
    },
    table: {
      id: "",
      title: ""
    },
  },
  actions: {
    getLandingData({commit}) {
      axios.get("/mock.json").then(response => {
        console.log(response.data)
        commit("SET_STORE_DATA", response.data.store)
        commit("SET_TABLE_DATA", response.data.table)
      })
    }
  },
  //데이터 가공
  getters: {
  },
  mutations: {
    SET_STORE_DATA(state, payload) {
      return state.store = payload;
    },
    SET_TABLE_DATA(state, payload) {
      return state.table = payload;
    }
  }
};
 