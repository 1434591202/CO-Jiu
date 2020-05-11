<style>
	.plazeBg{
		padding: 0 50rpx;
		height: 400rpx;
		background-image: linear-gradient(to bottom right, red, yellow);
		color:#FFFFFF ;
		display: flex;
		flex-direction: column;
	}
	.plazeBg>text:nth-child(2){
		font-size: 35rpx;
	}
	.plazeBg>text:nth-child(1){
		font-size: 60rpx;
		margin-top:50rpx ;
		margin-bottom: 20rpx;
	}
	.plazeBoxI{
		width: 680rpx;
		height: 300rpx;
		margin: 0 auto;
		margin-top: -120rpx;
		overflow-x:scroll;
		
	}
	.plazeBoxI::-webkit-scrollbar {
	  display: none; /* Chrome Safari */
	}
	.plazeBoxI>view{
		width: 1400rpx;
		display: flex;
		flex-direction: row;
	}
	.palzeTopI{
		margin: 0 20rpx;
		position:relative;
		width: 320rpx;
		height: 200rpx;
		border-radius:30rpx;
	}
	.palzeTopI>view{
		border-radius: 10rpx;
		padding: 25rpx 10rpx 5rpx;
		color: #FFFFFF;
		background-color: rgba(156,187,102,0.5);
		position: absolute;
		top: -15rpx;
		right: 0;
		z-index: 10;
		font-size: 24rpx;
	}
	.palzeTopI>image{
		width: 320rpx;
		height: 200rpx;
		border-radius:30rpx;
	}
	.recommendBox{
		padding: 0 50rpx;
	}
	.reBox{
		width: 100%;
		background-image: url(../../static/my/xia.png);
		background-repeat: no-repeat;
		background-size: 35rpx 35rpx;
		background-position: 600rpx 10rpx;
		
	}
	.recName{
		display: flex;
		flex-direction: row;
		font-size: 35rpx;
		line-height: 100rpx;
		height: 120rpx;
		padding-top:75rpx;
		padding-bottom: 35rpx;
		border-bottom:#999999 solid 1rpx;
	}
	.recName>image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 120rpx;
	}
	.recNanmeVi{
		width: 150rpx;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 25rpx;
		border: #e83c4e solid 1rpx;
		color: #e83c4e;
		text-align: center;
		border-radius: 25rpx;
	}
	.recNanmeTx{
		display: flex;
		flex-direction: column;
		line-height: 45rpx;
		margin: 0 100rpx 0 50rpx;
	}
	.recNanmeTx>text:nth-child(1){
		font-size: 40rpx;
	}
</style>

<template>
	<!--达人广场-->
	<view>
		<!--背景-->
		<view class="plazeBg">
			<text>艺术</text>
			<text>让我们共同欣赏你制作的鸡尾酒</text>
		</view>
		<!--背景 end-->
		
		<!--排行-->
		<view class="plazeBoxI">
			<view>	
			<template v-for="(idx,index)  in dataImg ">
				<view class="palzeTopI">
					<view>TOP{{index+1}}</view>
					<image :src="idx"></image>
				</view>
			</template>
			</view>
		</view>
		<!--排行 end-->
		
		<!--推荐达人-->
		<view class="recommendBox">
			<view class="reBox">
				<text>鸡尾酒达人推荐</text>
			</view>			
			<template v-for="idx in telent">
				<view class="recName">
					<image :src="idx.img"></image>
					<view class="recNanmeTx">
						<text>{{idx.name}}</text>
						<text>{{idx.like}}</text>
					</view>
					<view class="recNanmeVi">+ 关注</view>
				</view>
			</template>
			
		</view>
		<!--推荐达人 end-->
		<view class="moy"></view>
		<!--更多推荐-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataImg : [
					"../../static/jingdian/bianche.jpg",
					"../../static/jingdian/jinfeisi.jpg",
					"../../static/jingdian/mojite.jpg",
					"../../static/jingdian/yelin.jpg"
				],
				telent : [
					{
						name : "Anna",
						like : "玛格尼亚.大都会",
						img : "../../static/Bg/Anne.jpg"
					},
					{
						name : "Enna",
						like : "玛格尼亚.大都会",
						img : "../../static/Bg/Enna.jpg"
					},
					{
						name : "jenny",
						like : "玛格尼亚.大都会",
						img : "../../static/Bg/jenny.jpg"
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

