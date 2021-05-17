<template>
	<div v-bind:class="{mentor:true, selectedMentor:!selectedMentor}" >
		<img :src="g.image" :alt="'Mentor #'+index">
		Mentor #{{index+1}}<br>
		Name: {{g.name}}<br>
		Price: {{g.price}}/3Hour<br>
		<b-button v-bind:type="{'is-link':true, 'is-light':selectedMentor}" @click="selectMentor(index)">
			{{selectedMentor?'Choose':'Mentor selected'}}
		</b-button>
	</div>
</template>

<script>
export default {
	props: {
		g: Object,
		index: Number,
		selectedMentor: Boolean
	},
	methods: {
		selectMentor(index){
			this.$parent.selectedMentor = index
		}
	}
}
</script>

<style scoped>
	.mentor{
		width: 300px;
		overflow: hidden;
		margin: 10px;
		text-align: center;
		border-radius: 22px;
		padding-bottom: 10px;
	}
	.selectedMentor{
		border: 1px solid #8c67ef;
	}
	.mentor img{
		width: 100%;
		height: 180px;
		border-radius: 20px;
	}
</style>