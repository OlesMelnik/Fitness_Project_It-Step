<template>
<section>
    <b-table :data="data" :columns="columns"></b-table>
    <div class="columns is-desktop">
        <div class="column">
    <b-button @click="clickMe" type="is-success">Купити</b-button>
        </div>
    </div>
</section> 
    

        
    


    
</template>


<script>

    export default {
       
        data() {
            return {
                data: [
                 { 'id': 1, 'first_name': 'Абонемент-Ординарний', 'last_name': '600', 'date': '1 місяць' },
                    { 'id': 2, 'first_name': 'Абонемент-Pro', 'last_name': '1000', 'date': '1 місяць' },
                    { 'id': 3, 'first_name': 'Vip-Абонемент', 'last_name': '5000', 'date': '6 місяців' }
                   
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'Абонементи',
                    },
                    {
                        field: 'last_name',
                        label: 'Ціна',
                    },
                    {
                        field: 'date',
                        label: 'Час',
                        centered: true
                    }
                    
                ]
            }
        }
    }

    
       

</script>


