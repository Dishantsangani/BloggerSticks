import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientText from "../Animations/GradientText/GradientText";
import FadeLoader from "react-spinners/FadeLoader";
import { SplitText } from "../Animations/SplitText";
import { BlurText } from "../Animations/BlurText";

function Finance() {
  // Animation
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const [fdata, setFdata] = useState([]);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage] = useState(9);
  const [totalPosts, setTotalPosts] = useState(0);
  // Loading(
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://finnhub.io/api/v1/news?category=general&token=crhe2j1r01qjv9rkl3e0crhe2j1r01qjv9rkl3eg"
      )
      .then((res) => {
        setFdata(res.data);
        setTotalPosts(res.data.length);
        setLoading(false);
      })
      .catch((err) => {
        console.log("This is a API Erorr", err);
        setLoading(false);
      });
  }, []);
  const lastPostIndex = currentPage * postperpage;
  const firstPostIndex = lastPostIndex - postperpage;
  const currentPosts = fdata.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(totalPosts / postperpage);
  const handlepagechange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <>
      <div>
        {/* Header */}
        <section className="bg-white dark:bg-gray-900">
          <motion.div
            className="container flex flex-col items-center mt-10 px-4 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} // Custom gradient colors
              animationSpeed={3} // Custom animation speed in seconds
              showBorder={false} // Show or hide border
              className="custom-class max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-4xl" // Add one or more custom classes
            >
              Expert guidance to make informed financial decisions.
            </GradientText>
            {/* <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
              Expert guidance to make informed
              <span className="text-blue-500"> financial decisions.</span>
            </h2> */}
            <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
              Bloggerstricks is a dedicated platform designed to provide
              comprehensive insights into financial reporting. Whether you're a
              seasoned professional or just starting your journey in finance,
              this website offers a wealth of information and resources.
            </p>
          </motion.div>
        </section>

        {/*Section 1 With Image  */}
        <section className=" dark:bg-gray-900">
          <motion.div
            className="container px-6 py-10 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <div className="lg:flex lg:-mx-6">
              <motion.div
                className="lg:w-3/4 lg:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
              >
                <img
                  className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div>
                  <p className="mt-6 text-sm text-blue-500 uppercase">
                    Want to know
                  </p>
                  <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                    SAT dismisses SEBI's order against Prannoy Roy, Radhika Roy
                    in insider trading case.
                  </h1>
                  <div className="flex items-center mt-6">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="knagar.png"
                      alt=""
                    />
                    <div className="mx-4 ">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        K.SheeraSagar
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        StockMarket Expert
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 bg-indigo-100 rounded-lg "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
              >
                <div>
                  <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                    Osel Devices IPO: Day 1 : Check for Subscription status,
                    GMP, key dates
                  </p>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div>
                  <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                    Pelatro IPO booked 0.43 times on Day 1, retail portion
                    subscribed 0.79 times
                  </p>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div>
                  <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                    Excellent Wires IPO: Latest GMP, steps to check allotment
                    status online
                  </p>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div>
                  <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                    ICICI Bank, HCL Tech...nearly 400 stocks hit 1-year highs;
                    check details
                  </p>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div>
                  <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                    Small-cap SME stock hits upper circuit. Rises 650% in
                    six-month post-listing
                  </p>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div>
                  <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                    American Airlines in talks to pick Citigroup over Barclays
                    for crucial card deal: Sources
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Update */}
        <div className="mx-auto my-6 pt-3 pb-3 drop-shadow-lg max-w-screen-sm rounded-lg bg-indigo-100 text-center lg:mb-8 mb-6">
          <h2 className="mb-2 text-xl sm:text-2xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <SplitText
              text="Latest Updates !"
              className="custom-class"
              delay={50}
            />
          </h2>
          <BlurText
            text="Stay informed about the latest trends and regulations in financial reporting."
            className="custom-class max-w-lg mx-auto mt-2 text-black text-xl "
            delay={40}
          />
          <p className="font-light text-sm sm:text-base text-gray-500 dark:text-gray-400"></p>
        </div>

        {/* API Response */}
        <section className="bg-white dark:bg-gray-900">
          <motion.div
            className="py-2 px-2 mx-auto max-w-full lg:max-w-screen-lg lg:py-4 lg:px-0" // Change lg:px-0
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <FadeLoader color={"#4299e1"} loading={true} size={50} />
              </div>
            ) : (
              <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
              >
                {currentPosts.map((item, index) => (
                  <article
                    key={index}
                    className="p-2 mb-4 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
                  >
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
                          {item.category}
                        </span>
                        <span className="text-xs sm:text-sm">
                          {item.datetime}
                        </span>
                      </div>
                      <h2 className="mb-1 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.headline}
                      </h2>
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
                ))}
              </motion.div>
            )}
            {currentPosts.length === 0 && !loading && (
              <div className="text-center text-gray-500">
                No content available at the moment.
              </div>
            )}

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
                  fdata.slice(lastPostIndex, lastPostIndex + postperpage)
                    .length === 0
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
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Finance;
