<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="openComponent">基础组件</button>
		<btn color='green' @change='change'>这是个自定义组件</btn>
	</view>
</template>

<script>
	// 导入自定义控件
	import btn from '@/pages/component/custom/btn.vue';
	export default {
		// 声明自定义控件
		components: {
			btn
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			openComponent() {
				uni.navigateTo({
					url: "../component/base/base_index"
				})
			},
			change(color) {
				console.log('change: ' + color);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
