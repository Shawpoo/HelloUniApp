<template>
	<view>
		<scroll-view>
			<button class="btn" @click="openView">View</button>
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
