<template>
	<view>
		<button class="btn" @click="open">执行云函数</button>
		<button class="btn" @click="select">查询数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onTabItemTap() {
			console.log('tab selected. follow');
		},
		methods: {
			open() {
				uniCloud.callFunction({
					name: "login",
					data: {
						name: "Shawpoo",
						email: "994227083@qq.com"
					},
					success(res) {
						console.log("success: ", res);
					},
					fail() {

					}
				})
			},
			select() {
				uniCloud.callFunction({
					name: "get_list",
					data: {
						username: "Shawpoo",
					},
					success(res) {
						console.log("success: ", res);
					},
					fail() {

					}
				})
			}
		}
	}
</script>

<style>
	.btn {
		margin: 20rpx 30rpx;
	}
</style>
