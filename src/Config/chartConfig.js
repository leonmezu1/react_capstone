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
        stacked: true,
        type: 'time',
        distribution: 'linear',
        gridLines: {
          color: 'rgba(0, 0, 0, 0)',
        },
        ticks: {
          minRotation: 20,
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
          beginAtZero: false,
          fontColor: '#fff',
        },
      },
    ],
  },
};

export default historyOptions;
