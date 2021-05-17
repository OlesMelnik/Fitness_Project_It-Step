<template>
    <section class='section'>
    <div class="is-desktop">
        <div class="content columms is-centered">
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
    import firebase from 'firebase/app'
    import '@firebase/firestore'
    import '@firebase/auth'

    const fireDb = firebase.firestore()
    var ref;
    var temp;

	const fireDb2 = firebase.firestore()
    var ref2;


export default {
	mounted(){
            ref = fireDb.collection('users').doc(this.$store.state.user.user.uid)
            ref.get().then(function(doc) {
            if (doc.exists) {
                temp = Object.assign({}, doc.data());

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
			});
			ref2 = fireDb2.collection('lessons')
    },
	data() {
		return {
			info: null,
			userphone:null,
		}
	},
    created(){
		this.info = this.$cookies.get('info')
	},
	methods:{
		pay(){
			this.userphone = temp.phone
			if(this.phone == this.userphone && this.code =='12345'){
					ref2.add({
						color:"#A854A5",
						end: this.info["date"],
						start: this.info["date"],
						id_users: [this.$store.state.user.user.uid],
						season_ticket:[],
						title: 'Personal training '
					})

                    this.$router.push('/cabinet')
                    this.$notify.success({
							title: 'Nice!',
                            message: 'Payment was successful'
				    }) 
                }
                else{
                    this.$notify.error({
                                title: 'Hmm...',
                                message: 'Data entered incorrectly'
                    })
                }
		}
	}
}
</script>