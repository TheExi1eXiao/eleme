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
	Accept: '*',
	"Access-Control-Allow-Origin": "*",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
}
var headerFile = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "multipart/form-data"
};
export const Http = {
	get(
		url,
		params = {},
		success = function () {},
		fail = function () {},
		complate = function () {}
		) {
		if ( storage.getLocalStorage("uesrinfo") && storage.getLocalStorage("userinfo").token ) {
			let token = storage.getLocalStorage("userinfo").token;
			var headers = Object.assign({},header,{
				token:token
			});
		}
		else {
			var headers = header;
		}
		axios({
			url: url,
			params: params,
			method: "get",
			headers: headers,
			timeout: timeout
		}).then((res)=>{
			var all = res;//根据服务端改变
			var data = res.data;//根据服务端改变
			if ( all.status == 200 ) {
				success(data,all);
			}
			else {
				fail(data,all);
			}
		}).catch((err)=>{
			
		}).finally(()=>{
			complate();
		})
	},
	post(
		url,
		data = {},
		success = function () {},
		fail = function () {},
		complate = function () {}
		) {
		if ( storage.getLocalStorage("uesrinfo") && storage.getLocalStorage("userinfo").token ){
			let token = storage.getLocalStorage("userinfo").token;
			var headers = Object.assign({},header,{
				token:token
			});
		}
		else {
			var headers = header;
		}
		axios({
			url: url,
			data: data,
			method: "post",
			headers: headers,
			timeout: timeout
		}).then((res)=>{
			let all = res;
			let data = res.data;
			if ( res.status == 200 ) {	
				success(data,all);
			}
			else {
				fail(data,all);
			}
		}).catch((err)=>{
			
		}).finally(()=>{
			complate();
		})
	},
	filePost(
		url,
		data = {},
		success = function () {},
		fail = function () {},
		complate = function () {}
		) {
		if ( storage.getLocalStorage("userinfo") &&storage.getLocalStorage("userinfo").token ) {
			let token = storage.getLocalStorage("userinfo").token;
			var headers = Object.assign({},headerFile,{
				token:token
			})
		}
		else {
			var headers = headerFile;
		}
		axios({
			method: "post",
			data: data,
			headers: headers,
			timeout: timeout,
			url: url
		}).then((res)=>{
			var all = res.data;
			var data = res.data.data;
			if ( all.code == 0 ) {
				success(data,all);
			}
			else {
				fail(data,all);
			}
		}).catch(()=>{

		}).finally(()=>{
			complate();
		})
	}
}

export const Url = url;