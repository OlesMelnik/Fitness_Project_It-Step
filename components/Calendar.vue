<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import firebase from 'firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

const fireDb = firebase.firestore()
const fireDb2 = firebase.firestore()
var ref;
let temp = [];
let eve;
let eventData = [];
var ref2;
var temp2;
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,   //відображення dayGridMonth
          timeGridPlugin,  // відображення timeGridWeek, timeGridDay
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [], // Наші івенти
        initialView: 'timeGridWeek',
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true
      }
    }
  },
  mounted(){
    ref = fireDb.collection('lesson')
    ref2 = fireDb2.collection('users').doc(this.$store.state.user.user.uid)
    ref2.get().then((doc)=>{
      temp2 = doc.data().season_ticket;
    }).catch(function(error) {
                console.log("Error getting document:", error);
    });

    ref.get()
    .then(function(querySnapshot) {
      temp = querySnapshot.docs
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
    setTimeout(() => {
      let events = [];
      temp.forEach(dosa => {
        let appData = dosa.data();
        let nice = [];
        appData.id = dosa.id;
        nice.push(appData.season_ticket);
        nice.forEach(element => {
          for (let index = 0; index < element.length; index++) {
            if(element[index] == temp2)
              events.push(appData);
          }
        });
      });
      console.log(events);
      this.calendarOptions.events = events;
      console.log(this.calendarOptions.events); }, 700);
  }
}
</script>

<template>
  <div class='demo-app'>
    <div class='demo-app-main'>
      <FullCalendar
        class='demo-app-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang='css'>
h2 {
  margin: 0;
  font-size: 16px;
}
ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}
li {
  margin: 1.5em 0;
  padding: 0;
}
b { /* used for event dates/times */
  margin-right: 3px;
}
.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}
.demo-app-sidebar-section {
  padding: 2em;
}
.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}
.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
</style>