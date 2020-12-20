<template>
	<div class="main">
		<div class="card">
			<div class="box">
				<div class="content">
					
					<b-icon
						icon="account"
						size="is-small">
					</b-icon>
					Реєстрація
					<b-field label="Логін:" message="">
						<b-input type="text" v-model="email" placeholder="Введіть ваш e-mail" maxlength="30" />
					</b-field>
					<b-field label="Пароль:" message="">
						<b-input type="password" v-model="password" placeholder="Введіть ваш пароль" maxlength="30" />
					</b-field>
            		<b-button type="is-link" @click="register()">Зареєструватись!</b-button>
					<nuxt-link to="/login">
						<b-button type="is-link is-light">Вже є аккаунт, авторизуватись</b-button>
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
				email: 'svyat@gmail.com',
				password: 'qwertyuiop',
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
				if(this.email !== '' && this.password !== ''){
					firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
					//Поправте пліз назву методу
        			.then(data => {
						this.$notify.success({
							title: 'Велкам!',
							message: 'Аккаунт успішно створений'
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
							imgSrc:'',
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
							level:'Новачок',
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
							title: 'Ууупс',
							message: 'Введений e-mail вже використовується'
						})
					});
				}else{
					this.$notify.error({
						title: 'Ууупс',
						message: 'Поля не повинні бути порожні'
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