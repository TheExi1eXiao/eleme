import {
	GET_USERINFO,
	SAVE_ADDRESS
} from './mutation-types.js'
import { Url, Http } from "../tools/http.js";
import Storage from "../tools/storage.js";
let storage = new Storage();
export default {
	getUserInfo({
		commit,
		state
	}) {
		Http.get(
			Url.user,
			{
				user_id: storage.getLocalStorage('user_id')
			},
			(data) => {
				let res = data;
				commit(GET_USERINFO, res)
			},
			() => {},
			() => {}
		)
	},
	saveAddress({
		commit,
		state
	}) {
		if (state.removeAddress.length > 0) return
		Http.get(
			Url.addresses + state.userInfo.user_id + '/addresses',
			{},
			(data) => {
				let addres = data;
				commit(SAVE_ADDRESS, addres);
			},
			() => {},
			() => {}
		)
	}
}