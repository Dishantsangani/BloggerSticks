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
  const [news, setNews] = useState([]);
  const priceRef = useRef(); // Reference for the price display element

  useEffect(() => {
    // Set up chart properties
    const chart = createChart(chartContainerRef.current, {
      width: 1100,
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
    // Button Hover
    chart.subscribeCrosshairMove((param) => {
      if (param === undefined || !param.time || param.seriesData.size === 0) {
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
      {/*Heading*/}
      <motion.div
        className="mx-auto mt-7 max-w-screen-sm text-center lg:mb-16 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2 className="mb-4 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          <span className="text-blue-500">Bloggerticks </span>
          Your Ultimate Trading Platform
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Bloggerticks is a cutting-edge trading platform designed for both
          novice and experienced traders.
        </p>
      </motion.div>
      {/*Heading*/}

      {/* Trading View */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div
          ref={chartContainerRef}
          style={{ position: "relative", width: "300px", height: "500px" }}
        ></div>

        {/* Price tooltip */}
        <div
          ref={priceRef}
          style={{
            position: "absolute",
            display: "none",
            backgroundColor: "white",
            border: "1px solid black",
            padding: "10px",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        ></div>

        {/* Display news */}
        <div style={{ marginTop: "20px" }} className="ml-">
          <h2>Latest News</h2>
          <ul></ul>
        </div>
      </motion.div>

      {/* Trading View */}
    </>
  );
};

export default Trading;
