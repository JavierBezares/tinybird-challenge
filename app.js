import { ChartConfig } from "./chartConfigBuilder.js";
import { fetchData } from "./request.js";
import { createSelector } from "./selector.js";

const queryPaymentType = "SELECT payment_type, COUNT(*) AS count_of_payment_type FROM _ GROUP BY payment_type";
const queryDay = "SELECT DATE(tpep_pickup_datetime) AS day, COUNT(*) AS total_trips, AVG(total_amount) AS avg_total_amount, AVG(trip_distance) AS avg_trip_distance, AVG(passenger_count) AS avg_passenger_count, SUM(total_amount) AS total_amount_by_day FROM _ GROUP BY DATE(tpep_pickup_datetime) ORDER BY day";
const data = await fetchData(queryDay);

var selectOptions = ["total_trips", "avg_total_amount", "avg_trip_distance", "avg_passenger_count", "total_amount_by_day"];
var selectedOption = selectOptions[0];

let chartData = updateChartData();

var selectList = createSelector(selectOptions);
selectList.addEventListener("change", onSelectorChange);

var lineChart = echarts.init(document.getElementById('lineChart'));
var chartConfig = updateChart();
lineChart.setOption(chartConfig.option);

const event = {target: {value: selectedOption}};
onSelectorChange(event);

function onSelectorChange(event) {
  console.log("onSelectorChange");
  selectedOption = event.target.value;
  chartConfig = updateChart();
  lineChart.setOption(chartConfig.option);
}

function updateChartData() {
  return data.data.map(row => {
    return {
      category: row.day,
      value: row[selectedOption]
    }
  });
}

function updateChart() {
  chartData = updateChartData();
  console.log("chartData", chartData);
  return new ChartConfig(chartData, 'line', selectedOption, '$', true, true);
}