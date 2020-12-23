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
            		<b-button type="is-link" @click="pay()">Оплатити</b-button>
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
                if(this.phone == this.userphone && this.code =='12345'){


                    this.$router.push('/cabinet')
                    this.$notify.success({
							title: 'Найс!',
                            message: 'Оплата пройшла успішно'
				    }) 
                }
                else{
                    this.$notify.error({
                                title: 'Кхм...',
                                message: 'Дані введено невірно'
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>