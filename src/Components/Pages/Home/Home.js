import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setGlobalCoin } from '../../../Actions';
import { geckoGlobal } from '../../../Config/Axios';

const Home = () => {
  const dispatch = useDispatch();
  const [globals, setGlobals] = useState({});
  useEffect(async () => {
    const data = await geckoGlobal();
    setGlobals(data);
    dispatch(setGlobalCoin(data));
  }, []);
  return (
    <h2>
      {`From HOME: Active currencies: ${
        globals?.data ? globals.data.active_cryptocurrencies : 'loading'
      }`}
    </h2>
  );
};

export default Home;
