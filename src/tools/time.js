export function GetTimeFormat (time, format) {
	format = format || "yyyy-MM-dd hh:mm:ss";
	time = time || undefined;
	if (!time) {
		return ""
	}
	let date = new Date(time);
	return FormatTime(date, format)
}


export function FormatTime (datetime, fmt) {
	if (!datetime) {
		datetime =  new Date();
	}
	if (typeof datetime === "number") {
		datetime = new Date(datetime);
	}
	//author: meizz   
	let o = {
		"M+": datetime.getMonth() + 1,                 //月份   
		"d+": datetime.getDate(),                    //日   
		"h+": datetime.getHours(),                   //小时   
		"m+": datetime.getMinutes(),                 //分   
		"s+": datetime.getSeconds(),                 //秒   
		"q+": Math.floor((datetime.getMonth() + 3) / 3), //季度   
		"S": datetime.getMilliseconds()             //毫秒   
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (datetime.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (let k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt
}