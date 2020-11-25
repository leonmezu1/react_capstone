import React, { useRef, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 } from 'uuid';
import { useCryptoPaginate } from '../../Config/useCrypto';
import CryptoResult from '../CryptoHeroResult/CryptoResult';
import CryptoHero from '../CryptoHero/CryptoHero';
import CryptoTile from '../CryptoTile/CryptoTile';
import SpinnerRect from '../Spinner/SpinnerRect';
import './CryptosContainer.css';

const CryptosContainer = () => {
  const symbol = useSelector(state => state.CoinStoreState.symbol);
  const currency = useSelector(state => state.CoinStoreState.currency);
  const order = useSelector(state => state.CoinStoreState.order);
  const activeQuery = useSelector(state => state.CoinStoreState.activeQuery);
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const history = useHistory();

  const { results, loading, hasMore } = useCryptoPaginate(
    currency,
    order,
    pageNumber,
  );
  const tiles = results.slice(1);

  let currentTile;

  const redirectToCrypto = id => {
    history.push(`/crypto/${id}`);
  };

  const lastTile = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading],
  );

  const classes = 'crypto-column f-50-10';

  return (
    <div className="currency-box">
      <div className="top-currency">
        <h2 className="currency-title shadowed-text">
          {activeQuery ? 'Search results' : 'Top currency'}
        </h2>
        {activeQuery ? (
          <CryptoResult redirectToCrypto={redirectToCrypto} />
        ) : (
          <CryptoHero redirectToCrypto={redirectToCrypto} />
        )}
      </div>
      {!activeQuery && (
        <div className="currencies-wrapper">
          <h2 className="currency-title shadowed-text">Currencies</h2>
          <div className="tile-wrapper ">
            {tiles.map((tile, index) => {
              if (tiles.length === index + 1) {
                currentTile = (
                  <CryptoTile
                    ref={lastTile}
                    key={v4()}
                    imgTag={tile.image}
                    name={tile.name}
                    currentPrice={tile.current_price}
                    symbol={symbol}
                    classes={classes}
                    id={tile.id}
                    redirectToCrypto={redirectToCrypto}
                  />
                );
              } else {
                currentTile = (
                  <CryptoTile
                    key={v4()}
                    imgTag={tile.image}
                    name={tile.name}
                    currentPrice={tile.current_price}
                    symbol={symbol}
                    classes={classes}
                    id={tile.id}
                    redirectToCrypto={redirectToCrypto}
                  />
                );
              }
              return currentTile;
            })}
          </div>
          {loading && <SpinnerRect />}
        </div>
      )}
    </div>
  );
};

export default CryptosContainer;
