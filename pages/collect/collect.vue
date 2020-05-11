
<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}
	
	.uniSw{
		margin: 35rpx 0;
		box-shadow: 10rpx 10rpx 5rpx #C0C0C0;
	}
	.cont {
		display: block;
		width: 120rpx;
		flex: 1;
		height:250rpx;
		line-height: 45rpx;
		padding: 0 15rpx;
		position: relative;
		background-color: #fff;
		font-size: 15rpx;
		border-bottom-color: #F5F5F5;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
	.contImg{
		width: 180rpx;
		height: 180rpx;
		margin:35rpx 20rpx 0 ;
		border-radius: 10rpx;
	}
	.contT{
		width: 450rpx;
		height: 120rpx;
		position: absolute;
		left: 50rpx;
		top: 15rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size:30rpx;	
	}
	.contView{
		position: absolute;
		bottom: 30rpx;
		left: 50rpx;
	}
	.contView>text{
		display: inline-block;
		padding: 5rpx 10rpx;
		margin-right: 15rpx;
		color: #999999;
	}
</style>

<template>
	<view>
		<template v-for="(idx,index) in collArr">
			<uni-swipe-action class="uniSw">
				<uni-swipe-action-item :options="options[index]" :id = "idx.id" @click="bindClick">
					<text class="cont"></text>
					<text class="contT">{{idx.explain}}</text>
					<view class="contView">
						<text>{{idx.id}}</text>
						<text>{{idx.hao}}</text>
					</view>
					<image class="contImg" :src="idx.img"></image>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</template>
	</view>
</template>

<script>
	import collect from "../../data/collect.js";
	export default {
		data() {
				return {
					collArr : null,
					isOpened: false,
					options: []
				}
			},
			onReady() {
				this.$nextTick(() => {
					this.isOpened = true
				});
				this.collArr = collect.colData();
				// this.collArr = collect.colData()
				for(var i = 0; i<this.collArr.length;i++){
					var obj = this.collArr[i]
					this.options[i] = [
						{
							text: '取消收藏',
							style: {
								backgroundColor: '#007aff'
							},
							id : obj.id
						}
					]
				}				
				// console.log(this.collArr)
			},
			methods: {
				bindClick(e) {
					uni.showToast({
						title: `点击了${e.content.text}按钮`,
						icon: 'none'
					})
					console.log(e)
					for(var i=0;i<this.collArr.length;i++){
						if(e.content.id==this.collArr[i].id){
							this.collArr.splice(i,1)
							this.options.splice(i,1)
						}
					}
					
					// console.log(this.collArr)
					
					console.log(e.content.id)
					// collect.colData(this.collArr.id,false)
					// collect.colData(e.content.id,false)
				},
				
				
			}
		}
</script>

