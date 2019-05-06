import { APIBaseUrl }from "./config.js";

const Url = {
	//获取首页信息 type: guess(默认地址) hot(热门城市) group(所有城市) number(获取当前所在城市) 
	city: `${APIBaseUrl}/v1/cities`,

	//获取搜索地址type: 'search',city_id: cityid,keyword: value
	pois: `${APIBaseUrl}/v1/pois`,

	//获取用户信息
	user: `${APIBaseUrl}/v1/user`,

	//个人中心里编辑地址
	addresses: `${APIBaseUrl}/v1/users/`,

	//获取msite商铺列表
	restaurants: `${APIBaseUrl}/shopping/restaurants`,

	//获取红包
	users: `${APIBaseUrl}/promotion/v2/users/`,

	//获取图片验证码
	captchas: `${APIBaseUrl}/v1/captchas`,

	//确认订单
	checkout: `${APIBaseUrl}/v1/carts/checkout`,

	//重新发送订单验证码
	queryOrder: `${APIBaseUrl}/payapi/payment/queryOrder`,

	//获取快速备注列表
	carts: `${APIBaseUrl}/v1/carts/`,

	//获取msite页面地址信息
	msiteAddress: `${APIBaseUrl}/v2/pois/`,

	//获取food页面的 category 种类列表
	foodCategory: `${APIBaseUrl}/shopping/v2/restaurant/category`,

	//获取food页面的配送方式
	foodDelivery: `${APIBaseUrl}/shopping/v1/restaurants/delivery_modes`,

	//获取food页面的商家属性活动列表
	foodActivity: `${APIBaseUrl}/shopping/v1/restaurants/activity_attributes`,

	//检测帐号是否存在
	checkExsis: `${APIBaseUrl}/v1/users/exists`,

	//获取短信验证码
	mobileCode: `${APIBaseUrl}/v4/mobile/verify_code/send`,

	//改密码
	changePassword: `${APIBaseUrl}/v2/changepassword`,

	//手机号登录
	sendLogin: `${APIBaseUrl}/v1/login/app_mobile`,

	//账号密码登录
	accountLogin: `${APIBaseUrl}/v2/login`,

	//获取msite页面食品分类列表
	msiteFoodTypes: `${APIBaseUrl}/v2/index_entry`
}

export default Url;