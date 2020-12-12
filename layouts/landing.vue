<template>
	<div>
		<nuxt />
		<!-- <nuxt /> - головна тємка, яка виводить весь контент сторінки -->
	</div>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{
					title: 'Home',
					icon: 'home',
					to: { name: 'index' }
				},
				{
					title: 'Inspire',
					icon: 'lightbulb',
					to: { name: 'inspire' }
				}
			]
		}
  	}
}
</script>
