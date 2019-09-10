const fullOptions = {
  type: 'line',
  labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    }
  },
  legend: {
    display: true,
    position: 'top',
    fullWidth: true,
    reverse: true,
  },
  title: {
    display: true,
    position: 'top',
    fontSize: 12,
    fontFamily: 'Arial',
    fontColor: '#666',
    fontStyle: 'bold',
    paddinng: 10,
    lineHeight: 1.2,
    text: 'Patkers Annualy'
  },
  tooltips: {
    enabled: true,
    mode: 'nearest',
    intersect: true,
    // position: 'average',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    titleFontFamily: 'Arial',
    titleFontSize: 12,
    titleFontStyle: 'bold',
    titleFontColor: '#fff',
    titleSpacing: 2,
    titleMarginBottom: 6,
    bodyFontFamily: 'Arial',
    bodyFontSize: 12,
    bodyFontStyle: 'normal',
    bodyFontColor: '#fff',
    bodySpacing: 2,
    footerFontFamily: 'Arial',
    footerFontSize: 12,
    footerFontStyle: 'bold',
    footerFontColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    xPadding: 6,
    yPadding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    multiKeyBackground: '#fff',
    displayColors: true,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 0,
  },
  elements: {
    radius: 3,
    pointStyle: 'circle',
    rotation: 0,
    backgroundColor: '',
    borderWidth: 1,
    borderColor: '',
    hitRadius: 1,
    hoverRadius: 4,
    hoverBorderWidth: 1,
  },
  scales: {
    scaleLabel: {
      display: true,
    },
    yAxes: [{
      // type: 'linear',
      display: true,
      // position: 'left'
    }],
    xAxes: [{
      // type: 'linear',
      display: true,
      // position: 'left'
    }]
  },
  background: {
    color: 'transparent',
  }
}

const fullDatasetOptions = {
  line: {
    backgroundColor: '',
    borderCapStyle: 'butt',
    borderColor: '',
    borderJoinStyle: 'miter',
    borderWidth: 3,
    cubicInterpolationMode: '',
    fill: true,
    label: '',
    lineTension: .4,
    pointBackgroundColor: '',
    pointBorderColor: '',
    pointBorderWidth: 1,
    pointBorderRadius: 1,
    pointHoverBackgroundColor: '',
    pointHoverBorderColor: '',
    pointHoverBorderWidth: 1,
    pointHoverRadius: 4,
    pointRadius: 3,
    pointRotation: 0,
    pointStyle: 'circle',
    showLine: true,
    spanGaps: true,
    steppedLine: false,
  },
  bar: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderSkipped: 'bottom',
    borderWidth: 0,
    hoverBackgroundColor: '',
    hoverBorderColor: '',
    label: '',
  },
  radar: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderCapStyle: 'butt',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderDash: [0],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    fill: true,
    label: '',
    lineTension: 0.4,
    pointBackgroundColor: 'rgba(0, 0, 0, 0.1)',
    pointBorderColor: 'rgba(0, 0, 0, 0.1)',
    pointBorderWidth: 1,
    pointHitRadius: 1,
    pointHoverBackgroundColor: '',
    pointHoverBorderColor: '',
    pointHoverBorderWidth: 1,
    pointHoverRadius: 4,
    pointRadius: 3,
    pointRotation: 0,
    pointStyle: 'circle'
  },
  pie: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderAlign: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    hoverBackgroundColor: '',
    hoverBorderColor: '',
    hoverBorderWidth: '',
    weight: 1,
  },
  polarArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderAlign: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    hoverBackgroundColor: '',
    hoverBorderColro: '',
    hoverBorderWidth: '',
  },
  bubble: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 3,
    hoverBackgroundColor: '',
    hoverBorderColor: '',
    hoverBorderWidth: 1,
    hoverRadius: 4,
    hitRadius: 1,
    label: '',
    pointStyle: 'circle',
    rotation: 0,
    radius: 3,
  },

}
fullDatasetOptions.doughnut = fullDatasetOptions.pie;
fullDatasetOptions.scatter = fullDatasetOptions.line;


const fullSelects = {
  type: ['line', 'bar', 'radar', 'pie', 'doughnut', 'polarArea', 'bubble', 'scatter'],
  pointStyle: ['circle', 'cross', 'crossRot', 'dash', 'line', 'rect', 'rectRounded', 'rectRot', 'star', 'triangle'],
  borderJoinStyle: ['miter', 'bevel', 'round'],
  borderCapStyle: ['butt', 'round', 'square'],
  borderSkipped: ['bottom', 'left', 'top', 'right'],
  borderAlign: ['center', 'left', 'right'],
  position: ['top', 'bottom', 'left', 'right'],
  mode: ['nearest', 'average'],
  fontStyle: ['bold', 'italic', 'normal'],
}

fullSelects.titleFontStyle = fullSelects.fontStyle;
fullSelects.bodyFontStyle = fullSelects.fontStyle;
fullSelects.footerFontStyle = fullSelects.fontStyle;
