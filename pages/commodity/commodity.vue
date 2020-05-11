<style>
	.topImg>image{
		width: 100%;
		height: 600rpx;
		z-index: -1;
	}
	.graD{
		width: 350rpx;
		height: 50rpx;
		padding: 15rpx 0;
		display: flex;
		position: absolute;
		line-height: 50rpx;
		top:350rpx;
		left: 50rpx;
		padding-left:90rpx;
		border-radius: 25rpx;
		background-image: url(../../static/icon/shi.png);
		background-color: rgba(243,243,243,0.4);
		background-repeat: no-repeat;
		background-size: 50rpx 50rpx;
		background-position: 30rpx 16rpx ;
	}
	.graD>view{
		text-align: center;
	}
	.graD>view:nth-child(2){
		width: 220rpx;
		background-image: url(../../static/icon/xing.png);
		background-repeat: no-repeat;
		background-size: 50rpx 50rpx;
		background-position:10rpx -3rpx ;
	}
	.graD>view:nth-child(1){
		width: 150rpx;
		margin-right: 15rpx;
		border-right: #000 solid 5rpx;
	}
	.baseIBox{
		width: 100%;
		background-color: #fff;
		border-top-left-radius:25rpx ;
		border-top-right-radius:25rpx ;
		margin-top: -100rpx;
	}
	.titleBox{
		display: flex;
		flex-direction:column;
		text-align: center;
		padding: 20rpx 35rpx;
		border-bottom: 1rpx #000000 solid;
	}
	.titleBox>text{
		font-weight: 600;
		font-size: 50rpx;
		margin: 20rpx 0;
	}
	.titleBox>text:nth-child(2){
		color: #C0C0C0;
	}
	.titleBox>text:nth-child(4){
		text-align: left;
		font-weight: 200;
		font-size: 35rpx;
		text-indent: 70rpx;
	}
	.collect{
		width: 130rpx;
		height: 130rpx;
		background-color: #ffffff;
		border-radius: 200rpx;
		position: absolute;
		top: 430rpx;
		right: 50rpx;
		box-shadow: 0rpx 5rpx 15rpx #FD9A77;
		text-align: center;
		line-height: 160rpx;
	}
	.collect>image{
		width: 70rpx;
		height: 60rpx;
	}
	.caiL{
		margin: 20rpx 0;
	}
	.caiL>text{
		display: inline-block;
		font-size: 35rpx;
		background-color: #FD9A77;
		 margin:  15rpx;
		 padding: 15rpx;
		 border-radius: 20rpx;
		 color: #FFFFFF;
	}
	.tagBox{
		margin-top: 100rpx;
		padding: 0 30rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.tagIcon{
		width: 320rpx;
		height:100rpx ;
		margin-right: 25rpx;
	}
	.tagIcon>image{
		width:40rpx;
		height: 40rpx;
	}
	.tagIcon>text{
		margin: 0 10rpx;
		color: #808080;
	}
	.tagIcon>text:nth-child(3){
		color: #FD9A77;
	}
</style>
<template>
	<view>
		<!--背景-->
		<view class="topImg"> 
			<image :src="baseList.img"></image>
			<view class="graD">
				<view>{{baseList.hao}}</view>
				<view>{{baseList.graded}}</view>
			</view>
		</view>
		<!--背景 end-->
		
		<!--内容-->
		<view class="baseIBox">
			<view class="titleBox">
				<text>{{baseList.id}}</text>
				<text>{{baseList.engId}}</text>
				<view class="caiL">
					<text v-for="idx in baseList.cai">{{idx}}</text>
				</view>
				<text>{{baseList.explain}}</text>
			</view>
			<view class="collect" @click="colOn">
				<image :src="'../../static/icon/commodity/'+imageF+'.png'"></image>
			</view>
		</view>
		<!--内容 end-->
		
		<!--标签-->
		<view class="tagBox">
			<template v-for="(idx,index,i) in baseList.label">
				<view class="tagIcon">	
					<image :src="'../../static/icon/commodity/commodity'+(i+1)+'.png'"></image>
					<text>{{index}}</text>
					<text>{{idx}}</text>
				</view>
			</template>
		</view>
		<!--标签 end-->
		
	</view>
</template>

<script>
	import collect from "../../data/collect.js"
	export default {
		data() {
			return {
				baseList : null,	//数据
				imageT : false,		//判定是收藏还是取消收藏
				imageF : "xinF", //收藏图片
				colData : null,	//收藏里面的数据
				baseListStr : null //为转成数据的字符
			}
		},
		onLoad: function (option) { 
			var item = JSON.parse(option.nameId);
				this.baseList  = item
				this.baseListStr = option.nameId
			console.log(item)
			uni.setNavigationBarTitle({	//动态标题栏
				title:item.id,	
			})
			
			this.colData = collect.colData();
			for(let i=0;i<this.colData.length; i++){
				if(item.id==this.colData[i].id){
					this.imageT = true 
					this.imageF="xinT"
					break
				}else{
					this.imageT = false
					this.imageF="xinF"
				}
			}
			
			
		},
		methods: {
			colOn : function(e){ //收藏事件
				if(this.imageT){	
					this.imageF="xinF"
					this.imageT = !this.imageT
					collect.colData(this.baseListStr,this.imageT);
				}else{
					this.imageF="xinT"
					this.imageT = !this.imageT	
					collect.colData(this.baseListStr,this.imageT);
				}
			}
		}
	}
</script>


