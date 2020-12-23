<template>
    <section class='section'>
    <div class="is-desktop">
        <div class="content columms is-centered">
			{{info}}
			<div class="card column is-two-thirds">
					<b-field label="Card Number" message="">
						<b-input type="text" v-model="cardnumber" placeholder="xxxx-xxxx-xxxx-xxxx" maxlength="30" />
					</b-field>
					<b-field label="Phone" message="">
						<b-input type="phone" v-model="phone" placeholder="phone" maxlength="30" />
					</b-field>
                    <b-field label="Confirm code" message="">
						<b-input type="text" v-model="code" placeholder="xxxxx" maxlength="5" />
					</b-field>
            		<b-button type="is-link" @click="pay()">Buy</b-button>
            </div>
        </div>
    </div>
</section> 
</template>


<style scoped>

</style>

<script>
export default {
	data() {
		return {
			info: null
		}
	},
    created(){
		this.info = this.$cookies.get('info')
	}
}
</script>