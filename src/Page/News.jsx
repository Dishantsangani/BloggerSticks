import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import ShinyText from "../Animations/ShinyText/ShinyText";
import StarBorder from "../Animations/StarBorder/StarBorder";
import { Navigate, useNavigate } from "react-router-dom";

function News() {
  const navigate = useNavigate();
  //  Animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };
  // API
  const [User, setdata] = useState([]);
  // Paggination State
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage] = useState(6);
  const [totalPosts, setTotalPosts] = useState(0);
  // Loading
  const [loading, setLoading] = useState(false);
  // API Calling
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d6079402c7974ea9a048628d1fd9bf7e"
      )
      .then((res) => {
        setdata(res.data.articles);
        setTotalPosts(res.data.totalResults);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);

  const lastPostIndex = currentPage * postperpage;
  const firstPostIndex = lastPostIndex - postperpage;
  const currentPosts = User.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(totalPosts / postperpage);

  const handlepagechange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <>
      <div className="container px-8 mt-5">
        {/* API Data */}
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
                <ShinyText
                  text="Your One-Stop for News and"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
                <span className="text-"> Headlines</span>
              </h1>
              <p className="max-w-lg mx-auto mt-2 text-gray-500">
                Bloggersticks: The Future of News and Headlines is Here
              </p>
            </div>
            {/* API Data */}
            {loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <HashLoader color={"#4299e1"} loading={true} size={150} />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 mt-8 md:mt-6 md:grid-cols-2 lg:grid-cols-3 ">
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
                        alt="ApiImageError"
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
                    <h2
                      title={item.title}
                      className="mt-6 text-xl font-semibold text-gray-800 dark:text-white product-title"
                    >
                      {item.title.substring(0, 30)}...
                    </h2>
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
              </div>
            )}
          </div>
        </motion.section>
        {/* API Data */}
        {/* Paggination */}
        <div className="flex justify-center mb-4 mt-2">
          <motion.button
            onClick={() => handlepagechange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-900 hover:text-white px-3"
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
              User.slice(lastPostIndex, lastPostIndex + postperpage).length ===
                0
            }
            className="bg-blue-600 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-blue-500 hover:text-white px-3"
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
        {/* Paggination */}
        {/* Article Part */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl bg-indigo-200 rounded-lg sm:ml-2 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                June 04, 2024 11:59 am IST
              </p>
              <div className="mb-3">
                <p
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                    Miracles in Medicine by author Roopa Pai looks at the
                    evolution of the medical field
                  </p>
                </p>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                Author Roopa Pai talks about her latest book Miracles in
                Medicine, a delightful look at medical science for both young
                and old
              </p>
              <div className="flex items-center">
                <a href="/" aria-label="Author" className="mr-3">
                  <motion.img
                    alt="avatar"
                    src="roopapai.png"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </a>
                <div>
                  <p
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400 sm:justify-center"
                  >
                    Roopa Pai
                  </p>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author and journalist
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col space-y-8 lg:col-span-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  September 09, 2024 08:23 pm IST
                </p>
                <div className="mb-3">
                  <p
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                      EVs to reach cost parity with ICE in 2 years: Gadkari
                    </p>
                  </p>
                </div>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                  It is for the Finance and Heavy Industries Ministries to
                  decide if incentives need to be given to EVs, Mr. Gadkari adds
                </p>
                <div className="flex items-center">
                  <p aria-label="Author" className="mr-3">
                    <motion.img
                      alt="avatar"
                      src="nitin.png"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </p>
                  <div>
                    <p
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Nitin Gadkari
                    </p>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Minister of Road Transport and Highways of India
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  18 Mar 2020
                </p>
                <div className="mb-3">
                  <p
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                      Wang, Doval agree to work for improvement of ties: Chinese
                      Foreign Ministry
                    </p>
                  </p>
                </div>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                  Both parties expressed the belief that the stability of the
                  China-India relations is in the fundamental and long-term
                  interests of the two peoples and conducive to regional peace
                  and development.
                </p>
                <div className="flex items-center">
                  <p aria-label="Author" className="mr-3">
                    <motion.img
                      alt="avatar"
                      src="ajit.png"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </p>
                  <div>
                    <p
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Ajit Doval
                    </p>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      National Security Advisor of India
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Article Part */}
        {/* Testimonal */}
        <section className="bg-white dark:bg-gray-900">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.main
              className="relative z-10 mt-8 md:flex md:items-center xl:mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <motion.div
                className="absolute w-full bg-black -z-10 md:h-96 rounded-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              />
              <div className="w-full p-6 bg-black md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <motion.img
                  className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                  src="sjai.png"
                  alt="client photo"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                />
                <div className="mt-2 md:mx-6">
                  <div>
                    <p className="text-xl font-medium tracking-tight text-white">
                      Dr. S. Jaishankar
                    </p>
                    <p className="text-white ">Minister of External Affairs</p>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                    Dr. S. Jaishankar, India’s Minister of External Affairs, is
                    a seasoned diplomat with a distinguished career spanning
                    over four decades. One of his most notable moments came
                    during his tenure as Foreign Secretary when he played a key
                    role in the successful negotiation of the U.S.-India Civil
                    Nuclear Agreement, which marked a major milestone in
                    India-U.S. relations.
                  </p>
                </div>
              </div>
            </motion.main>
          </motion.div>
        </section>
        {/* Testimonal */}
        {/* Content Article */}
        <div className="px-2 py-8 mx-auto mt-4 bg-purple-200 rounded-md sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
          <motion.div
            className="flex flex-col lg:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.div className="lg:mb-0 lg:w-1/2 lg:pr-5" variants={fadeIn}>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                A Muslim girl survivor’s
                <br className="hidden md:block" />
                account of the hours before{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  the 2002 Gujarat riots
                </span>
              </h2>
            </motion.div>
            <motion.div className="lg:w-1/2" variants={fadeIn}>
              <p className="text-base text-gray-700">
                On any given day in Jasmine, if we stand on our toes and crane
                our necks past the balcony, we can see the borders of the slum
                where Gulshan lives. The slum stretches along the great river
                Sabarmati, and where it ends marks the borderland between
                Khanpur and the neighbouring Shahpur. Small pockets of
                working-class Hindus and Muslims cohabit in these borderlands.
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* Article Part2 */}
        <div className="py-8 mx-auto sm:max-w-xl   lg:max-w-screen-xl md:px-2 lg:px-8 lg:py-4">
          <motion.div
            className="mb-10 border-t border-b divide-y"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Article 1 */}
            <motion.div
              className="grid py-10 sm:grid-cols-3"
              variants={fadeInUp}
            >
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    Aditya Sinha
                  </p>
                  <p className="text-gray-600">5 Jan 2020</p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                  <p
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                      China clout in GenAI patents
                    </p>
                  </p>
                </div>
                <p className="text-gray-700">
                  By Aditya Sinha & Aasheerwad Dwivedi, In 1980, a small,
                  nondescript garage in Palo Alto became the birthplace of what
                  would eventually transform into Silicon Valley...
                </p>
              </div>
            </motion.div>

            {/* Article 2 */}
            <motion.div
              className="grid py-8 sm:grid-cols-3"
              variants={fadeInUp}
            >
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    Arundhati Roy
                  </p>
                  <p className="text-gray-600">15 Sep 2020</p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                  <p
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                      The Ministry of Utmost Happiness
                    </p>
                  </p>
                </div>
                <p className="text-gray-700">
                  The novel weaves together the stories of people navigating
                  some of the darkest and most violent episodes of modern Indian
                  history...
                </p>
              </div>
            </motion.div>

            {/* Article 3 */}
            <motion.div
              className="grid py-8 sm:grid-cols-3"
              variants={fadeInUp}
            >
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    Jhumpa Lahiri
                  </p>
                  <p className="text-gray-600">28 Dec 2020</p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                  <p
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                      The Third and Final Continent
                    </p>
                  </p>
                </div>
                <p className="text-gray-700">
                  I had assumed Mrs. Croft was in her eighties, perhaps as old
                  as ninety. I had never known a person who had lived for over a
                  century...
                </p>
              </div>
            </motion.div>

            {/* Article 4 */}
            <motion.div
              className="grid py-8 sm:grid-cols-3"
              variants={fadeInUp}
            >
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    Amitav Ghosh
                  </p>
                  <p className="text-gray-600">1 Sep 2020</p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                  <p
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                      Ever Green – Saving Big Forests to Save the Planet
                    </p>
                  </p>
                </div>
                <p className="text-gray-700">
                  The world’s megaforests – in Siberia, Congo, North America and
                  the Amazon – are vital to the planet’s health and future of
                  humans...
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Connect With App Part */}
        <motion.div
          className="container rounded-lg flex flex-col items-center px-4 mx-auto text-center mb-7 bg-green-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-2xl mt-5 font-bold tracking-tight text-black xl:text-3xl dark:text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            Join our community of news enthusiasts today!
          </motion.h2>
          <motion.p
            className="block max-w-4xl mt-4 text-gray-700 dark:text-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            BloggerSticks is a dynamic news website dedicated to delivering the
            latest headlines and in-depth analysis on
            <br /> various topics, including politics, technology,
            entertainment, and health.
          </motion.p>
          <motion.div
            className="mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <StarBorder
              as="button"
              className="custom-class mb-4"
              color="black"
              speed="5s"
            >
              <button className="flex" onClick={() => navigate("/community")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 me-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                Join our community
              </button>
            </StarBorder>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default News;
