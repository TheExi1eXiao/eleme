import * as type from "./mutation-types.js";
import Storage from "../tools/storage.js";
let storage = new Storage();
export default {
	// 记录当前经度纬度
	[type.RECORD_ADDRESS](state, {
		latitude,
		longitude
	}) {
		state.latitude = latitude;
		state.longitude = longitude;
	},

	[type.RECORD_SHOPDETAIL](state, detail) {
		state.shopDetail = detail;
	},
	// 加入购物车
	[type.ADD_CART](state, {
		shopid,
		category_id,
		item_id,
		food_id,
		name,
		price,
		specs,
		packing_fee,
		sku_id,
		stock
	}) {
		let cart = state.cartList;
		let shop = cart[shopid] = (cart[shopid] || {});
		let category = shop[category_id] = (shop[category_id] || {});
		let item = category[item_id] = (category[item_id] || {});
		if (item[food_id]) {
			item[food_id]['num'] ++;
		} else {
			item[food_id] = {
				"num": 1,
				"id": food_id,
				"name": name,
				"price": price,
				"specs": specs,
				"packing_fee": packing_fee,
				"sku_id": sku_id,
				"stock": stock
			};
		}
		state.cartList = {...cart};
		//存入localStorage
		storage.setLocalStorage('buyCart', state.cartList);
	},
	// 移出购物车
	[type.REDUCE_CART](state, {
		shopid,
		category_id,
		item_id,
		food_id,
		name,
		price,
		specs,
	}) {
		let cart = state.cartList;
		let shop = (cart[shopid] || {});
		let category = (shop[category_id] || {});
		let item = (category[item_id] || {});
		if (item && item[food_id]) {
			if (item[food_id]['num'] > 0) {
				item[food_id]['num'] --;
				state.cartList = {...cart};
				//存入localStorage
				storage.setLocalStorage('buyCart', state.cartList);
			} else {
				//商品数量为0，则清空当前商品的信息
				item[food_id] = null;
			}
		}
	},
	//网页初始化时从本地缓存获取购物车数据
	[type.INIT_BUYCART](state) {
		let initCart = storage.getLocalStorage('buyCart');
		if (initCart) {
			state.cartList = JSON.parse(initCart);
		}
	},
	//清空当前商品的购物车信息
	[type.CLEAR_CART](state, shopid) {
		state.cartList[shopid] = null;
		state.cartList = {...state.cartList};
		storage.setLocalStorage('buyCart', state.cartList);
	},
	// 记录用户信息
	[type.RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.login = true;
		storage.setLocalStorage('user_id', info.user_id);
	},
	//获取用户信息存入vuex
	[type.GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) {
			return
		};
		if (!state.login) {
			return
		}
		if (!info.message) {
			state.userInfo = {...info};
		} else {
			state.userInfo = null;
		}
	},
	//修改用户名
	[type.RETSET_NAME](state,username) {
		state.userInfo = Object.assign({}, state.userInfo,{username})
	},
	//保存商铺id
	[type.SAVE_SHOPID](state, shopid) {
		state.shopid = shopid;
	},
	//记录订单页面用户选择的备注, 传递给订单确认页面
	[type.CONFIRM_REMARK](state, {
		remarkText,
		inputText
	}) {
		state.remarkText = remarkText;
		state.inputText = inputText;
	},
	//是否开发票
	[type.CONFIRM_INVOICE](state, invoice) {
		state.invoice = invoice;
	},
	//选择搜索的地址
	[type.CHOOSE_SEARCH_ADDRESS](state, place) {
		state.searchAddress = place;
	},
	//保存geohash
	[type.SAVE_GEOHASH](state, geohash) {
		state.geohash = geohash;
		
	},
	//确认订单页添加新的的地址
	[type.CONFIRM_ADDRESS](state, newAddress) {
		state.newAddress.push(newAddress);
	},
	//选择的地址
	[type.CHOOSE_ADDRESS](state, {
		address,
		index
	}) {
		state.choosedAddress = address;
		state.addressIndex = index;
	},
	//保存下单需要验证的返回值
	[type.NEED_VALIDATION](state, needValidation) {
		state.needValidation = needValidation;
	},
	//保存下单后购物id 和 sig
	[type.SAVE_CART_ID_SIG](state, {
		cart_id,
		sig
	}) {
		state.cart_id = cart_id;
		state.sig = sig;
	},
	//保存下单参数，用户验证页面调用
	[type.SAVE_ORDER_PARAM](state, orderParam) {
		state.orderParam = orderParam;
	},
	//修改下单参数
	[type.CHANGE_ORDER_PARAM](state, newParam) {
		state.orderParam = Object.assign({}, state.orderParam, newParam);
	},
	//下单成功，保存订单返回信息
	[type.ORDER_SUCCESS](state, order) {
		state.cartPrice = null;
		state.orderMessage = order;
	},
	//进入订单详情页前保存该订单信息
	[type.SAVE_ORDER](state, orderDetail) {
		state.orderDetail = orderDetail;
	},
	//退出登录
	[type.OUT_LOGIN](state) {
		state.userInfo = {};
		state.login = false;
	},
	//保存图片
	[type.SAVE_AVANDER](state, imgPath) {
		state.imgPath = imgPath;
	},
	//删除地址列表
	[type.SAVE_ADDRESS](state, newAdress) {
		state.removeAddress = newAdress
	},
	//添加地址name
	[type.SAVE_ADDDETAIL](state, addAddress){
		state.addAddress = addAddress;
	},
	//保存所选问题标题和详情
	[type.SAVE_QUESTION](state, question) {
		state.question = {...question};
	},
	//增加地址
	[type.ADD_ADDRESS](state, obj) {
		state.removeAddress = [obj, ...state.removeAddress];
	},
	//会员卡价格纪录
	[type.BUY_CART](state, price) {
		state.cartPrice = price;
	}
}