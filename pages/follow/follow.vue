<template>
	<view class="content">
		<button class="btn" @click="open">执行云函数</button>
		<button class="btn" @click="select">查询数据</button>
		<button class="btn" @click="upload">上传文件</button>
		<text v-show="progress != 0">{{progress}}%</text>
		<view>
			<image class="img" :src="src"></image>
		</view>
		<button class="btn" @click="deleteImg">删除文件</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				progress: 0,
				src: '/static/logo.png'
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
					fail(err) {
						console.log("fail: ", err)
					}
				})
			},
			upload() {
				let self = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						const filePath = res.tempFilePaths[0];
						var fileName = res.tempFiles[0].name;
						if (fileName == "undefined" || fileName == null || fileName === '') {
							const array = filePath.split('/');
							fileName = array[array.length - 1];
						}
						console.log("choose success: ", res);
						uniCloud.uploadFile({
							filePath: filePath,
							cloudPath: fileName,
							onUploadProgress: function(progressEvent) {
								var percentCompleted = Math.round(
									(progressEvent.loaded * 100) / progressEvent.total
								);
								self.progress = percentCompleted;
							},
							success(res) {
								self.src = res.fileID;
								console.log("!!!: " + self.src);
								console.log("upload success: ", res);
							},
							fail(err) {
								console.log("upload fail: ", err);
							}
						})
					},
					fail(err) {
						console.log("choose error: ", err);
					}
				})
			},
			deleteImg() {
				let self = this;
				uniCloud.deleteFile({
					fileList: [
						self.src
					],
					success(res) {
						self.src = '/static/logo.png';
						self.progress = 0;
						console.log("delete file success: ", res);
					},
					fail(err) {
						console.log("delete file fail: ", err);
					}
				})
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

	.btn {
		margin: 20rpx 30rpx;
	}

	.img {
		height: 200rpx;
		width: 200rpx;
		margin-top: 30rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 30rpx;
	}
</style>
