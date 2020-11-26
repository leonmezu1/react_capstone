import React, { useRef, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Chartjs from 'chart.js';
import { historyOptions as options } from '../../Config/chartConfig';
import './CryptoHistory.css';

const CryptoHistory = ({ data, currency }) => {
  const chartRef = useRef();
  const {
    day, week, year, month,
  } = data;
  const [timeFormat, setTimeFormat] = useState('24h');

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case '24h':
        return day;
      case '7d':
        return week;
      case '30d':
        return month;
      case '1y':
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // eslint-disable-next-line no-unused-vars
      const chartInstance = new Chartjs(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: currency.toUpperCase(),
              data: determineTimeFormat(),
              backgroundColor: 'rgba(174, 305, 194, 0.5)',
              borderColor: 'rgba(174, 305, 194, 1)',
              pointRadius: 0,
              lineTension: 0,
            },
          ],
        },
        options,
      });
    }
  }, [timeFormat]);

  return (
    <div>
      <div className="chart-container">
        <canvas ref={chartRef} id="historyChart" />
      </div>
      <div className="chart-button">
        <button
          type="button"
          onClick={() => setTimeFormat('24h')}
          className="btn btn-outline-secondary btn-sm"
        >
          24h
        </button>
        <button
          type="button"
          onClick={() => setTimeFormat('7d')}
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          7d
        </button>
        <button
          type="button"
          onClick={() => setTimeFormat('30d')}
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          30d
        </button>
        <button
          type="button"
          onClick={() => setTimeFormat('1y')}
          className="btn btn-outline-secondary btn-sm"
        >
          1y
        </button>
      </div>
    </div>
  );
};

CryptoHistory.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: propTypes.object.isRequired,
  currency: propTypes.string.isRequired,
};

export default CryptoHistory;
