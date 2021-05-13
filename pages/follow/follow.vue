<template>
	<view>
		<button @click="open">执行云函数</button>
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
			}
		}
	}
</script>

<style>

</style>
