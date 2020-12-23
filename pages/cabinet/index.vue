<template>
	<section class="section">
			<!-- <card title="Free" icon="github" >
				Open source on <a href="https://github.com/buefy/buefy">GitHub</a>
			</card> -->
			<h1 class="title">News</h1>
            <hr class="has-background-link">
			<div class="news">
				<div class="n" v-for="i in tempArr" v-bind:key="i">
					<div class="img">
						<img :src= "i.data().imgSrc">
					</div>
					<div class="in">
						<div class="name">{{i.data().title}}</div>
						<div class="text">{{i.data().description}}</div>
					</div>
				</div>
			</div>
	</section>
</template>

<script>
import Card from '~/components/Card'

import firebase from 'firebase/app'
import '@firebase/firestore'
const fireDb = firebase.firestore()
	
var ref;
var temp
export default {
	name: 'HomePage',
	components: {
		Card
	},
	data(){
		return{
			tempArr: []
		}
	},
	created(){
			ref = fireDb.collection('events').where("event", "==", true)
            ref.get()
			.then(function(querySnapshot) {
				temp = querySnapshot.docs
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
	},
	mounted(){
		setTimeout(() => {
			this.tempArr=temp
		},1000)
	}
}
</script>

<style scoped>
	.news{
		width: 100%;
		display: inline-block;
	}
	.news .n{
		width: 100%;
		background: #F6F1FF;
		display: inline-block;
		overflow: hidden;
		border-radius: 20px;
		margin-top: 10px;
	}
	.news .n .img{
		width: 300px;
		float: left;
	}
	.news .n .img img{width: 100%; display: block}
	.news .n .in{
		float: left;
		width: calc(100% - 340px);
		margin-left: 20px;
		margin-top: 10px;
		padding-right: 20px;
	}
	.news .n .in .name{
		font-size: 20px;
		font-weight: 600;
	}
</style>