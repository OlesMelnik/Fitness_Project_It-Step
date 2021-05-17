<template>
	<div v-bind:class="{course:true, selectedCourse:!selectedCourse}" >
		<img :src="g.image" :alt="'Course #'+index">
		Course #{{index+1}}<br>
		Street: {{g.street}}<br>
		Price: {{g.price}}/3Hour<br>
		<b-button v-bind:type="{'is-link':true, 'is-light':selectedCourse}" @click="selectCourse(index)">
			{{selectedCourse?'Choose':'Course selected'}}
		</b-button>
	</div>
</template>

<script>
export default {
	props: {
		g: Object,
		index: Number,
		selectedCourse: Boolean
	},
	methods: {
		selectCourse(index){
			this.$parent.selectedCourse = index
		}
	}
}
</script>

<style scoped>
	.course{
		width: 300px;
		overflow: hidden;
		margin: 10px;
		text-align: center;
		border-radius: 22px;
		padding-bottom: 10px;
	}
	.selectedCourse{
		border: 1px solid #8c67ef;
	}
	.course img{
		width: 100%;
		height: 180px;
		border-radius: 20px;
	}
</style>