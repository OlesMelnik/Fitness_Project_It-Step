<template>
<section class='section'>
    <h1 class="title">Season ticket</h1>
    <hr class="has-background-link">
    <div>
        <b-table style="font-weight:700;font-size: 18px" :data="data" :columns="columns"></b-table>
    </div>
    <div class="columns is-desktop">
        <div class="column">
            <br>
            <br>
            <nuxt-link to="/cabinet/buy-page/pay">
                <b-button type="is-link is-light" @click="adhs()">Buy Season Ticket</b-button>
            </nuxt-link>
        </div>
    </div>
</section> 
    
</template>


<script>

    export default {
        data() {
            return {
                data: [
                    { 'Name': 'Amateur','special-train':3,'t-shirt': '❌','wall-ty':"❌",'ownlocker':'❌','vip-place':'❌','price': '1000', 'date': '1 month' },
                    { 'Name': 'Bro','special-train':5,'t-shirt': '✔️','wall-ty':"✔️",'ownlocker':'❌','vip-place':'❌','price': '1500', 'date': '1 month' },
                    { 'Name': 'Superman','special-train':10,'t-shirt':'✔️','wall-ty':"✔️" ,'ownlocker':'✔️','vip-place':'✔️','price': '3000', 'date': '3 months' }
                   
                ],
                columns: [
                    {
                        field: 'Name',
                        label: 'Season ticket',
                    },
                    {
                        field: 'special-train',
                        label: 'Special training',
                    },
                    {
                        field: 'ownlocker',
                        label: 'Individual locker',
                    },
                    {
                        field: 'vip-place',
                        label: 'Access to a closed VIP group',
                    },
                    {
                        field: 'wall-ty',
                        label: 'Placing on the Thanksgiving wall',
                    },
                    {
                        field: 't-shirt',
                        label: 'T-shirt "Everest"',
                    },
                    {
                        field: 'date',
                        label: 'time',
                        centered: true
                    },
                    {
                        field: 'price',
                        label: 'Price',
                    },
                    
                ]
            }
        }
    }
</script>

<style scoped>
</style>
