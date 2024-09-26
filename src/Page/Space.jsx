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
              </h1>
              <p className="mt-6 text-gray-800 dark:text-gray-300">
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

        {/*Content*/}
        <div className="px-5 flex text-center">
          <div className="px-2 sm:px-4 md:px-8 py-8 mx-auto mt-5 mb-5 rounded-xl drop-shadow-xl bg-[#799cc7] sm:max-w-lg md:max-w-full lg:max-w-screen-xl lg:py-20">
            <motion.div
              className="flex flex-col lg:flex-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <motion.div
                className="lg:w-1/2 lg:pr-5 mb-4 lg:mb-0"
                variants={fadeIn}
              >
                <h2 className="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                  Astronauts may need
                  <br className="hidden md:block" />
                  medical evacuation from
                  <span className="inline-block text-deep-purple-accent-400">
                    one-third of moon missions
                  </span>
                </h2>
              </motion.div>
              <motion.div className="lg:w-1/2" variants={fadeIn}>
                <p className="text-lg font-medium text-gray-900">
                  One in three missions to the moon is at risk of requiring an
                  astronaut to be medically evacuated back to Earth. This
                  process would be difficult and costly – a medical emergency in
                  space is an altogether tougher situation than one on Earth –
                  but a new tool to calculate the probability of such crises
                  could help us prevent them.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

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
                className="absolute w-full bg-blue-500 -z-10 md:h-96 rounded-2xl"
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
        <section className="py-2 px-3">
          {/* Title */}
          <div className="mx-auto my-6 pt-3 pb-3 drop-shadow-lg max-w-screen-sm rounded-lg bg-blue-200 text-center lg:mb-8 mb-6">
            <h2 className="mb-2 text-xl sm:text-2xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Explore the {""}
              <SplitText text="Cosmos !" className="custom-class" delay={50} />
            </h2>
            <BlurText
              text="Dive into a universe of information and insights about space, science, and technology."
              className="custom-class max-w-lg mx-auto mt-2 text-black text-xl "
              delay={40}
            />
            <p className="font-light text-sm sm:text-base text-gray-500 dark:text-gray-400"></p>
          </div>

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
                      <p
                        title={item.summary}
                        className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500  product-desc"
                      >
                        {item.summary.substring(0, 45)} ...
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
