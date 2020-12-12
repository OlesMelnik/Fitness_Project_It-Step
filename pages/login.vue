<template>
	<div class="main">
		<div class="info">
			Логін для тесту: user<br>
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
						<b-input type="text" value="john22" v-model="username" maxlength="30" />
					</b-field>
					<b-field label="Пароль:" message="">
						<b-input type="password" value="******" v-model="password" maxlength="30" />
					</b-field>
            		<b-button type="is-success" @click="login()">Погнали!</b-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		layout: 'landing',
		name: 'Main',
		data () {
			return {
				username: '',
				password: '',
			}
		},
		components: {
		},
		methods: {
			login(){
				if(this.username == 'user' && this.password == '2281337'){
					this.$notify.success({
						title: 'Велкам!',
						message: 'Авторизація успішна'
					})
					this.$router.push('/cabinet')
				}else{
					this.$notify.error({
						title: 'Ууупс',
						message: 'Логін/пароль неправильний'
					})
				}
			}
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