function doStockCalculation(data, stockPrice) {
  if (stockPrice < 0) {
    return "invalid stock price";
  }

  if (data[0].length !== 2) {
    return "invalid data - must be 2D array, found " + data[0].length;
  }

  eval(
    UrlFetchApp.fetch(
      "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"
    ).getContentText()
  );

  const stockVest = data
    .map(([date, amount]) => {
      return [date, parseInt(amount)];
    })
    .filter(([date, amount]) => {
      if (date) {
        if (date >= Date.now() && amount > 0) {
          return true;
        }
      }
      return false;
    })
    .sort(([date1], [date2]) => {
      return moment(date1).unix() - moment(date2).unix();
    })
    .reduce((res, [date, amount]) => {
      res[date] = res[date] || {
        count: 0,
        amt: 0,
      };
      res[date].count = res[date].count + amount;
      res[date].amt = Math.round(res[date].count * stockPrice);
      return res;
    }, {});

  return Object.keys(stockVest).map((date) => [
    moment(date).format("MM/DD/YYYY"),
    stockVest[date].count,
    stockVest[date].amt,
  ]);
}
