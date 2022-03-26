import { createStore } from "vuex";
import { landing } from "@/store/modules/landing";
import { main } from "@/store/modules/main";

export default createStore({
  modules: { landing, main }
});