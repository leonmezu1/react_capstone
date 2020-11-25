export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 0.5,
  },
  legend: {
    labels: {
      fontColor: '#fff',
    },
  },
  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        type: 'time',
        distribution: 'linear',
        gridLines: {
          color: 'rgba(0, 0, 0, 0)',
        },
        ticks: {
          fontColor: '#fff',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: 'rgba(0, 0, 0, 0)',
        },
        ticks: {
          fontColor: '#fff',
        },
      },
    ],
  },
};

export default historyOptions;
