<template>
	<section class="section">
			<h1 class="title">Gym selector</h1>
            <hr class="has-background-link">
			
			<div class="block">
				<div class="columns is-mobile gyms">
					<Gym v-for="(g, index) in gyms" v-bind:key="index" :g="g" :index="index" :selectedGym="selectedGym!=index" />
				</div>
			</div>

			<div class="block" v-if="selectedGym>=0">
				
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
					<nuxt-link to="/cabinet/buy-page/paygym">
						<b-button class="column" type="is-link">Buy</b-button>
					</nuxt-link>
				<br>
				<div>
					You have chosen a gym on the street {{gyms[selectedGym].street}} by {{gyms[selectedGym].price}} UAH.
				</div>
			</div>
	</section>
</template>

<script>
	import Gym from '~/components/Gym'
	import Card from '~/components/Card'

	export default {
		name: 'Gyms',
			data() {
				return {
					gyms: [
						{street: 'Grove -3', price: 110, image: 'https://i.pinimg.com/originals/44/99/95/449995ef1ce37086e6de72835c42efcb.jpg'},
						{street: 'Slave 69', price: 150, image: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/samara/facilities/fitness-spa/gym/181126-1-2000-fac-LTSM.jpg.thumb.768.768.jpg'},
						{street: 'Dungeonmaster 47', price: 100, image: 'https://s0.rbk.ru/v6_top_pics/media/img/2/82/755586211300822.png'},
					],
					selectedGym: -1,
					datetime: new Date(),
					locale: 'ru-RU'
				}
			},

		components: {
			Card
		}
	}
</script>
