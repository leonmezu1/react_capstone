const textToBigCurrency = numberText => {
  if (Math.abs(numberText) >= 1.0e9) {
    return `${(Math.abs(numberText) / 1.0e9).toFixed(2)} B`;
  } if (Math.abs(numberText) >= 1.0e6) {
    return `${(Math.abs(numberText) / 1.0e6).toFixed(2)} M`;
  } if (Math.abs(numberText) >= 1.0e3) {
    return `${(Math.abs(numberText) / 1.0e3).toFixed(2)} K`;
  }
  return Math.abs(numberText).toFixed(2);
};

export default textToBigCurrency;
