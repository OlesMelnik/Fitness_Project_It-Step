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
                <b-button type="is-link is-light" >Купити</b-button>
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
                    { 'Name': 'Дрищ','special-train':3,'t-shirt': '❌','wall-ty':"❌",'ownlocker':'❌','vip-place':'❌','price': '600', 'date': '1 місяць' },
                    { 'Name': 'Бро','special-train':5,'t-shirt': '✔️','wall-ty':"✔️",'ownlocker':'❌','vip-place':'❌','price': '1000', 'date': '1 місяць' },
                    { 'Name': 'Мощь','special-train':10,'t-shirt':'✔️','wall-ty':"✔️" ,'ownlocker':'✔️','vip-place':'✔️','price': '3000', 'date': '6 місяців' }
                   
                ],
                columns: [
                    {
                        field: 'Name',
                        label: 'Абонементи',
                    },
                    {
                        field: 'special-train',
                        label: 'Спеціалізовані тренування',
                    },
                    {
                        field: 'ownlocker',
                        label: 'Індивідуальна шафка',
                    },
                    {
                        field: 'vip-place',
                        label: 'Доступ в закриту VIP-групу',
                    },
                    {
                        field: 'wall-ty',
                        label: 'Розміщення на стіні подяки',
                    },
                    {
                        field: 't-shirt',
                        label: 'Футболка Еверест',
                    },
                    {
                        field: 'date',
                        label: 'Час',
                        centered: true
                    },
                    {
                        field: 'price',
                        label: 'Ціна',
                    },
                    
                ]
            }
        }
    }

    
       

</script>

<style scoped>
</style>
