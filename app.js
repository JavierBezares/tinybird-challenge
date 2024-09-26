import { fetchData } from "./request.js";
import { createSelector } from "./selector.js";

async function displayData(query) {
    const data = await fetchData(query); // Call the async function and wait for the result
    console.log('Response data:', data);
    console.table(data.data)
    console.log("** Query columns **")
    for (let column of data.meta) {
        //console.log(`${column.name} -> ${column.type}`)
    }
    return data;
}

const query = "SELECT payment_type, COUNT(*) AS count_of_payment_type FROM _ GROUP BY payment_type";
//const query = undefined;
let data = await displayData(query); // Execute the function to show the data

console.log('Response JAVIII:', data);

//Create array of options to be added
var array = ["Payment Type","Saab","Mercades","Audi"];
createSelector(array);

const pieChart = document.getElementById('pieChart');

let chartDataSet = data.data.map(item => item.count_of_payment_type);

//todo when we dont have data for a label the color is not shown
const chartData = {
  labels: [
    'Credit card',
    'Cash',
    'No charge',
    'Dispute',
    'Unknown',
    'Voided trip',
  ],
  datasets: [{
    label: 'Payment Type',
    data: chartDataSet,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(127, 176, 105)',
      'rgb(205, 193, 255)',
      'rgb(255, 152, 116)',
    ],
    hoverOffset: 4
  }]
};

new Chart(pieChart, {
  type: 'pie',
  data: chartData,
});

// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('main'));

// Specify the configuration items and data for the chart
var option = {
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  legend: {
    data: ['sales']
  },
  xAxis: {
    data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);