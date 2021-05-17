<template>
<section class='section'>
    <div class="is-desktop">
        <div class="content columms is-centered">
			<div class="card column is-two-thirds">
					<b-field label="Card Number" message="">
						<b-input type="text" v-model="cardnumber" placeholder="xxxx-xxxx-xxxx-xxxx" maxlength="30" />
					</b-field>
                    <div class="block">
                        <b-radio v-model="radio"
                            name="name"
                            native-value="Дрищ">
                            Amateur
                        </b-radio>
                        <b-radio v-model="radio"
                            name="name"
                            native-value="Бро">
                            Bro
                        </b-radio>
                        <b-radio v-model="radio"
                            name="name"
                            native-value="Мощь">
                            Superman
                        </b-radio>
                    </div>
					<b-field label="Phone" message="">
						<b-input type="phone" v-model="phone" placeholder="phone" maxlength="30" />
					</b-field>
                    <b-field label="Confirm code" message="">
						<b-input type="text" v-model="code" placeholder="xxxxx" maxlength="5" />
					</b-field>
            		<b-button type="is-link" @click="pay()">Buy Season Ticket</b-button>
            </div>
        </div>
    </div>
</section> 
    
</template>

<script>
    import firebase from 'firebase/app'
    import '@firebase/firestore'
    import '@firebase/auth'

    const fireDb = firebase.firestore()
    var ref;
    var temp;

    export default {
        data () {
			return {
                radio:null,
                cardnumber:null,
                phone:null,
                code:null,
                userphone:null
			}
        },
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
        },
        methods:{
            pay(){
                this.userphone = temp.phone
                temp = 30
                if(this.radio == 'Мощь'){
                    temp = 90
                }
                if(this.phone == this.userphone && this.code =='12345'){
                    ref.update({
                        season_ticket: this.radio,
                        attendance: temp
                    })
                    console.log(this.radio)
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

<style scoped>

</style>