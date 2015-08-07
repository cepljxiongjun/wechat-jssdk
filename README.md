#wechat-jssdk
使用指南

1.依赖JS

    sha1.js

2.相关配置

appid：为微信appid

jsApiTicket：为服务端获取的jsApiTicket

debug：false-关闭调试模式 true-打开调试模式


    var config = {
        'appid': 'wxe9be60addb7ab995',
        'jsApiTicket':jsApiTicket,
        'debug':true
    }
    wechatShare.init(config);
    
3.接下来你可以直接调用jssdk的方法了。

例如：

分享

    wx.ready(function () {
        var shareData = {
            'imgUrl' : '微信分享图片',
            'link' : '微信分享链接',
            'desc' : '微信分享简介',
            'title' : '微信分享标题',
        };
        
        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareTimeline(shareData);
        wx.onMenuShareQQ(shareData);
        wx.onMenuShareWeibo(shareData);
        wx.onMenuShareQZone(shareData);
    });
    
获取网络状态

    wx.getNetworkType({
        success: function (res) {
            var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
        }
    });
    
使用微信内置地图查看位置接口

    wx.openLocation({
        latitude: 0, // 纬度，浮点数，范围为90 ~ -90
        longitude: 0, // 经度，浮点数，范围为180 ~ -180。
        name: '', // 位置名
        address: '', // 地址详情说明
        scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
    });

获取地理位置接口

    wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            var speed = res.speed; // 速度，以米/每秒计
            var accuracy = res.accuracy; // 位置精度
        }
    });
    
隐藏右上角菜单接口

    wx.hideOptionMenu();
    
等等……