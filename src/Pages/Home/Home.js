import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
  setFetching,
  setGlobalCoin,
  setGlobalCurrency,
  setGlobalOrder,
  splashLoaded,
} from '../../Actions';
import { geckoCoinsMarket } from '../../Config/Axios';
import Spinner from '../../Components/Spinner/Spinner';
import Splash from '../../Components/Splash/Splash';
import Ticker from '../../Components/Ticker/Ticker';
import Selector from '../../Components/Selector/Selector';
import CryptosContainer from '../../Components/Cryptos/CryptosContainer';

const Home = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.CoinStoreState.loading);
  const splash = useSelector(state => state.CoinStoreState.splashLoaded);

  const [globals, setGlobals] = useState({});
  const [currency, setCurrency] = useState('');
  const [order, setOrder] = useState('');
  const [timeValue, setTime] = useState(4);

  useEffect(async () => {
    dispatch(setFetching(true));
    const data = await geckoCoinsMarket(currency, order);
    setGlobals(data);
    dispatch(setGlobalCoin(data));
    if (currency !== '' || order !== '') {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Values updated!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [currency, order]);

  useEffect(() => {
    if (timeValue > 0) {
      setTimeout(() => {
        setTime(timeValue - 1);
      }, 1000);
    } else if (timeValue === 0) {
      dispatch(splashLoaded(true));
    }
  }, [timeValue]);

  const handleCurrencyChange = e => {
    setCurrency(e.target.value);
    dispatch(setGlobalCurrency(e.target.value));
  };

  const handleOrderChange = e => {
    setOrder(e.target.value);
    dispatch(setGlobalOrder(e.target.value));
  };

  const currentComponent = !splash && timeValue >= 1 ? (
    <Splash />
  ) : (
    <>
      {!loading ? (
        <>
          {globals ? (
            <>
              <Ticker globals={globals} />
              <div className="main-content container">
                <Selector
                  handleOrderChange={handleOrderChange}
                  handleCurrencyChange={handleCurrencyChange}
                />
                <CryptosContainer />
              </div>
            </>
          ) : null}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );

  return <>{currentComponent}</>;
};

export default Home;
