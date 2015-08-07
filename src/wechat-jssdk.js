var wechatShare = {
	init: function(config){
		var debug = config.debug;
		var nonceStr = settings.createNonceStr();
		var timestamp = settings.createTimestamp();
		var jsApiTicket = config.jsApiTicket;
		var signature = settings.sign(nonceStr,timestamp,jsApiTicket);
		wx.config({
			debug: debug ,
			appId: config.appid,
			timestamp: timestamp,
			nonceStr: nonceStr,
			signature: signature,
			jsApiList: [ 'checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone','hideMenuItems','showMenuItems','hideAllNonBaseMenuItem','showAllNonBaseMenuItem','translateVoice','startRecord','stopRecord','onRecordEnd','playVoice','pauseVoice','stopVoice','uploadVoice','downloadVoice','chooseImage', 'previewImage','uploadImage','downloadImage','getNetworkType','openLocation','getLocation','hideOptionMenu','showOptionMenu','closeWindow','scanQRCode','chooseWXPay','openProductSpecificView','addCard','chooseCard','openCard']
		})

	}
}
var settings = {
	createNonceStr: function() {
		return Math.random().toString(36).substr(2, 15);
	},
	createTimestamp: function() {
		return parseInt(new Date().getTime() / 1000) + "";
	},
	raw: function(args) {
		var keys = Object.keys(args);
		keys = keys.sort();
		var newArgs = {};
		keys.forEach(function(key) {
			newArgs[key.toLowerCase()] = args[key]
		});
		var string = "";
		for (var k in newArgs) {
			string += "&" + k + "=" + newArgs[k]
		}
		string = string.substr(1);
		return string
	},
	sign: function(nonceStr,timestamp,jsapi_ticket) {
		var ret = {
			jsapi_ticket: jsApiTicket,
			nonceStr: nonceStr,
			timestamp: timestamp,
			url: window.location.href
		};
		var string = settings.raw(ret);
		shaObj = new jsSHA(string, "TEXT");
		return shaObj.getHash("SHA-1", "HEX");
	},
}
window.wechatShare = wechatShare
