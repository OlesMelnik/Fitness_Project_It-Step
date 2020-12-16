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
            		<b-button type="is-success" @click="register()">Зареєструватись!</b-button>
					<nuxt-link to="/login" style="margin-left: 20px; line-height: 35px">Вже є аккаунт, авторизуватись</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase/app'
	import '@firebase/auth'

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
							message: 'Авторизація успішна'
						})
						const user = firebase.auth().currentUser

                        this.$store.commit('auth', {
                            uid: user.uid,
						});
						
						//this.$store.state.user = user
						//this.$store.commit('user/logUser',user)


						this.$router.push('/cabinet')
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