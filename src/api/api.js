import APIBaseUrl from "./config.js";

const Url = {
	//获取首页信息 type: guess(默认地址) hot(热门城市) group(所有城市) number(获取当前所在城市) 
	city:`${APIBaseUrl}/v1/cities`,

	//获取搜索地址type: 'search',city_id: cityid,keyword: value
	pois:`${APIBaseUrl}/v1/pois`,

	
}

export default Url;