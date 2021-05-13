'use strict';
// 运行在云端(服务端)的函数
exports.main = async (event, context) => {
	// event为客户端上传的参数
	// context包含了调用信息和运行状态, 获取每次调用的上下文
	console.log('event : ', event)

	// 返回数据给客户端
	return {
		code: 200,
		msg: event.name + ' come on!',
		context // 等同于 context: context, es6的写法
	}
};
