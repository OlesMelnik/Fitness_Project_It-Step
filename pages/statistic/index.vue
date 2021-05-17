<template>
  <section class="section">
    <h1 class="title">User Statistic</h1>
    <hr class="has-background-link" />
    <h2>
      Your attendance: <strong>{{ attendance }}%</strong>
    </h2>
    <h2>
      The average number of calories burned per workout:
      <strong>{{ cal }}</strong>
    </h2>
    <h2>
      Your level: <strong>{{ level }}</strong>
    </h2>
    <h2>
      Completed course: <strong>{{ progress }}%</strong>
    </h2>
    <br>


    <!-- <canvas ref="canvas"></canvas> -->
    <div class="columns">
      <div class="column">
        <PieChart
          v-if="pieOptions != null"
          class="pie"
          :chartdata="pieData"
          :options="pieOptions"
        />
      </div>
      <div class="column">
        <PieChart
          v-if="workoutData != null"
          class="pie"
          :chartdata="workoutData"
          :options="pieOptions"
        />
      </div>
      <div class="column">
        <Doughnut
          v-if="progressData != null"
          class="pie"
          :chartdata="progressData"
          :options="pieOptions"
        />
      </div>
    </div>
    <BarChart
      v-if="chartData != null"
      class="chart"
      :chartdata="chartData"
      :options="chartOptions"
    />

  </section>
</template>

<script>
import { Bar } from "vue-chartjs";
import firebase from "firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
import BarChart from "~/components/BarChart";
import PieChart from "~/components/PieChart";
import Doughnut from "~/components/Doughnut";

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
    
    setTimeout(() =>{
    this.attendance = data.attendance;
    this.cal = data.cal;
    this.level = data.level;
    this.progress = data.progress;
    this.chartData = {
      labels: data.calories,
      datasets: [
        {
          label: "calories burned per workout",
          data: data.calories,
          backgroundColor: "#ff4d4d",
          borderColor: "#ff4d4d",
          borderWidth: 1,
        },
      ],
    };

    this.chartOptions = {
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
      responsive: true,
      maintainAspectRatio: false,
    };

    this.pieData = {
      datasets: [
        {
          data: [data.presence, data.absence],
          backgroundColor: ["#0099ff", "#ff1a1a"],
          hoverBackgroundColor: "#4dff4d",
        },
      ],
      labels: ["presence", "absence"],
    };
    this.workoutData = {
      datasets: [
        {
          data: data.workout,
          backgroundColor: ["#53ff1a", "#ff1a1a", "#ff1aff","#4747d1"],
          hoverBackgroundColor: "#4dff4d",
        },
      ],
      labels: ["biceps", "triceps", "back", "legs"],
    };

    this.progressData = {
      datasets: [
        {
          data: [data.progress, 100 - data.progress],
          backgroundColor: ["#33ff33", "#94b8b8"],
          hoverBackgroundColor: "#4dff4d",
        },
      ],
      labels: ["done", "process"],
    };

    this.pieOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };
    }, 700)


  },
  // this.renderChart(
  //   {
  //     labels: data.heartBit,
  //     datasets: [
  //       {
  //         label: "Mean Pulse",
  //         data: data.heartBit,
  //         backgroundColor: "rgba(54, 162, 235, 0.2)",
  //         borderColor: "rgba(54, 162, 235, 1)",
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   {
  //     scales: {
  //       yAxes: [
  //         {
  //           display: true,
  //           ticks: {
  //             suggestedMin: 50, // minimum will be 0, unless there is a lower value.
  //           },
  //         },
  //       ],
  //     },
  //   }
  // );
  name: "Stat",
  data() {
    return {
      attendance: 0,
      cal: 0,
      level: "",
      progress: "",
      chartData: null,
      chartOptions: null,
      pieData: null,
      pieOptions: null,
      workoutData: null,
      progressData: null,
    };
  },

  components: { },
};
</script>

<style scoped>
.column{
  width: 200px;
}
.pie {
  height: 250px;
}
.chart {
  height: 300px;
}
</style>
