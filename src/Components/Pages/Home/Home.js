import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setGlobalCoin } from '../../../Actions';
import { geckoCoinsMarket } from '../../../Config/Axios';
import Splash from '../../Splash/Splash';
import Ticker from '../../Ticker/Ticker';

const Home = () => {
  const dispatch = useDispatch();
  const [globals, setGlobals] = useState({});
  const [timeValue, setTime] = useState(4);

  useEffect(() => {
    if (timeValue > 0) {
      setTimeout(() => {
        setTime(timeValue - 1);
      }, 1000);
    }
  }, [timeValue]);

  useEffect(async () => {
    const data = await geckoCoinsMarket();
    setGlobals(data);
    dispatch(setGlobalCoin(data));
  }, []);

  const currentComponent = timeValue >= 1 ? (
    <Splash />
  ) : (
    <>
      { globals ? <Ticker /> : null }
    </>
  );

  return (
    <>
      { currentComponent }
      { timeValue }
    </>
  );
};

export default Home;
