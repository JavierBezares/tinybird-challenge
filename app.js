import { fetchData } from "./request.js";

async function displayData() {
    const data = await fetchData(); // Call the async function and wait for the result
    console.log('Response data:', data);
    console.table(data.data)
    console.log("** Query columns **")
    for (let column of data.meta) {
        //console.log(`${column.name} -> ${column.type}`)
    }
    return data;
}

displayData(); // Execute the function to show the data

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