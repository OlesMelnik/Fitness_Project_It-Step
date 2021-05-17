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
									<span>Get</span>
								</button>
							</template>
						</b-datetimepicker>
					</b-field>
					<b-button class="column" type="is-link" @click="buy()">Buy by coin</b-button>
				<br>
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
						{street: 'English', price: 10, image: 'https://img-c.udemycdn.com/course/240x135/834702_d56e_8.jpg?Expires=1621321692&Signature=VedP2l0Ev-mr1RKhFQ5y-x86R9KQg-emC~bZ21SHPKjGj3gYcLhTgG9U1TgEUZPbPoJK6PdL8eXswfyazze608zW5q2LZeQQgGiB5UOT9nDWfBEU5sM7ILBXlx3foRuWObzRLjAQ7RZiPeXaucEOOU7C2mdvqhpNT1cdo-ayKhueb~Qoyri2c8~otqDP8uHLmj245wFAhVu7lTcLj6L9-zu5JWwzPtZ-udDEt-1CNWZ5vLiRWF8x1UmQF0VS~V6ODbSENjQW2ei-ejpswOQd4H8gyElGA0U7AluvASvLIn1WKojGTSKH2P3tmr9OlkwX-c~MbEU5WcSmFKX8Ac2INg__&Key-Pair-Id=APKAITJV77WS5ZT7262A'},
						{street: 'C++', price: 50, image: 'https://img-a.udemycdn.com/course/240x135/1576854_9aeb_2.jpg?ygEa7HNGQAXfRvh3f7tJ_SJuBtCOyIYuQ5ONsprvZsN-tfwZu1Mcw9tD7SjKueOaqINyh2-Xz3rvYIy9jmphFYyzBG-AcsBQZ-648PIMNk_NBNl0GCf0szD6Q800eA'},
						{street: 'DevOps', price: 110, image: 'https://img-b.udemycdn.com/course/240x135/977360_8585_4.jpg?secure=HLW0G7i94fVmRpCVJqQx_Q%3D%3D%2C1621321662'},
						{street: 'AWS', price: 90, image: 'https://img-c.udemycdn.com/course/240x135/1921420_384a_12.jpg?Expires=1621322101&Signature=YPmn0WOkXi-rrMvmGRKcup5B5qknnIoRTWLtfAvWkrhOS6Q9qWN2Bh51~hyauSha2OcZLNu4n~KSQ2OSMfLJhmhtVeDCkFvAa7w9eioQnSbqSjdD3-QbHJysDE42l0WAXBkgwTXLU5YVCvKVTHvTCPVVUtzkD1fsPu6x58ewHUBUFeKKk1D3QhRS2mMbqOjTgErWb4Kf8bF3IKklZYtNizi33L01xLU2I66wixSWH8SCjn~TRcrxDkSkJ-fmD1~PADT9DeZyzyCR3S5p9fFLvKCZQDMpjK8idhxU2LROY5a9PrIJLs4xgcyqjRgiqhQryb2avL4e2EZgZcx1IP-UnQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A'},
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
				this.$router.push('/cabinet/buy-page/paycourses')
			}
		}
	}
</script>
