module.exports = {
	devServer :{
		host:"localhost",
		port:8000,
		proxy:{
			'/v1':{
				target:"http://cangdu.org:8001",
				changeOrigin:true
			}
		}
	}
}