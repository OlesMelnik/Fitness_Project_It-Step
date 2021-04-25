<template>
	<div class="main">
		<div class="card">
			<div class="box">
				<div class="content">
					
					<b-icon
						icon="account"
						size="is-small">
					</b-icon>
					Аuthorization page
					<b-field label="E-mail" message="">

						<b-input type="text" value="svyat@gmail.com" v-model="email" placeholder="email" maxlength="30" />
					</b-field>
					<b-field label="Password " message="">
						<b-input type="password" value="qwertyuiop" v-model="password" placeholder="password" maxlength="30" />

					</b-field>
            		<b-button type="is-link" @click="login()">Log in</b-button>
					<nuxt-link to="/register">
						<b-button type="is-link is-light">Registration</b-button>
					</nuxt-link>
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
			login(){

				if(this.email !== '' && this.password !== ''){

					firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        			.then(data => {
						    this.$notify.success({
						    	title: 'Welcome!',
						    	message: 'Authorization successful'
						    })
						    const user = firebase.auth().currentUser
						    this.$store.state.user.user = user
						    this.$store.commit('auth', {
                  uid: user.uid,
						    });
						    this.$router.push('/cabinet')
					    })
        			.catch(err => {
						    this.$notify.error({
						    	title: 'Ooops!',
						    	message: 'Login/Password incorrect'
						    })
					});

					

				}else{
					this.$notify.error({
						title: 'Ooops!',
						message: 'Fields must not be blank'
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