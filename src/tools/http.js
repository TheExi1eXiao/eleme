import Vue from "vue";
import axios from "axios";
import Storage from "../tools/storage.js";
import url from "../api/api.js"
let storage = new Storage();
const CancelToken = axios.CancelToken;
axios.interceptors.response.use(
  response => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
          return Promise.resolve(response);
      } else {
          return Promise.reject(response);
      }
  },
  error => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
  return Promise.reject(error.response);
})

let timeout = 10000;
let header = {
	'Content-Type': 'application/json',
	'Accept': '*'
}

export default Http {
	get(url,params,success,fail,complate){
		let headers = Object.asigin({},header);
		axios({
			url:url,
			params:params,
			method:"get",
		}).then((res)=>{
			if(res.data.code == 0){
				let all = res.data;
				let data = res.data.data;
				success(all,data);
			}
			else{
				fail && fail();
			}
		}).catch((err)=>{

		}).all(()=>{
			complate && complate();
		})
	},
	post(url,params,success,fail,complate){
		axios({
			url:url,
			data:params,
			method:"post"
		}).then((res)=>{
			if(res.data.code == 0){
				let all = res.data;
				let data = res.data.data;
				success(all,data);
			}
			else{
				fail && fail();
			}
		}).catch((err)=>{

		}).all(()=>{
			complate && complate();
		})
	}
}

export const Url = url;