<template>
	<section class="section">
			<h1 class="title">Balance</h1>
            <hr class="has-background-link">
			
			<div class="balance">
				<div class="sum">
					{{userInfo.balance}}
				</div>
				<div class="login">
					{{userInfo.login}}
				</div>
			</div>
			
			<h1 class="title secondTitle">Payment</h1>

			<div class="payments">
				<div v-bind:class="{payment:true, 'paymentSelected': selected(index)}" 
					v-for="(payment, index) in payments" :key="payment.id"
					v-on:click="setPayment(index, payment)">
					<img :src="'/assets/img/payments/'+index+'.svg'">
				</div>
				<div class="input inputNumber" v-if="phoneVisible">
					Write your mobile phone:
					<input v-model="phone" placeholder="starts with +380...">
				</div>
			</div>
			<div class="buttons">
				<a class="button is-success" @click="handlePay" target="_blank">
					Pay
				</a>
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
					userInfo: {
						login: 'EnJay',
						balance: 100,
					},
					API: 'http://api.cubix.world/',
					payments: null,
					currentPayMethod: null,
					phoneVisible: false,
					phone: '',
					bonus: 0,
                	amount: 100,
				}
			},

		components: {
			Card
		},
        created() {
            if (!process.browser) {
                return
            }
			this.loadPayments()
		},
		methods: {
			buy(){
				var info = {
					'selectedGym': this.selectedGym,
					'date': this.datetime,
				}
				this.$cookies.set('info', info, {
					path: '/',
					maxAge: 60 * 60 * 24 * 7
				})
				this.$router.push('/cabinet/buy-page/paygym')
			},
			loadPayments () {
				this.$axios.get(this.API+"ingame.loadPayment")
				.then(res => {
					if(res.data.type=='success'){
                        this.payments = res.data.payments;
                        console.log(this.payments)
					}
				})
			},
			setPayment(method, payment) {
                this.currentPayMethod = method;
                if(payment.phone != null && payment.phone){
                    this.phoneVisible = true;
                }else {
                    this.phoneVisible = false;
                }
            },
			handlePay(){
				if(this.phone!=''){
					var phone = this.phone.replace('+', '')
                }
				this.$axios.get(this.API+"account.pay")
				.then(res => {
                    console.log(res.data)
                        this.$notify.success({
                            message: 'Redirect to payment'
                        })
                        location.href = "https://unitpay.ru/pay/88251-3219e/card?account=d56ejide5ij&sum=100&currency=RUB&signature=29498cc2fcf657fcb8a86ed3bbc7d756b04304f84cf125b938f1846c15fc5b16&desc=Пополнение%20счета%20-%20d56ejide5ij&hideOtherMethods=true&locale=ru&paymentId=2020163867&hideMenu=true";
					if(res.data.type=='LiqPay'){
                        this.$notify.success({
                            message: 'Redirect to payment'
                        })
                        var f = document.createElement('form');
                        f.action=res.data.api;
                        f.method='POST';
                        f.target='_blank';

                        var i=document.createElement('input');
                        i.type='hidden';
                        i.name='data';
                        i.value=res.data.data;
                        f.appendChild(i);

                        var i2=document.createElement('input');
                        i2.type='hidden';
                        i2.name='signature';
                        i2.value=res.data.signature;
                        f.appendChild(i2);

                        document.body.appendChild(f);
                        f.submit();
					}else{
                        console.log(res.data)
                        this.$notify.error({
                            title: 'Error: ',
                            message: res.data.msg
                        })
					}
                })
			},
            selected(method) {
                return this.currentPayMethod == method;
            },
		}
	}
</script>

<style scoped>
	.balance{
		width: 40%;
		height: 200px;
		margin: 0 30%;
		text-align: center;
		
		border: 10px solid;
		border-image-slice: 1;
		border-width: 5px;
		border-image-source: linear-gradient(to right, #d5783a, #ecd032);
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
		transition: 0.2s;
	}
	.balance:hover{
		transition: 0.2s;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
	}
	.balance .sum{
		font-size: 70px;
		font-weight: 1000;
		margin-top: 30px;
		background: -webkit-linear-gradient(90deg, #d5783a, #ecd032);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.balance .login{
		margin-top: -20px;
		font-size: 20px;
		font-weight: 200;
	}
	.secondTitle{
		text-align: center;
		margin-top: 50px;
	}

	.payments{
		width: 100%;
		padding: 10px 0;
		display: inline-block;
	}
    .payment{
        width: 200px;
        height: 100px;
        border-radius: 10px;
        border: 3px solid rgb(211, 211, 211);
        text-align: center;
        float: left;
        margin-left: 23px;
        margin-top: 15px;
        cursor: pointer;
    }
    .payment img{
        height: 80%;
        width: 80%;
        margin-top: 5%;
    }
    .paymentSelected{
        border: 3px solid rgb(179, 179, 179);
        background-color: #FAACA8;
        background-image: linear-gradient(64deg, rgb(253, 201, 198) 0%, rgb(233, 229, 248) 100%);
    }
	
    .inputNumber{
        width: 300px;
        margin-left: calc(100% - (300px / 2) - 50%);
        margin-top: 20px;
        display: inline-block;
        text-align: center;
    }
    .inputNumber input{
        width: calc(100% - 20px);
        background-color: #74EBD5;
        font-size: 23px;
        font-weight: 200;
        color: rgb(71, 71, 71);
        padding: 0 10px 0 10px;
        background-image: linear-gradient(180deg, #74EBD5 0%, #9FACE6 100%);
    }
    .inputNumber:hover input{
        transition: 0.2s;
        border-bottom: 3px solid rgb(130, 147, 223);
        box-shadow: 0px 2px 5px 0px rgba(84, 48, 150, 0.4);
    }
    .inputNumber input:focus{
        transition: 0.2s;
        color: rgb(43, 43, 43);
        border-top: 3px solid rgb(109, 247, 221);
        border-bottom: 3px solid rgb(110, 130, 216);
        box-shadow: 0px 2px 5px 0px rgba(84, 48, 150, 0.4);
    }
    .inputNumber .icon{
        font-size: 45px;
        margin-top: 14px;
    }

	.buttons{
		width: 100%;
		padding: 20px 0;
		text-align: center;
	}
	.buttons a{ 
		font-size: 40px;
		margin-left: 45%;
	}
</style>

