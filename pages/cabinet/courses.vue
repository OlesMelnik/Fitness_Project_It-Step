<template>
	<section class="section">
			<h1 class="title">Course selector</h1>
            <hr class="has-background-link">
			
			<div class="block">
				<div class="columns is-mobile courses">
					<Course v-for="(g, index) in courses" v-bind:key="index" :g="g" :index="index" :selectedCourse="selectedCourse!=index" />
				</div>
			</div>

			<div class="block" v-if="selectedCourse>=0">
				
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
							<template slot="right">
								<button class="button is-danger"
									@click="datetime = null">
									<b-icon icon="close"></b-icon>
									<span>Clear</span>
								</button>
							</template>
						</b-datetimepicker>
					</b-field>
					<b-button class="column" type="is-link" @click="buy()">Buy</b-button>
				<br>
				<div>
					You have chosen a course on the street {{courses[selectedCourse].street}} by {{courses[selectedCourse].price}} UAH.
				</div>
			</div>
	</section>
</template>

<script>
	import Course from '~/components/Course'
	import Card from '~/components/Card'

	export default {
		name: 'Courses',
			data() {
				return {
					courses: [
						{street: 'English', price: 110, image: ''},
						{street: 'C++', price: 150, image: ''},
						{street: 'DevOps', price: 100, image: ''},
					],
					selectedCourse: -1,
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
					'selectedCourse': this.selectedCourse,
					'date': this.datetime,
				}
				this.$cookies.set('info', info, {
					path: '/',
					maxAge: 60 * 60 * 24 * 7
				})
				this.$router.push('/cabinet/buy-page/paygourse')
			}
		}
	}
</script>
