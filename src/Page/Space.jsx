import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlurText } from "../Animations/BlurText";
import BeatLoader from "react-spinners/BeatLoader";
import { SplitText } from "../Animations/SplitText";
function Space() {
  // Animation
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [sdata, setSdata] = useState([]);
  const [loading, setLoading] = useState(false);
  //   API Calling
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.spaceflightnewsapi.net/v4/blogs")
      .then((res) => {
        setSdata(res.data.results);
        setLoading(false);
      })

      .catch((err) => {
        console.log("This is a API Error", err);
      });
  }, []);

  return (
    <>
      <div>
        {/*  */}
        <section className="bg-white dark:bg-gray-900">
          <motion.div
            className="container px-6 py-16 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                <BlurText
                  text="Explore the universe of space news and trading insights."
                  className="custom-class text-3xl"
                  delay={50}
                />
                {/* Explore the
                <span className="text-blue-500"> universe of space</span> news
                and trading insights. */}
              </h1>
              <p className="mt-6 text-gray-500 dark:text-gray-300">
                Dive into engaging articles that cover the latest developments
                in space exploration, satellite technology, and astronomical
                discoveries
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="earth.png"
              />
            </div>
          </motion.div>
        </section>
        {/*  */}
        <hr className="h-px my-2 bg-black border-0 dark:bg-gray-700" />
        {/* Section 1 */}
        <section className="bg-white dark:bg-gray-900">
          <motion.div
            className="max-w-6xl px-6 py-10 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
              <motion.div
                className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              />
              <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img
                  className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                  src="somanath.png"
                  alt="client photo"
                />
                <motion.div
                  className="mt-2 md:mx-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  <div>
                    <p className="text-xl font-medium tracking-tight text-white">
                      Dr. S. Somanath
                    </p>
                    <p className="text-blue-200 ">
                      Chairman of the Indian Space Research Organization
                    </p>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                    Dr. S. Somanath is the Chairman of the Indian Space Research
                    Organisation (ISRO), known for his pivotal role in advancing
                    India's space exploration and satellite launch capabilities.
                    A distinguished aerospace engineer, Dr. Somanath has
                    contributed to numerous key missions, including the
                    development of India's launch vehicles.
                  </p>
                </motion.div>
              </div>
            </main>
          </motion.div>
        </section>
        {/* Section2 */}
        <section className="py-14">
          <h1 className="mb-12 text-center font-sans text-5xl font-bold">
            Explore the {""}
            <SplitText text="Cosmos" className="custom-class" delay={50} />
          </h1>
          <p className="text-center text-lg">
            Dive into a universe of information and insights about space,
            science, and technology.
          </p>
          {loading ? (
            <div className="flex justify-center items-center">
              <BeatLoader color={"#4299e1"} loading={loading} size={50} />
            </div>
          ) : (
            <div className="mx-auto grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 ">
              {sdata.map((item, index) => (
                <div key={index}>
                  <article className="group bg-blue-50 h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
                    <img
                      className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                      src={item.image_url}
                      alt="image error"
                    />
                    <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                      {item.news_site}
                    </h2>
                    <div className="py-1 px-6">
                      <h1
                        title={item.title}
                        className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800 product-title"
                      >
                        {item.title.substring(0, 20)} ...
                      </h1>
                      <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                        {item.summary}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                      <div className="flex flex-wrap text-sm text-gray-500">
                        <span className="mr-1">{item.published_at}</span>
                      </div>
                      <Link
                        className="text-blue-500 flex items-center md:mb-2 lg:mb-0"
                        to={item.url}
                        target="_blank"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          cursor="Pointer"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Space;
