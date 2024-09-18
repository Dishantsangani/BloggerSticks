import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Dashboard() {
  // Animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // API
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d6079402c7974ea9a048628d1fd9bf7e"
      )
      .then((res) => {
        setUser(res.data.articles);
        setTotalPosts(res.data.totalResults);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = user.slice(firstPostIndex, lastPostIndex);

  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <motion.section
        className="bg-white dark:bg-gray-900"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 py-4 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Bloggersticks: Your One-Stop for News and Blogs
            </h1>
            <p className="max-w-lg mx-auto mt-2 text-gray-500">
              Bloggersticks: The Future of News and Blogging is Here
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-6 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((item, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <motion.img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src={item.urlToImage}
                    alt={item.title}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        {item.author}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.source.name}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.publishedAt}
                </p>
                <h1
                  title={item.title}
                  className="mt-6 text-xl font-semibold text-gray-800 dark:text-white product-title"
                >
                  {item.title.substring(0, 30)}...
                </h1>
                <p
                  title={item.description || "No description available"}
                  className="text-sm text-gray-500 dark:text-gray-400 product-desc"
                >
                  {item.description
                    ? item.description.substring(0, 50)
                    : "No description available"}
                  ...
                </p>
              </motion.div>
            ))}
            <div className="flex justify-center mt-4">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={`mx-1 px-4 py-2 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 gap-5 bg-gray-100 p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
        {/* Insights */}
        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Insights</p>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Your views are up 400% since last month</p>
          </div>
          {/* Additional Insights */}
        </div>
        {/* Activity */}
        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Activity</p>
          {/* Activity Items */}
        </div>
        {/* Traffic Sources */}
        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Traffic Sources</p>
          {/* Traffic Sources Items */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
