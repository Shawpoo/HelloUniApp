<template>
	<view class="content">
		<image class="logo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-eb921c33-31a7-4c5b-a99e-99ecee3103bf/42488028-3274-4e97-b78d-39b17a023499.png"></image>
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
				title: 'Hello, 馗哥'
			}
		},
		onLoad() {

		},
		onTabItemTap() {
			console.log('tab selected. index');
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
