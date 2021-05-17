<script>
import firebase from 'firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
var ref;
let temp = [];
const fireDb = firebase.firestore()
export default {
    mounted(){
    ref = fireDb.collection('users')
    ref.get().then((doc)=>{
      temp = doc.data();
    }).catch(function(error) {
                console.log("Error getting document:", error);
    });
    setTimeout(() => {
      let events = [];
      console.log(events);
      this.calendarOptions.events = events;
      console.log(this.calendarOptions.events); }, 700);
  }
}
</script>


<template>
<div class="products">
      <div class="container">
          <div class="product-test">
            <button @click="addNew" class="btn btn-primary float-right">Add User</button>
            <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Lastname</th>
                      <th>Phone</th>
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <!-- <tr v-for="users in user"> -->
                        <td>
                          Bogdan
                        </td>
                        <td>
                          Kukliuk
                        </td>
                        <td>
                          0991234567
                        </td>
                        <td id="Edit">
                          <button  class="btn btn-primary" @click="editUser()">Edit</button>
                          <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                        </td>
                      </tr>
                  </tbody>
                </table>
            </div>
          </div>
      </div>
</div>
</template>