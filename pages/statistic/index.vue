<template>
  <section class="section">
    <h1 class="title">User Statistic</h1>
    <hr class="has-background-link" />
    <h2>Ваша відвідуваність: <strong>{{attendance}}%</strong></h2>
    <h2>Середнє кількість спалених калорій за тренировку: <strong>{{cal}}</strong></h2>
    <h2>Ваш рівень: <strong>{{level}}</strong> </h2>
    <h2>Виконаний курс: <strong>{{progress}}%</strong></h2>

    <br>
    <h2 class="subtitle">Mean Pulse</h2>
    <hr>

    <canvas ref="canvas"></canvas>
  </section>
</template>

<script>
import { Bar } from "vue-chartjs";
import firebase from "firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const fireDb = firebase.firestore();
var ref;
var data;
export default {
  extends: Bar,
  mounted() {
    ref = fireDb.collection("statistic").doc(this.$store.state.user.user.uid);
    ref
      .get()
      .then(function (doc) {
        if (doc.exists) {
          data = Object.assign({}, doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    setTimeout(() => {
        this.attendance = data.attendance;
        this.cal = data.cal;
        this.level = data.level;
        this.progress = data.progress;
        this.renderChart(
          {
            labels: data.heartBit,
            datasets: [
              {
                label: "Mean Pulse",
                data: data.heartBit,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
          {
            scales: {
              yAxes: [
                {
                  display: true,
                  ticks: {
                    suggestedMin: 50, // minimum will be 0, unless there is a lower value.
                  },
                },
              ],
            },
          }
        );
    },700);


  },

  name: "Stat",
  data() {
    return {
      attendance: 0,
      cal: 0,
      level: '',
      progress: ''
    };
  },

  components: {},
};
</script>
