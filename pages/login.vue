<template>
	<div class="main">
		<div class="info">
			Логін для тесту: test@test.com<br>
			Пароль: 2281337
		</div>
		<div class="card">
			<div class="box">
				<div class="content">
					
					<b-icon
						icon="account"
						size="is-small">
					</b-icon>
					Авторизація
					<b-field label="Логін:" message="">
						<b-input type="text" value="mykola.bakun123@gmail.com" v-model="email" placeholder="email" maxlength="30" />
					</b-field>
					<b-field label="Пароль:" message="">
						<b-input type="password" value="qwerty" v-model="password" placeholder="password" maxlength="30" />
					</b-field>
            		<b-button type="is-success" @click="login()">Погнали!</b-button>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="box">
				<div class="content">
					
					<b-icon
						icon="account"
						size="is-small">
					</b-icon>
					Регіст
					<b-field label="Email:" message="">
						<b-input type="text" value="bakun123@gmail.com" v-model="new_email" placeholder="email" maxlength="30" />
					</b-field>
					<b-field label="Password:" message="">
						<b-input type="password" value="qwerty" v-model="new_password" placeholder="password" maxlength="30" />
					</b-field>
            		<b-button type="is-success" @click="register()">Погнали!</b-button>
				</div>
			</div>
		</div>
		<b-button type="is-success" @click="logout()">Вийти!</b-button>
	</div>
</template>

<script>
	import firebase from 'firebase/app'
	import '@firebase/auth'

	export default {
		layout: 'landing',
		name: 'Main',
		data () {
			// var user = firebase.auth().currentUser;
			// // if(user)
			// 			console.log(user);
			return {
				email: 'mykola.bakun123@gmail.com',
				password: 'qwerty',
				
				new_email: 'bakun123@gmail.com',
				new_password: 'qwerty',
			}
		},
		components: {
		},
		methods: {
			login(){
				if(this.email !== '' && this.password !== ''){
					firebase
        			.auth().signInWithEmailAndPassword(this.email, this.password)
        			.then(data => {
						this.$notify.success({
							title: 'Велкам!',
							message: 'Авторизація успішна'
						})
						
						this.$router.push('/getuser')
						})
        			.catch(err => {
						this.$notify.error({
							title: 'Ууупс',
							message: 'Логін/пароль неправильний'
						})
					});

				}else{
					this.$notify.error({
						title: 'Ууупс',
						message: 'Поля повинні бути не порожні'
					})
				}
			},
			logout() {
				firebase.auth().signOut()
				this.$notify.success({
					title: 'Ураа!',
					message: 'Ви вийшли'
				})
			},
			register() {
				if (this.new_email !== '' && this.new_password !== '') {
        			firebase
          			.auth().createUserWithEmailAndPassword(this.new_email, this.new_password)
					.then(data => {
						this.$notify.success({
							title: 'Велкам!',
							message: 'Регістрація успішна'
						})
						this.$router.push('/cabinet')})
        			.catch(err => {
						this.$notify.error({
							title: 'Ууупс',
							message: 'Щось пішло не так'
						})
					});
      			} else {
        			this.$notify.error({
						title: 'Ууупс',
						message: 'Поля повинні бути не порожні'
					})
      			}
    },
		}
	}
</script>

<style scoped>
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