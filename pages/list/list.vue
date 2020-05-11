<style>
	.topBox{
		width: 610rpx;
		height: 220rpx;
		background-color: #ffc24d;
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
		color: #fff;
		padding: 0 70rpx;
		margin-bottom:70rpx ;
	}
	.topBox>text{
		line-height: 120rpx;
		font-size: 45rpx;
	}
	.topBox>view{
		display: flex;
		justify-content: space-between;
		font-size: 40rpx;
	}
	.numBox{
		width: 120rpx;
		height: 60rpx;
		border: #ffffff solid 2rpx;
		text-align: center;	
		border-radius: 15rpx;
		line-height: 60rpx;
		margin-top:-5rpx ;
	}
	.listBox>view{
		width: 248rpx;
		height: 140rpx;
		border-bottom: #C0C0C0 solid 1rpx;
		border-right: #C0C0C0 solid 1rpx;
		display: flex;
		flex-direction: column;
		float: left;
		text-align: center;
		padding-top: 30rpx;	
	}
	.baseLi{
		background-image: url(../../static/icon/huo.png);
		background-size: 60rpx 60rpx;
		background-repeat: no-repeat;
	}
	.listBox>view:nth-child(3n+3){
		border-right: none;
	}
	.listBox>view>text:nth-child(1){
		color: #C0C0C0;
		font-size: 25rpx;
	}
	.listBox>view>text:nth-child(2){
		font-weight: 700;
	}
</style>

<template>
	<view>
		<!--分类详情头部-->
		<view class="topBox">
			<text>{{baseData.engId}}</text>
			<view>
				<text>{{baseData.id}}</text>
				<text class="numBox">{{dataLT}}款</text>
			</view>
		</view>
		<!--分类详情头部 end-->
		
		<!--分类选项-->
		<view class="listBox">
			<template v-for="(idx,index) in baseData.dateArr">
				<view  class="baseLi" v-if="idx.huo==true" @click="commodityC" :data-name="index">
					<text>{{idx.engId}}</text>
					<text>{{idx.id}}</text>
				</view>
				<view  v-else @click="commodityC" :data-name="index">
					<text>{{idx.engId}}</text>
					<text>{{idx.id}}</text>
				</view>
			</template>
		</view>
		<!--分类选项 end-->
		
	</view>
</template>

<script>
	import baseWine from "../../data/jijiuData.js"
	export default {
		data() {
			return {
				baseList : baseWine.data, 
				baseData : null, //分类详情数据
				dataLT : 0 //款数
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		    console.log(option.id); //打印出		上个页面传递的参数。
			console.log(this.baseList);
			for(var i=0;i<this.baseList.length;i++){ //获取分类详情数据
				if(option.id==this.baseList[i].id){
					console.log(this.baseList[i]);
					this.baseData = this.baseList[i];
					this.dataLT = this.baseList[i].dateArr.length; 
				}
				
			}
		},
		methods: {
			commodityC : function(e){
				var name = e.currentTarget.dataset.name;
				var nameID =JSON.stringify(this.baseData.dateArr[name])
				console.log(nameID)
				uni.navigateTo({
					url:"../commodity/commodity?nameId=" + nameID
				})
				
			}
		}
	}
</script>


