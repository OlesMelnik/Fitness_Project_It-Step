<template>
	<div class="ms">
		<b-navbar>
			<template #brand>
				<b-navbar-item tag="router-link" :to="{ path: '/' }">
					<lottie :width="60" :options="lottieOptions" v-on:animCreated="handleAnimation" />
				
					<div class="logo">VueFitness</div>
				</b-navbar-item>
			</template>
			<template #start>
				<b-navbar-item href="#">
					Home
				</b-navbar-item>
				<b-navbar-item href="#">
					Documentation
				</b-navbar-item>
				<!-- <b-navbar-dropdown label="Info">
					<b-navbar-item href="#">
						About
					</b-navbar-item>
					<b-navbar-item href="#">
						Contact
					</b-navbar-item>
				</b-navbar-dropdown> -->
			</template>

			<template #end>
				<b-navbar-item tag="div">
					<div class="user">
						<div class="avatar">
							<img src="/assets/img/user.png" :alt="userInfo.login">
						</div>
						<div class="info">
							<div class="login">
								{{userInfo.login}}
							</div>
							<div class="balance">
								<b>Баланс: </b>{{userInfo.balance}}
								
            					<nuxt-link to="/cabinet/payment">
									<b-icon icon="plus-box"></b-icon>
								</nuxt-link>
							</div>
						</div>
					</div>
				</b-navbar-item>
			</template>
    	</b-navbar>

		

		<section class="main-content columns">
		<aside class="column is-2 section">
			<p class="menu-label is-hidden-touch">Menu</p>
			<ul class="menu-list">
				<li>
					<nuxt-link to="/cabinet" exact-active-class="is-active">
						<b-icon icon="home" /> Main
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/cabinet/gyms" exact-active-class="is-active">
						<b-icon icon="clock" /> Choose a gym
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/cabinet/calendar" exact-active-class="is-active">
						<b-icon icon="calendar" /> Calendar
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/cabinet/buy-page" exact-active-class="is-active">
						<b-icon icon="ticket" /> Buy season ticket
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/statistic" exact-active-class="is-active">
						<b-icon icon="account"/> Statistics
					</nuxt-link>
				</li>
				<br>
				<br>
				<li>
					<nuxt-link to="/settings" exact-active-class="is-active">
						<b-icon icon="apps" /> Settings
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/">
						<b-icon icon="exit-to-app" /> Log out
					</nuxt-link>
				</li>
			</ul>
		</aside>

		<div class="container column is-10">
			<nuxt />
		</div>
		</section>
	</div>
</template>

<script>
	import lottie from 'vue-lottie/src/lottie.vue'
	import * as animationData from "~/assets/animations/42343-jerry-the-speed-walking-turkey.json";

	export default {
		components: {
			lottie
		},
		data () {
			return {
				userInfo: {
					login: 'EnJay',
					balance: 100,
				},
				anim: null,
				lottieOptions: { animationData: animationData.default }
			}
		},
		methods: {
			handleAnimation: function (anim) {
				this.anim = anim;
			}
		}
	}
</script>
<style>
	.navbar-item img{
		max-height: 100px !important;
	}
</style>
<style scoped>
	.logo{
		font-size: 35px;
		font-weight: bold;
		color:rgb(152, 0, 182);
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}
	.user{
		height: 100%;
		display: flex;
	}
	.user .avatar{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: #21D4FD;
		background-image: linear-gradient(225deg, #21D4FD 0%, #B721FF 100%);
		transition: 0.2s;
		text-align: center;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
	}
	.user .avatar:hover{
		transition: 0.2s;
		transform: rotate(10deg);
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
	}
	.user .info{
		margin-left: 15px;
	}
	.user .info .login{
		font-size: 22px;
		font-weight: 600;
	}
	.user .info .balance .icon{
		cursor: pointer;
		vertical-align: middle;
	}
	.user .info .balance .icon:hover{
		color: green;
	}
	.user img{
		margin-top: 10px;
		width: 40px;
		height: 40px !important;
	}
</style>