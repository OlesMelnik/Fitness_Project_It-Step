<template>
	<div class="main">
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
	import '@firebase/firestore'
	import '@firebase/auth'
	export default {
		layout: 'landing',
		name: 'Main',
		data () {
			var user = firebase.auth().currentUser;
			if(user)
				console.log(user);
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
			logout() {
				firebase.auth().signOut()
				this.$notify.success({
					title: 'Ураа!',
					message: 'Ви вийшли'
				})
			},
			register() {
				if (this.new_email !== '' && this.new_password !== '') {
					changeProfileSettings()
					// firebase
          			// .auth().createUserWithEmailAndPassword(this.new_email, this.new_password)
					// .then(data => {
					// 	this.$notify.success({
					// 		title: 'Велкам!',
					// 		message: 'Регістрація успішна'
					// 	})
					// 	changeProfileSettings()
					// 	this.$router.push('/cabinet')})
        			// .catch(err => {
					// 	this.$notify.error({
					// 		title: 'Ууупс',
					// 		message: 'Щось пішло не так'
					// 	})
					// });
      			} else {
        			this.$notify.error({
						title: 'Ууупс',
						message: 'Поля повинні бути не порожні'
					})
      			}
    		},changeProfileSettings(){
				firebase.firestore().collection('users').doc('12FwiwLCFgjvQPMyU3oN8C2').add({
        		    firstname: 'firstname',
        		    lastname: 'lastname',
        		    phone: 'phone',
        		    imgSrc: 'imgSrc'
				})
				// console.log("")
        		this.$notify.success({
        		  	title: 'Success!',
        		    message: 'Profile settings changed'
    			})
        	}
		},
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