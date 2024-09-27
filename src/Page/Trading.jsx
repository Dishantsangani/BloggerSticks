import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { motion } from "framer-motion";
import { SplitText } from "../Animations/SplitText";
import { BlurText } from "../Animations/BlurText";
// import Masonry from "../Animations/Masonry/Masonry";
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

  // Data Api
  const [sdata, SetSdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo"
      )
      .then((res) => {
        SetSdata(res.data.feed);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("This is API Error", err);
      });
  }, []);

  //Pagination Code
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage] = useState(9);
  const [totalPosts, setTotalPosts] = useState(0);

  const lastPostIndex = currentPage * postperpage;
  const firstPostIndex = lastPostIndex - postperpage;
  const currentPosts = sdata.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(totalPosts / postperpage);

  const handlepagechange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  useEffect(() => {
    if (sdata) {
      setTotalPosts(sdata.length);
    }
  }, [sdata]); // Whenever sdata changes, totalPosts is updated.

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
          <SplitText
            text="Bloggerstricks"
            className="custom-class"
            delay={50}
          />
          Your Ultimate Trading Platform
          {/* <span className="text-blue-500">Bloggerstricks </span> */}
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
              <p className="text-sm text-white">${tradingInfo.currentPrice}</p>
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

      <div className="mx-auto my-6 pt-3 pb-3 drop-shadow-lg max-w-screen-sm rounded-lg bg-green-100 text-center lg:mb-8 mb-6">
        <h2 className="mb-2 text-xl sm:text-2xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          <SplitText
            text="Latest Updates !"
            className="custom-class"
            delay={50}
          />
        </h2>
        <BlurText
          text="Community support for sharing strategies and insights."
          className="custom-class max-w-lg mx-auto mt-2 text-black text-xl "
          delay={40}
        />
        <p className="font-light text-sm sm:text-base text-gray-500 dark:text-gray-400"></p>
      </div>
      {/*  API Response*/}
      <div className="py-2 drop-shadow-xl px-2 mx-auto max-w-full lg:max-w-screen-lg lg:py-4 lg:px-0">
        {currentPosts?.map((item, index) => (
          <div key={index}>
            <article className="p-2 mb-4 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <div className="flex justify-between items-center mb-2 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm">
                    {item.source_domain}
                  </span>
                </div>
                <img
                  src={item.banner_image}
                  alt="api Image Error"
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="mb-2 text-sm sm:text-base font-light text-gray-500 dark:text-gray-400">
                  {item.summary}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-500">
                    {item.source}
                  </span>
                  <a
                    className="inline-flex items-center text-sm sm:text-base font-medium text-blue-500 dark:text-primary-500 hover:underline"
                    href={item.url}
                    target="_blank"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-4 mt-8">
        <motion.button
          onClick={() => handlepagechange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-800 text-white rounded-l-md py-2 px-3 hover:bg-gray-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-row align-middle">
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-2">Prev</p>
          </div>
        </motion.button>
        <motion.button
          onClick={() => handlepagechange(currentPage + 1)}
          disabled={
            currentPage === totalPages ||
            sdata.slice(lastPostIndex, lastPostIndex + postperpage).length === 0
          }
          className="bg-blue-600 text-white rounded-r-md py-2 px-3 hover:bg-blue-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-row align-middle">
            <span className="mr-2">Next</span>
            <svg
              className="w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default Trading;
