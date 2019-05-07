
//封装localStorage对象
export default class Storage {
	//设置localStorage方法
	setLocalStorage(key,data,time){
		let date = new Date();
		let value = {
			value:data,
			time:time ? time.getTime() + 1000 * 60 * 60 * 24 : date.getTime()
		}
		localStorage.setItem(key,JSON.stringify(value))
	}
	//获取localStorage方法
	getLocalStorage(key){
		let data = JSON.parse(localStorage.getItem(key));
		let date = new Date();
		let now = date.getTime();
		if(data == null){
			return undefined
		}
		else {
			if(data.time){
				if(data.time > now){
					return data.value
				}
				else{
					this.removeLocalStorage(key);
					return undefined;
				}
			}
			else{
				return data.value;
			}
		}
	}
	//删除localStorage方法
	removeLocalStorage(key){
		localStorage.removeItem(key);
	}
}