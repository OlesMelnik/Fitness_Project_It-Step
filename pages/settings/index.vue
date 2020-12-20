<template>
	<section class="section">
		<div class="is-mobile">
            <div>
                <h1 class="title">Notification Settings</h1>
                <hr class="has-background-link">
                <h2 class="subtitle">Email Notifications</h2>
                <hr>
                <div class="field">
                    <b-switch v-model="notEN" @input="notification()">
                        News and Tips Notifications
                    </b-switch>
                </div>
                <div class="field">
                    <b-switch v-model="notET" @input="notification()">
                        Training Notifications
                    </b-switch>
                </div>

                <br>
                <h2 class="subtitle">Telegram Notifications</h2>
                <hr>
                <div class="field">
                    <b-switch v-model="notTN" @input="notification()">
                        News and Tips Notifications
                    </b-switch>
                </div>
                <div class="field">
                    <b-switch v-model="notTT" @input="notification()">
                        Training Notifications
                    </b-switch>
                </div>

                <br>
                <h1 class="title">Profile Settings</h1>
                <hr class="has-background-link">
            </div>
            <div class="columns is-multiline is-mobile">
                <div class="column is-one-quarter">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" ref="myImage">
                            </figure>
                        </div>
                        <div class="card-content">
                            <h2 class="subtitle">Profile photo</h2>
                            <hr>
                            <b-field label="PhotoURL" message="">
                                <b-input v-model="imgSrc" type="text" />
                            </b-field>
                        </div>
                    </div>
                </div>

                <div class="column is-one-quarter">
                    <b-field label="Phone" message="">
                        <b-input v-model="phone" type="phone" maxlength="30" />
                    </b-field>
                    <b-field label="First Name" message="">
                        <b-input v-model="firstname" type="text" maxlength="30" />
                    </b-field>
                    <b-field label="Last Name" message="">
                        <b-input v-model="lastname" type="text" maxlength="30" />
                    </b-field>
                    <b-button type="is-link is-light" @click="changeProfileSettings()">Save profile settings</b-button>
                </div>


                <div class="column is-one-quarter">
                </div>

                <div class="column is-one-quarter">
                    <b-field label="New password" message="">
                       <b-input id="nPas" type="password" maxlength="30" />
                    </b-field>
                    <b-field label="Repeat password" message="">
                        <b-input id="rPas" type="password" maxlength="30" />
                    </b-field>
                    <b-button type="is-link is-light" @click="changePassword()">Change password</b-button>
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
        name: 'Settings',
        data () {
			return {
                user: null,
                notTT:false,
                notTN:false,
                notET:false,
                notEN:false,
                firstname: null,
                lastname: null,
                phone: null,
                imgSrc: null
			}
        },
        beforeCreate(){
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
        mounted(){
                setTimeout(() => {
                    this.firstname = temp.firstname; 
                    this.lastname = temp.lastname;
                    this.phone = temp.phone;
                    this.imgSrc = temp.imgSrc;
                    this.$refs.myImage.src = temp.imgSrc;
                    this.notEN = temp.notificationEmailNews;
                    this.notTN = temp.notificationTelegramNews;
                    this.notET = temp.notificationEmailTraining;
                    this.notTT = temp.notificationTelegramTraining;
                },700);
        },
        methods:{
            notification(){
                ref.update({
                    notificationEmailNews: this.notEN,
                    notificationTelegramNews: this.notTN,
                    notificationEmailTraining: this.notET,
                    notificationTelegramTraining: this.notTT
                })
            },
            changeProfileSettings(){
                this.$refs.myImage.src = document.getElementById('imgSrc').value
                ref.update({
                    firstname: document.getElementById('firstname').value,
                    lastname: document.getElementById('lastname').value,
                    phone: document.getElementById('phone').value,
                    imgSrc: document.getElementById('imgSrc').value,
                })
                this.$notify.success({
							title: 'Success!',
                            message: 'Profile settings changed'
				})
            }
            ,
            changePassword(){
                if(document.getElementById('nPas').value==document.getElementById('rPas').value & document.getElementById('nPas').value!='' & document.getElementById('rPas').value!=''){
                    this.$store.state.user.user.updatePassword(document.getElementById('rPas').value)

                    this.$notify.success({
                                title: 'Success!',
                                message: 'Password changed'
                    })
                }
                else{
                    this.$notify.error({
                                title: 'Error!',
                                message: 'Password not changed'
                    })
                }
            }
        }
    }

</script>