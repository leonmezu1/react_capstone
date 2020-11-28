/* eslint-disable no-unused-expressions */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

test('<App /> Loading and display the APP', () => {
  render(app);
  expect(screen.getByText('Cryptica')).toBeInTheDocument();
  expect(screen.getByText('CoinGecko')).toBeInTheDocument();
});

test('<App /> Default select values should be visible in the selectors', () => {
  act(() => {
    async () => {
      const { getByText } = await render(app);
      setTimeout(() => {
        expect(getByText('Market cap desc')).toBeInTheDocument();
        expect(getByText('USD')).toBeInTheDocument();
      }, 5000);
    };
  });
});

test('<App /> If data is retrieved from the API the asserted text should be visible', () => {
  act(() => {
    async () => {
      const { getByText } = await render(app);
      setTimeout(() => {
        expect(getByText('Current price')).toBeInTheDocument();
        expect(getByText('$')).toBeInTheDocument();
      }, 5000);
    };
  });
});
