/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setGlobalCoin, setGlobalCurrency, setGlobalOrder } from '../../../Actions';
import { geckoCoinsMarket } from '../../../Config/Axios';
import Spinner from '../../Spinner/Spinner';
import Splash from '../../Splash/Splash';
import Ticker from '../../Ticker/Ticker';
import Selector from '../Selector';

const Home = () => {
  const dispatch = useDispatch();
  const [globals, setGlobals] = useState({});
  const [currency, setCurrency] = useState('');
  const [order, setOrder] = useState('');
  const [timeValue, setTime] = useState(4);

  if (timeValue > 0) {
    setTimeout(() => {
      setTime(timeValue - 1);
    }, 1000);
  }

  useEffect(async () => {
    const data = await geckoCoinsMarket(currency, order);
    setGlobals(data);
    dispatch(setGlobalCoin(data));
    if (currency !== '' || order !== '') {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Banner values queued!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [currency, order]);

  const handleCurrencyChange = e => {
    setCurrency(e.target.value);
    dispatch(setGlobalCurrency(e.target.value));
  };

  const handleOrderChange = e => {
    setOrder(e.target.value);
    dispatch(setGlobalOrder(e.target.value));
  };

  const currentComponent = timeValue >= 1 ? (
    <Splash />
  ) : (
    <>
      {globals ? (
        <>
          <Ticker globals={globals} />
          <div className="main-content container">
            <Selector
              handleOrderChange={handleOrderChange}
              handleCurrencyChange={handleCurrencyChange}
            />
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );

  return (
    <>
      { currentComponent }
    </>
  );
};

export default Home;
