<template>
	<div>
		<nav class="navbar header has-shadow is-primary" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<div class="logo">VueFitness</div>
			</a>

			<div class="navbar-burger">
			<span />
			<span />
			<span />
			</div>
		</div>
		</nav>

		<section class="main-content columns">
		<aside class="column is-2 section">
			<p class="menu-label is-hidden-touch">Меню</p>
			<ul class="menu-list">
				<li>
					<nuxt-link to="/cabinet" exact-active-class="is-active">
						<b-icon icon="home" /> Головна
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/cabinet/gyms" exact-active-class="is-active">
						<b-icon icon="account" /> Вибрати зал
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/settings" exact-active-class="is-active">
						<b-icon icon="apps" /> Налаштування
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/">
						<b-icon icon="exit-to-app" /> Вихід
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
export default {
	data () {
		return {

		}
  	}
}
</script>

<style scoped>
	.logo{
		font-size: 35px;
		font-weight: bold;
		color:white;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}
</style>