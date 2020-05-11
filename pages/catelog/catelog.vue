<style>
	.catelogTop{
		padding: 0 50rpx;
		height: 400rpx;
		background-image: linear-gradient(to bottom right, red, yellow);
		margin-bottom:150rpx ;
		position: fixed;
/* 		top: 89rpx; */
		z-index: 100;
	}
	.topText{
		display: flex;
		flex-direction: column;
		height: 250rpx;
		justify-content: space-around;
	}
	.topText>text{
		margin-top:50rpx;
		color: #fff;
		font-size: 60rpx;
	}
	.topText>view{
		color: #fff;
	}
	.catelogTop>input{
		padding-left:80rpx ;
		width: 580rpx;
		height: 75rpx;
		border:1rpx solid #FFFFFF;
		border-radius: 20rpx;
		color: #FFFFFF;
		background-image: url(../../static/icon/shousuo.png);
		background-repeat: no-repeat;
		background-size: 50rpx 50rpx;
		background-position: 10rpx 10rpx;
		margin-top:20rpx ;
	}
	.base{
		width: 100%;
		position: fixed;
		top: 480rpx;
		z-index: 100;
		background-color: #fff;
	}
	.baseTop{
		width: 680rpx;
		height: 80rpx;
		margin: 50rpx auto;
		display: flex;
		flex-direction: row;		
		overflow-x:auto;
		white-space:nowrap;
		position: relative;
	}
	.baseTop::-webkit-scrollbar {
		display:none;
	}
	.baseBox{
		width: 220rpx;
		margin-right: 70rpx ;
		color: #808080;
	}
	.baseBox:hover{
		color: #f23434;
	}
	.baseBtm{
		width: 150rpx;
		height: 17rpx;
		border-radius: 10rpx;
		background-color: #f23434;
		position: absolute;
		top: 60rpx;
		left: 17rpx;
	}
	.basePin{
		width: 100%;
		position: absolute;
		top: 550rpx;
		margin-bottom:60rpx ;
	}
	.wineImg{
		width: 700rpx;
		height: 500rpx;
		overflow: hidden;
		border: 1rpx solid #fd9a77;
		margin: 40rpx auto;
		border-radius: 40rpx;
		display: flex;
		flex-direction: row;
	}
	.wineImg>image{
		width: 600rpx;
		height: 550rpx;
		margin-left: -280rpx;
	}
	.wineText{
		width:380rpx;
	}
	.wineV{
		text-align: center;
		margin: 50rpx 0;
		font-size: 50rpx;
	}
	.wineTbox{
		width:100%;
		height: 320rpx;
		display: flex;
		flex-direction: row;
		flex-wrap:wrap ;
	}
	.wineTbox>view{
		margin-left: 30rpx;
		width: 150rpx;	
		font-size: 30rpx;
		white-space: nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
</style>
<template>
	<view>
		<!--头部-->
		<view class="catelogTop">
			<view class="topText">
				<text>鸡尾酒</text>
				<view>6大基酒多种款式鸡尾酒介绍</view>
			</view>
			<input type="text" placeholder-style="color:#fff;" placeholder="搜索你喜欢的鸡尾酒" />
		</view>
		<!--头部 end-->

		<!--基酒导航-->
		<view class="base" ref="base">
			<view class="baseTop">
				<template v-for="(idx,index) in baseWine">
					<view class="baseBox" :style="baseColor" v-if="index==0" :data-indexId="index" @click="idxBase">
						{{idx.id}}
					</view>
					<view class="baseBox" v-else :data-indexId="index" @click="idxBase">
						{{idx.id}}
					</view>
				</template>
				<view :animation="animationData" class="baseBtm"></view>
			</view>
		</view>
		<!--基酒导航 end-->
		
		<!--基酒内容-->
		<view class="basePin">
			<view class="wineImg" @click="baseList" v-for="(idx,index) in baseWine" :data-id="idx.id">
				<image :src="idx.dateArr[0].img"></image>
				<view class="wineText">
					<view class="wineV">{{idx.id}}</view>
					<view class="wineTbox">
						<view v-for="indexText in baseT[index]">{{indexText}}</view>
					</view>
				</view>
			</view>
		</view>
		<!--基酒内容 end-->
	</view>
</template>

<script>
	import baseWine from "../../data/jijiuData.js"
	export default {

		data() {
			return {
				baseWine: baseWine.data,//基酒数据
				baseColor: "color: #f23434;",
				animationData: {},//定义滑块动画
				baseT :[]
			}
		},
		onShow: function() {
			// 初始化一个动画
			var animation = uni.createAnimation({
				duration: 1000,
				timingFunction: 'ease',
			})
			this.animation = animation
		},
		onLoad() {
			console.log(baseWine)
			console.log(baseWine.data[0].dateArr[0].id)
			for(var i=0;i<6;i++){	//获取6大基酒数据
				var baseTarr=[]
				for(var j=0;j<8;j++){ //获取每种基酒的前八种酒的名字
					baseTarr.push(baseWine.data[i].dateArr[j].id)
				}
				this.baseT.push(baseTarr)
			}
			
			
		},
		methods: {
			idxBase: function(e) {	//基酒导航点击事件
				console.log(this.baseT)
				var left=e.currentTarget.dataset.indexid*143
				this.yundong(left);
				uni.pageScrollTo({	//滚动动画
				    scrollTop: e.currentTarget.dataset.indexid*270,
				    duration: 300
				});
				this.baseColor = ""
				console.log(e.currentTarget.dataset.indexid)
			},
			yundong:function(e){	//导航滑块运动
				this.animation.translateX(e).step({ duration: 500 })
				this.animationData = this.animation.export()
			},
			baseList :function(e){
				var dataId = e.currentTarget.dataset.id
				// console.log(e.currentTarget.dataset.id)
				uni.navigateTo({
				    url: '../list/list?id='+dataId
				});
			}
		}
	}
</script>
