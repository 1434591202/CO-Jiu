
<style>
	.bgImg{
		width: 100%;
		height:580rpx;
	}
	.bgBox{
		width: 100%;
		height: 500rpx;
		background-color: #ffffff;
		border-top-left-radius: 35rpx;
		border-top-right-radius: 35rpx;
		position: absolute;
		top: 540rpx;
		box-shadow: 0rpx -10rpx 10rpx #0c0c0c;
		text-align: center;
		padding-top:180rpx ;
	}
	.bgBox>text{
		font-size: 50rpx;
	}
	.bgBox>view{
		width: 250rpx;
		height: 70rpx;
		background-color:rgba(56,154,188,0.2);
		color: #F0AD4E;
		margin: 100rpx auto;
		border-radius: 15rpx;
		line-height: 70rpx;
	}
</style>
<template>
	<view >
		<image class="bgImg" src="../../static/beijing/shouyeBg.jpg"></image>
		<view class="bgBox">
			<text>鸡尾酒的世界欢迎你</text>
			<view @click="skip">立即前往</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			skip:function(){
				uni.switchTab({
				    url: '../shouye/shouye'
				});
			}
		}
	}
</script>

