<style>
	.liveBoxT{
		text-align: center;
		height:150rpx;	
		margin: 0 20rpx;
		flex-shrink:0;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;	
		padding-top:15rpx;
		border-radius: 20rpx;
	}
	.liveBoxT>text{	
		padding:10rpx 25rpx 0;
	}
</style>

<template>
	<view class="liveBoxT" :style="'background-color:'+bgColor">
		<text>{{Eng}}</text>
		<text>{{china}}</text>
	</view>	
</template>

<script>
	export default {
		name : "lively",
		props:{
			bgColor : {
				type :String,
				default : "#090908" 
			},
			china : {
				type : String,
				default : "基特拉日出"
			},
			Eng : {
				type : String,
				default : "Tequila Sunrise"
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>


