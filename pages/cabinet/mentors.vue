<template>
	<section class="section">
			<h1 class="title">Mentor selector</h1>
            <hr class="has-background-link">
			
			<div class="block">
				<div class="columns is-mobile mentors">
					<Mentor v-for="(g, index) in mentors" v-bind:key="index" :g="g" :index="index" :selectedMentor="selectedMentor!=index" />
				</div>
			</div>

			<div class="block" v-if="selectedMentor>=0">
				
					<b-field class="column" label="Choose date :">
						<b-datetimepicker v-model="datetime"
							style="width: 200px"
							placeholder="Click to select...">
							<template slot="left">
								<button class="button is-primary"
									@click="datetime = new Date()">
									<b-icon icon="clock"></b-icon>
									<span>Now</span>
								</button>
							</template>
						</b-datetimepicker>
					</b-field>
					<b-button class="column" type="is-link" @click="buy()">choose</b-button>
				<br>
				<div>
					You have chosen a mentor 
				</div>
			</div>
	</section>
</template>

<script>
	import Mentor from '~/components/Mentor'
	import Card from '~/components/Card'

	export default {
		name: 'Mentors',
			data() {
				return {
					mentors: [
						{name: 'Deniel Orest', price: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IskYKEBtTKfUoiqIhiGk74T_mo2ApRPQew&usqp=CAU'},
						{name: 'Slave Dog', price: 300, image: 'data:image/jpeg;base64,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'},
						{name: 'Arture Henesi', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1I7pRPUo0vA610u2Nf_XBGY5g5DADzFA8g&usqp=CAU'},
					],
					selectedMentor: -1,
					datetime: new Date(),
					locale: 'ru-RU'
				}
			},

		components: {
			Card
		},
		methods: {
			buy(){
				var info = {
					'selectedMentor': this.selectedMentor,
					'date': this.datetime,
				}
				this.$cookies.set('info', info, {
					path: '/',
					maxAge: 60 * 60 * 24 * 7
				})
				this.$router.push('/cabinet/buy-page/paymentor')
			}
		}
	}
</script>
