<template>
	<view class="btn_box" :style="{color: color}" @click="onClick">
		<!-- 插槽, 放入调用者声明的内容 -->
		<slot></slot>
	</view>
</template>

<script>
	export default {
		// 自定义属性
		props: {
			color: {
				type: String,
				default: '#000'
			}
		},
		data() {
			return {

			}
		},
		methods: {
			onClick() {
				console.log('btn click.');
				// 发射事件, (类似于事件回调)
				this.$emit('change', this.color)
			}
		}
	}
</script>

<style>
	.btn_box {
		width: 400rpx;
		height: 100rpx;
		border: 2px solid blue;
		text-align: center;
		line-height: 100rpx;
	}
</style>
