<template>
	<view>
		<scroll-view>
			<button class="btn" @click="openView">View</button>
			<button class="btn" @click="openIcon">Icon</button>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			openView() {
				uni.navigateTo({
					url: "view/view"
				})
			},
			openIcon() {
				uni.navigateTo({
					url: "icon/icon"
				})
			}
		}
	}
</script>

<style>
	.btn {
		margin: 20rpx 30rpx;
		transform: scale(0.95, 0.95);
	}
</style>
