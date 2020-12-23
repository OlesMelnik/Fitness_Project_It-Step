<template>
	<div class="main">
		<div class="card">
			<div class="box">
				<div class="content">
					<b-icon
						icon="account"
						size="is-small">
					</b-icon>
					Registration
					<b-field label="E-mail" message="">
						<b-input type="text" v-model="email" placeholder="Enter your e-mail" maxlength="30" />
					</b-field>
					<b-field label="Password" message="">
						<b-input type="password" v-model="password" placeholder="Enter your password" maxlength="30" />
					</b-field>
					<b-field label="Confirm password" message="">
						<b-input type="password" v-model="rpassword" placeholder="Confirm your password" maxlength="30" />
					</b-field>
            		<b-button type="is-link" @click="register()">Register!</b-button>
					<nuxt-link to="/login">
						<b-button type="is-link is-light">You already have an account to log in</b-button>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase/app'
	import '@firebase/auth'
	import '@firebase/firestore'

	export default {
		layout: 'landing',
		name: 'Main',
		data () {
			return {
				email: '',
				password: '',
				rpassword: '',
			}
		},
		components: {
		},
        computed: {
			auth () {
				return this.$store.state.auth
			},
        },
		methods: {
			register(){
				if(this.email !== '' && this.password !== '' && this.password == this.rpassword){
					firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
					//Поправте пліз назву методу
        			.then(data => {
						this.$notify.success({
							title: 'Good!',
							message: 'Account successfully created'
						})
						const user = firebase.auth().currentUser
						const fireDb = firebase.firestore()

                        this.$store.commit('auth', {
                            uid: user.uid,
						});
						fireDb.collection('users').doc(user.uid).set({
							age:0,
							attendance:0,
							firstname:'',
							imgSrc:'https://bulma.io/images/placeholders/1280x960.png',
							lastname:'',
							phone:'',
							season_ticket:'',
							notificationEmailNews: true,
							notificationEmailTraining: true,
							notificationTelegramNews: true,
							notificationTelegramTraining: true
						})
						fireDb.collection('statistic').doc(user.uid).set({
							absence: 0,
							attendance:0,
							cal:0,
							calories:[],
							date:[],
							heartBit:[],
							level:'Noob',
							presence:0,
							progress:0,
							workout:[],
							workout_info:[]
						})
						
						//this.$store.state.user = user
						//this.$store.commit('user/logUser',user)

						this.$router.push('/login')
					})
        			.catch(err => {
						this.$notify.error({
							title: 'Ooops!',
							message: 'The entered e-mail is already in use'
						})
					});
				}else{
					this.$notify.error({
						title: 'Ooops!',
						message: 'Check the information entered'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.main{
		background-image: url(~assets/bg_login.jpg);
		background-size: cover;
		width: 100%;
		height: 100vh;
		padding-top: 70px;
	}
	.card{
		margin: 50px auto;
		width: 500px
	}
	.main .info{
		text-align: center;
		font-size: 15px;
		margin: 50px auto;
	}
</style>