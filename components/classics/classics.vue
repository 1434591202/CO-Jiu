<style>
	.classics{
		width: 670rpx;
		height: 350rpx;
		margin: 0 auto;
		margin-top: 100rpx ;
		
		border-radius: 20rpx;
		box-shadow: 0 0 5rpx #f6de3e;
		display: flex;
		flex-direction: row;
		justify-content:center;
	}
	.classics>image{
		width: 350rpx;
		height: 350rpx;
		border-radius: 25rpx;
		margin-top: -50rpx;
		/* flex-shrink:0; */
	}
	.classics>view{
		width: 280rpx;
		display: flex;
		flex-direction: column;
		text-align: center;
		padding-top:50rpx ;
	}
	.classics>view>text{
		margin-top:50rpx ;
	}
</style>
<template>
	<view @click="forCkFn" class="classics" :style="'border: 1rpx solid'+brColor">
		<image :src="img"></image>
		<view>
			<text>{{china}}</text>
			<text>{{Eng}}</text>
		</view>
	</view>
</template>

<script>
	import baseWine from "../../data/jijiuData.js"
	export default {
		name : "classics",
		props : {
			img : {
				type : String,
				default : "../../static/jingdian/matini.jpg"
			},
			china : {
				type : String,
				default : "马提尼"
			},
			Eng : {
				type : String,
				default : "Martini"
			},
			brColor: {
				type : String,
				default : "#f6de3e"
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			forCkFn :function(){
				var li = baseWine.data;
				
		
				
				for(let i=0;i<li.length;i++){
					
					for(let j=0;j<li[i].dateArr.length;j++){
						// console.log(li[i].dateArr[j].id)
						// console.log(this.china)
						if(li[i].dateArr[j].id == this.china){
							var listStr = JSON.stringify(li[i].dateArr[j])
							console.log(listStr)
							uni.navigateTo({
								url:"../commodity/commodity?nameId=" + listStr
							})
						}
					}
				}
				
			}
		}
	}
</script>


