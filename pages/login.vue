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
						<b-input type="text" value="svyat@gmai.com" v-model="email" placeholder="email" maxlength="30" />
					</b-field>
					<b-field label="Пароль:" message="">
						<b-input type="password" value="qwertyuiop" v-model="password" placeholder="password" maxlength="30" />
					</b-field>
            		<b-button type="is-success" @click="login()">Погнали!</b-button>
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
				email: 'mykola.bakun123@gmai.com',
				password: 'qwerty',
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
						const user = firebase.auth().currentUser
						
						this.$store.state.user = user
						//this.$store.commit('user/logUser',user)
						this.$router.push('/cabinet')})
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
			}
	// 		logout() {
    // 			firebase.auth().signOut()
	// 		  },
	// 		  register() {
    //   if (this.password === this.registrationPassword) {
    //     firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(this.email, this.password)
    //   } else {
    //     // display error message
    //   }
    // },
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