import { fetchData } from "./request.js";
import { createSelector } from "./selector.js";

const queryPaymentType = "SELECT payment_type, COUNT(*) AS count_of_payment_type FROM _ GROUP BY payment_type";
const queryDay = "SELECT DATE(tpep_pickup_datetime) AS day, COUNT(*) AS total_trips, AVG(total_amount) AS avg_total_amount, AVG(trip_distance) AS avg_trip_distance, AVG(passenger_count) AS avg_passenger_count, SUM(total_amount) AS total_amount_by_day FROM _ GROUP BY DATE(tpep_pickup_datetime) ORDER BY day";
const data = await fetchData(queryDay);

//SELECT DATE_FORMAT(tpep_pickup_datetime, '%Y-%m') AS month, COUNT(*) AS total_trips, AVG(total_amount) AS avg_total_amount, AVG(trip_distance) AS avg_trip_distance, AVG(passenger_count) AS avg_passenger_count, SUM(total_amount) AS total_amount_by_month FROM _ GROUP BY DATE_FORMAT(tpep_pickup_datetime, '%Y-%m') ORDER BY month
//SELECT YEAR(tpep_pickup_datetime) AS year, COUNT(*) AS total_trips, AVG(total_amount) AS avg_total_amount, AVG(trip_distance) AS avg_trip_distance, AVG(passenger_count) AS avg_passenger_count, SUM(total_amount) AS total_amount_by_month FROM _ GROUP BY YEAR(tpep_pickup_datetime) ORDER BY year
//SELECT DATE(tpep_pickup_datetime) AS day, COUNT(*) AS total_trips, AVG(total_amount) AS avg_total_amount, AVG(trip_distance) AS avg_trip_distance, AVG(passenger_count) AS avg_passenger_count, SUM(total_amount) AS total_amount_by_month FROM _ GROUP BY DATE(tpep_pickup_datetime) ORDER BY day

var array = ["Payment Type","Total Per Day","Example 3","Example 4"];
createSelector(array);

let chartDataSet = data.data.map(item => item.count_of_payment_type);
console.log(chartDataSet);

var labels = [
  'Credit card',
  'Cash',
  'No charge',
  'Dispute',
  'Unknown',
  'Voided trip',
];

// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('main'));

var option2 = {
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  legend: {
    orient: 'horizontal',
    right: 10,
    top: 'bottom'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: 'Direct Visit'
        },
        {
          value: 234,
          name: 'Union Ad'
        },
        {
          value: 1548,
          name: 'Search Engine'
        }
      ]
    }
  ]
};
myChart.setOption(option2);

let days = data.data.map(row => row.day);
let values = data.data.map(row => row.total_trips);
let valuesObject = data.data.map(row => {
  return {
    name: "hola",
    value: row.total_trips
  }
});
console.log("valuesObject", valuesObject);


let option3 = {
  legend: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' }
  },
  xAxis: {
    type: 'category',
    data: days
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} $',
    }
  },
  series: [
    {
      data: values,
      type: 'line',
      name: "Total Trips"
    }
  ]
};

var lineChart = echarts.init(document.getElementById('lineChart'));
lineChart.setOption(option3);