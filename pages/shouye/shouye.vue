<style>
	.topText{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 35rpx 0;
	}
	.topText>image{
		width: 120rpx;
		height: 100rpx;
	}
	.topText>view>text{
		font-size: 60rpx;
	}
	.topText>view>view{
		font-size: 28rpx;
	}
	.shouBanner{
		text-align: center;
		margin-bottom:50rpx ;
	}
	.shouBanner>image{
		width: 680rpx;
	}
	.shouBanner>image{
		border-radius: 30rpx;
	}
	.lively{
		padding: 0 50rpx;
	}
	.liveText{
		line-height: 70rpx;
	}
	.liveText>text{
		font-size: 45rpx;
	}
	.liveText>view{
		font-size: 30rpx;
	}
	.liveBox{
		width: 670rpx;
		display: flex;
		flex-direction: row;
		overflow-x:scroll;
		overflow-y:hidden;
		margin: 30rpx 0;
	}
	.liveBox::-webkit-scrollbar {
		display: none;
	}
	
</style>
<template>
	<view>
		<!--头部说明-->
		<view class="topText">
			<view>
				<text>鸡尾酒的世界</text>
				<view>在鸡尾酒的世界找到合适你的</view>
			</view>
			<image src="../../static/icon/mai.png"></image>
		</view>
		<!--头部说明 end-->
		
		<!--banner大图-->
		<view class="shouBanner">
			<image src="../../static/beijing/shouyeBg.jpg"></image>
		</view>
		<!--banner大图 end-->
		
		<!--热度排行-->
		<view class="lively">
			<view class="liveText">
				<text>热度排行</text>
				<view>
					近期最受达人欢迎的鸡尾酒
				</view>
			</view>
			<view class="liveBox" >
				<lively v-for="idx in liveArr" 
				:Eng="idx.eng"
				:china="idx.china"
				:bgColor="idx.bgColor"
				>					
				</lively>
			</view>
			
		</view>
		<!--热度排行 end-->
		
		<!--经典推荐-->
		<view class="lively">
			<view class="liveText">
				<text>经典推荐</text>
				<view>
					十大经典，颜值口感并存，总有一款适合你
				</view>
			</view>
			
			<classics v-for="idx in icsArr" 
			:Eng="idx.eng"
			:china="idx.china"
			:img="idx.img"
			:brColor="idx.brColor"
			>
			</classics>	
			
		</view>
		<!--经典推荐 end-->
		
	</view>
</template>

<script>
	import lively from "../../components/lively/lively.vue";
	import classics from "../../components/classics/classics.vue"
	export default {
		components : {
			lively,classics
		},
		data() {
			return {
				liveArr : {	//热度排行
					gudian : {
						china : "古典鸡尾酒",
						eng : "Old Fashioned",
						bgColor : "#f6de3e"
					},
					neige : {
						china : " 内格罗尼酒",
						eng : "NEGRONI",
						bgColor : "#f87373"
					},
					wei : {
						china : "威士忌酸",
						eng : "Whisky Sour",
						bgColor : "#c8c176"
					},
					wei : {
						china : "威士忌酸",
						eng : "Whisky Sour",
						bgColor : "#c8c176"
					},
					dai : {
						china : "代基里",
						eng : " Daiquiri",
						bgColor : "#83f5de"
					}
				},//热度排行结束
				
				icsArr : {	//经典推荐
					martini : {
						img : "../../static/jingdian/matini.jpg",
						china : "马提尼",
						eng : " Martini",
						brColor : "#f6de3e"						
					},
					mage : {
						img : "../../static/jingdian/mage.jpg",
						china : "玛格丽特",
						eng : " Margarita",
						brColor : "#3ce6e8fa5252"
					},
					siling : {
						img : "../../static/jingdian/siling.jpg",
						china : "新加坡司令",
						eng : " Singapore Sling",
						brColor : "#fa5252"
					},
					mojite : {
						img : "../../static/jingdian/mojite.jpg",
						china : "莫吉托",
						eng : " Mojito",
						brColor : "#8ee794"
					},
					manhadun : {
						img : "../../static/jingdian/manhadun.jpg",
						china : "曼哈顿",
						eng : " Manhattan",
						brColor : "#89c0dcbbbc91"
					},
					jinfeisi : {
						img : "../../static/jingdian/jinfeisi.jpg",
						china : "金菲士",
						eng : " Gin Fizz",
						brColor : "#bbbc91"
					},
					yelin : {
						img : "../../static/jingdian/yelin.jpg",
						china : "椰林飘香",
						eng : "pina colada",
						brColor : "#b9ba6d"
					},
					bianche : {
						img : "../../static/jingdian/bianche.jpg",
						china : "边车",
						eng : "SideCar",
						brColor : "#000000"
					},
					nike : {
						img : "../../static/jingdian/nike.jpg",
						china : "尼克罗尼",
						eng : "Negroni",
						brColor : "#f8ac18"
					},
					daduhui : {
						img : "../../static/jingdian/daduhui.jpg",
						china : "大都会",
						eng : "Cosmopolitan",
						brColor : "#eef8d3"
					},
				}
				
			}
		},
		methods: {
			forCkFn :function(){
				console.log(0)
			}
		}
	}
</script>

