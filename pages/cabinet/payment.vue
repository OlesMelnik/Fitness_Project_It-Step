<template>
	<section class="section">
			<h1 class="title">Balance</h1>
            <hr class="has-background-link">
			
	</section>
</template>

<script>
	import Gym from '~/components/Gym'
	import Card from '~/components/Card'

	export default {
		name: 'Gyms',
			data() {
				return {
					
				}
			},

		components: {
			Card
		},
		methods: {
			buy(){
				var info = {
					'selectedGym': this.selectedGym,
					'date': this.datetime,
				}
				this.$cookies.set('info', info, {
					path: '/',
					maxAge: 60 * 60 * 24 * 7
				})
				this.$router.push('/cabinet/buy-page/paygym')
			}
		}
	}
</script>
