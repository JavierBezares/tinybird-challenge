export function ChartConfig(data, type, seriesName, yAxisLabel, legend = true, tooltip = true) {
  this.data = data;
  this.values = data.map(dataPoint => dataPoint.value);
  this.categories = data.map(dataPoint => dataPoint.category);
  this.type = type;
  this.seriesName = seriesName;
  this.yAxisLabel = yAxisLabel;
  this.legend = legend;
  this.tooltip = tooltip;
  this.option = {};
  this.createChartOptions = createChartOptions.bind(this);
  this.createChartOptions();
}

function createChartOptions() {
  if (this.legend) {
    this.option.legend = {};
  }

  if (this.tooltip) {
    this.option.tooltip = {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    };
  }

  this.option.xAxis = {
    type: 'category',
    data: this.categories
  };

  this.option.yAxis = {
    type: 'value',
    axisLabel: {
      formatter: `{value} ${this.yAxisLabel}`,
    }
  };

  if (this.type === 'line') {
    this.option.series = [
      {
        data: this.values,
        type: this.type,
        name: this.seriesName
      }
    ];
  }

  if (this.type === 'pie') {
    let dataSeries = this.data.map(dataPoint => {
      return {
        name: dataPoint.category,
        value: dataPoint.value
      }
    });
    this.option.series = [
      {
        type: this.type,
        data: dataSeries,
      }
    ];
  }
}