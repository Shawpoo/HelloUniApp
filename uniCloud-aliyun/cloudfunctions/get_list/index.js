'use strict';
// 获取云数据库的实例
const db = uniCloud.database();
exports.main = async (event, context) => {
	// 关联数据表
	const collection = db.collection('uni-id-users');
	// 添加数据
	// let addResult = await collection.add({
	// 	name: 'UniApp'
	// })
	
	// 批量添加数据
	// let addResult = await collection.add([{
	// 		name: 'Android'
	// 	},
	// 	{
	// 		name: 'iOS'
	// 	},
	// ])
	// console.log("数据插入: ", JSON.stringify(addResult));
	
	// 删除数据
	// let removeResult = await collection.doc('609d185389dd6e00016cf0fc').remove()
	// console.log("数据删除: ", JSON.stringify(removeResult));
	
	// 更新数据 update只能更新存在的记录
	// const updateResult = await collection.doc('609d185389dd6e00016cf0fb').update({
	// 	name: "Android View",
	// 	email: "111111111@qq.com"
	// })
	// console.log("数据更新: ", JSON.stringify(updateResult));
	// 更新数据 set如果记录存在就更新, 如果不存在就添加
	// const setResult = await collection.doc('123456').set({
	// 	name: "Vue"
	// })
	// console.log("数据更新: ", JSON.stringify(setResult));
	
	// 查找数据 get查询单条
	// const selectResult = await collection.doc('123456').get()
	// 条件查询
	const selectResult = await collection.where({
		username: event.username
	}).get()
	console.log("数据查询: ", JSON.stringify(selectResult));

	return {
		code: 200,
		msg: "OK",
		data: selectResult.data
	}
};
