import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { motion } from "framer-motion";

const Trading = () => {
  // Animation
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const chartContainerRef = useRef();
  const priceRef = useRef(); // Reference for the price display element
  const [tradingInfo, setTradingInfo] = useState({
    currentPrice: 145.67,
    volume: "2.5M",
    marketNews: "IBM stocks surge by 2.5% in early trading.",
    marketCap: "118.2B USD",
  });

  useEffect(() => {
    // Set up chart properties
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: 500,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });
    const candleSeries = chart.addCandlestickSeries();

    // Fetch candlestick data from Alpha Vantage API
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`
    )
      .then((res) => res.json())
      .then((data) => {
        const timeSeries = data["Time Series (5min)"];
        if (timeSeries) {
          // Extract and format data
          const cdata = Object.keys(timeSeries).map((timestamp) => {
            const candle = timeSeries[timestamp];
            return {
              time: new Date(timestamp).getTime() / 1000, // Convert to UNIX timestamp in seconds
              open: parseFloat(candle["1. open"]),
              high: parseFloat(candle["2. high"]),
              low: parseFloat(candle["3. low"]),
              close: parseFloat(candle["4. close"]),
            };
          });

          // Sort data in ascending order by time
          cdata.sort((a, b) => a.time - b.time);

          // Set sorted data to the chart
          candleSeries.setData(cdata);
        }
      })
      .catch((err) => console.log(err));

    // Listen to crosshair movements and update the tooltip
    chart.subscribeCrosshairMove((param) => {
      if (!param.time || !param.seriesData.size) {
        priceRef.current.style.display = "none";
      } else {
        const priceData = param.seriesData.get(candleSeries);
        if (priceData) {
          priceRef.current.style.display = "block";
          priceRef.current.innerHTML = `
            Time: ${new Date(param.time * 1000).toLocaleString()} <br />
            Open: $${priceData.open} <br />
            High: $${priceData.high} <br />
            Low: $${priceData.low} <br />
            Close: $${priceData.close}
          `;
          // Position tooltip at the mouse cursor position
          priceRef.current.style.left = `${param.point.x + 10}px`;
          priceRef.current.style.top = `${param.point.y}px`;
        }
      }
    });
  }, []);

  return (
    <>
      {/* Heading */}
      <motion.div
        className="mx-auto mt-7 max-w-screen-sm text-center lg:mb-16 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2 className="mb-4 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          <span className="text-blue-500">Bloggerstricks </span>
          Your Ultimate Trading Platform
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Bloggerticks is a cutting-edge trading platform designed for both
          novice and experienced traders.
        </p>
      </motion.div>
      {/* Heading */}

      {/* Trading View */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 mx-auto mb-10"
      >
        {/* Chart & Info Container */}
        <div className="w-full max-w-4xl bg-white drop-shadow-2xl p-6 rounded-lg shadow-lg text-center">
          {/* Chart Container */}
          <div
            ref={chartContainerRef}
            className="relative h-96 w-full mx-auto rounded-lg overflow-hidden mb-6"
          >
            <div
              ref={priceRef}
              className="absolute bg-white p-2 text-sm shadow-lg border rounded-md hidden"
              style={{ pointerEvents: "none" }}
            />
          </div>

          {/* Trading Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-500 p-4 rounded-lg drop-shadow-xl">
              <h3 className="text-lg font-bold text-white">Current Price</h3>
              <p className="text-sm text-white">
                ${tradingInfo.currentPrice}
              </p>
            </div>
            <div className="bg-green-500 p-4 rounded-lg drop-shadow-xl">
              <h3 className="text-lg font-bold text-white">Volume</h3>
              <p className="text-sm text-white">{tradingInfo.volume}</p>
            </div>
            <div className="bg-blue-500 p-4 rounded-lg drop-shadow-xl">
              <h3 className="text-lg font-bold text-white">Market News</h3>
              <p className="text-sm text-white">{tradingInfo.marketNews}</p>
            </div>
            <div className="bg-yellow-500 p-4 rounded-lg drop-shadow-xl">
              <h3 className="text-lg font-bold text-white">Market Cap</h3>
              <p className="text-sm text-white">{tradingInfo.marketCap}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Trading;
