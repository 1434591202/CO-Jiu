<style>
.topBg{
	padding: 0 50rpx;
	height: 400rpx;
	color: #F1F1F1;
	display: flex;
	flex-direction: row;
	background-image: linear-gradient(to bottom right, red, yellow);
}
.myLeftBox{
	width: 470rpx;
}
.myRightBox{
	width: 180rpx;
	height: 400rpx;
	text-align: center;	
}
.myRightBox>image{
	margin-top: 50rpx;
	margin-bottom: 90rpx;
	width:120rpx;
	height: 120rpx;
	border-radius: 120rpx;
	border: #F1F1F1 solid 4rpx;
}
.myRightBox>view{
	margin: 0 auto;
	width: 120rpx;
	font-size: 0rpx;
	border-radius: 20rpx;
	background-color: rgba(135,135,135,0.4);
}
.myName{
	display: flex;
	flex-direction: column;
}
.myName>text{
	margin: 5rpx 0;
}
.myName>text:nth-child(1){
	margin-top:50rpx;
	font-size: 65rpx;
}
.myNumb{
	display: flex;
	flex-direction: row;
	margin-top:70rpx ;
}
.myNumb>view{
	display: flex;
	flex-direction: column;
	font-size: 30rpx;
	margin-right: 25rpx;
	text-align: center;
}
.myList{
	padding: 0 20rpx;
}
.myList>view{
	height: 120rpx;
	line-height: 120rpx;
	border-bottom: #808080 solid 1rpx;
	background-image:url(../../static/my/xia.png);
	background-repeat: no-repeat;
	background-size: 40rpx 40rpx;
	background-position: 650rpx 45rpx;
	position: relative;
	padding-left: 70rpx;
}
.myList>view>image{
	width: 45rpx;
	height: 45rpx;
	position: absolute;
	top: 40rpx; 
	left: 0rpx;
}
</style>
<template>
	<!--我的-->
	<view>
		<!--头像和背景-->
		<view class="topBg">
			<view class="myLeftBox">
				<view class="myName">
					<text>{{myName}}</text>
					<text>{{email}}</text>
				</view>
				<view class="myNumb">
					<view v-for="(idx,index) in numB">
						<text>{{idx}}</text>
						<text>{{index}}</text>
					</view>
				</view>
			</view>
			<view class="myRightBox">
				<image :src="nameImg"></image>
				<view>Lv {{nameBer}}</view>
			</view>
		</view>
		<!--头像和背景 end-->
		
		<!--列表-->
		<view class="myList">
			<template v-for="(idx,index,num) in icon">
				<view v-if="num==0"  @click="cliA">
					<image :src="idx"></image>
					{{index}}				
				</view>
				<view v-else>
					<image :src="idx"></image>
					{{index}}
				</view>
			</template>
		</view>
		<!--列表 end-->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myName : "Anna",
				email : "143****02",
				numB : {
					"我的关注" : "35",
					"我的发帖数" : "15",
					"积分奖励" : "405"
				},
				nameImg : "../../static/Bg/lanL.jpg",
				nameBer : "1",
				icon : {
					"我的收藏" : "../../static/my/shoucang.png",
					"我的评论" : "../../static/my/pinglun.png",
					"系统信息" : "../../static/my/xiaoxi.png",
					"版本更新" : "../../static/my/xitong.png"
				}
			}
		},
		methods: {
			cliA : function(){
			
				uni.navigateTo({
				    url: '../collect/collect'
				});
			}
		}
	}
</script>


