import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import CryptoHero from '../CryptoHero/CryptoHero';
import CryptoTile from '../CryptoTile/CryptoTile';
import 'aos/dist/aos.css';

import './CryptosContainer.css';

const CryptosContainer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const symbol = useSelector(state => state.CoinStoreState.symbol);
  const tiles = useSelector(state => state.CoinStoreState.global?.slice(1, -1));

  const classes = 'crypto-column f-50-10';

  return (
    <>
      <div className="top-currency">
        <h2 className="top-currency-title shadowed-text">Top Currency</h2>
        <CryptoHero />
        <h2 className="top-currency-title shadowed-text">Currencies</h2>
        <div className="tile-wrapper ">
          {tiles.map(tile => (
            <CryptoTile
              key={tile.id}
              imgTag={tile.image}
              name={tile.name}
              currentPrice={tile.current_price}
              symbol={symbol}
              classes={classes}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CryptosContainer;
