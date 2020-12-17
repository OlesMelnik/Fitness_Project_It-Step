<template>
	<div class="main">
		Ну короче, тут якийсь лендінг, або подібна херня 👮‍♂️<br>
		<nuxt-link to="/login">Авторизація</nuxt-link><br>
		<nuxt-link to="/register">Реєстрація</nuxt-link>
	</div>
</template>

<script>

	export default {
		layout: 'landing',
		name: 'Main',

		components: {
		}
	}
</script>

<style scoped>
	.main{
		margin-top: 50px;
		text-align: center;
		font-size: 20px;
	}
</style>