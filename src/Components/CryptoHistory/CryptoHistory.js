/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-new */
import React, { useRef, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Chartjs from 'chart.js';
import { historyOptions as options } from '../../Config/chartConfig';
import style from './CryptoHistory.module.css';

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
      new Chartjs(chartRef.current, {
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
      <div className={style.chartContainer}>
        <canvas ref={chartRef} id="historyChart" />
      </div>
      <div className={style.chartButton}>
        <button
          type="button"
          onClick={() => setTimeFormat('24h')}
          className={style.btn}
        >
          24h
        </button>
        <button
          type="button"
          onClick={() => setTimeFormat('7d')}
          className={style.btn}
        >
          7d
        </button>
        <button
          type="button"
          onClick={() => setTimeFormat('30d')}
          className={style.btn}
        >
          30d
        </button>
        <button
          type="button"
          onClick={() => setTimeFormat('1y')}
          className={style.btn}
        >
          1y
        </button>
      </div>
    </div>
  );
};

CryptoHistory.propTypes = {
  data: propTypes.any.isRequired,
  currency: propTypes.string.isRequired,
};

export default CryptoHistory;
