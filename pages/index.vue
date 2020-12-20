<template>
	<div class="ms">
		<section class="section columns is-centered">
			<div class="column main card is-two-thirds">
				<div class="card logo has-background-link">VueFitness</div>
				<br>
				<br>
				Ну короче, тут якийсь лендінг, або подібна херня 👮‍♂️
				<br>
				<br>
				<nuxt-link to="/login">
					<b-button type="is-link">Авторизація</b-button>
				</nuxt-link>
				<nuxt-link to="/register">
					<b-button type="is-link">Реєстрація</b-button>
				</nuxt-link>
				<br>
				<br>
				<br>
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
			</div>
		</section>
	</div>
</template>

<script>
	import firebase from 'firebase/app'
	import '@firebase/firestore'
	const fireDb = firebase.firestore()
		
	var ref;
	var temp;
	export default {
		layout: 'landing',
		name: 'Main',

		components: {
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
			},700)
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
	.ms {
		background-image: url(~assets/bg_login.jpg);
		background-size: cover;
		width: 100%;
		height: 100%;
		padding-top: 70px;
	}
	.main{
		padding: 50px;
		margin-top: 50px;
		text-align: center;
		font-size: 20px;
	}
	.logo{
		font-size: 100px;
		font-weight: bold;
		color:white;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}
</style>