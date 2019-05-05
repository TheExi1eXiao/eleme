import Vue from "vue";
import Vuex from "vuex";
import state from "./state.js";
import getters from "./getters.js";
import actions from "./action.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

export default Vuex.Store({
	state,
	getters,
	actions,
	mutations
})