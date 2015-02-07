/**
 * @method app.checkAppInstalled
 * @desc 通过packageName(Android)获取本地指定应用的本版号
 *
 * @param {String} identifier 要查询的 identifier。如：Android 微信是 "com.tencent.mm"。
 * @param {Function} callback 回调函数
 * @param {String} callback.result 返回查询结果。正常返回 app 的版本号字符串，若没有查询到则返回 0 字符串
 *
 * @example
 * mqq.app.checkAppInstalled(id, function (ret) {
 *     console.log(ret); // 5.3.1
 * });
 *
 * @support iOS not support
 * @support android 4.2
 */

mqq.build('mqq.app.checkAppInstalled', {
    android: function(identifier, callback){
        mqq.invoke('QQApi', 'checkAppInstalled', identifier, callback);
    },
    support: {
        android: '4.2'
    }
});