import React from "react";

function Community() {
  return (
    <>
      <div>
        <div className="relative mt-4 bg-slate-200 mx-auto flex flex-col px-4 sm:max-w-xl md:h-screen md:max-w-screen-xl md:flex-row">
          {/* Left Column */}
          <div className="mx-auto mt-10 w-full max-w-xl md:mt-36 lg:max-w-screen-xl">
            <div className="mb-16 lg:mb-0 lg:max-w-lg">
              <div className="mb-6 max-w-xl">
                <div></div>
                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                  Welcome <br />
                  To{" "}
                  <span className="inline-block text-blue-500">
                    Community Page
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ullam rem voluptatem, animi tempora expedita!Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Eos, consequuntur
                  quaerat! Optio.
                </p>
              </div>
            </div>
          </div>
          {/* /Left Column */}

          {/* Right Column */}
          <div className="xl:1/2 flex h-full w-full justify-end space-x-3 overflow-hidden px-2 lg:w-2/3">
            {/* Col 1 */}
            <div className="flex flex-col space-y-3 md:w-72">
              <div className="-mt-5 hidden h-40 flex-shrink-0 rounded-xl bg-indigo-50 md:block" />
              <div className="relative rounded-xl bg-white p-4 shadow-md">
                <p className="text-sm text-gray-600">
                  Ideally, countries formulate their foreign policy as best
                  leveraging the world with a view to promote their national
                  development
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt=""
                      src="jaishankar.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover"
                    />
                  </a>
                  <div className="ml-2 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-blue-500">
                      {" "}
                      S. Jaishankar{" "}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      {" "}
                      Minister of External Affairs{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl bg-blue-500 p-4 shadow-md">
                <div className="absolute -left-1 top-0 -z-10 h-5 w-5 skew-x-[28deg] bg-blue-500" />
                <p className="text-sm text-white">
                  It argues that this mishap was not caused due to rash driving
                  but was an episode signifying the liquidation of marginalised
                  people.
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt=""
                      src="kiran.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover"
                    />
                  </a>
                  <div className="ml-2 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-white">
                      {" "}
                      kiran desai{" "}
                    </span>
                    <span className="flex items-center text-xs text-white">
                      {" "}
                      Indian author{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl bg-white p-4 shadow-md">
                <p className="text-sm text-gray-600">
                  Stock Market Today: The Indian markets were trading muted
                  after opening in the red on Wednesday, as the momentum gained
                  from China's stimulus measures looked to be fading.
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt=""
                      src="abhinand.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover"
                    />
                  </a>
                  <div className="ml-2 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-blue-500">
                      {" "}
                      Abhinand Basavaraj{" "}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      {" "}
                      Indian Trader{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="-mt-10 hidden h-40 flex-shrink-0 rounded-xl bg-indigo-50 md:block" />
            </div>
            {/* Col 2 */}
            <div className="hidden w-72 flex-col space-y-3 lg:flex">
              <div className="-mt-10 hidden h-40 flex-shrink-0 rounded-xl bg-indigo-50 md:block" />
              <div className="relative rounded-xl bg-white p-4 shadow-md">
                <p className="text-sm text-gray-600">
                  PM Modi hosts roundtable with tech CEOs to boost India-US
                  collaboration in AI, Quantum Computing
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt=""
                      src="sunder.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover"
                    />
                  </a>
                  <div className="ml-2 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-blue-500">
                      {" "}
                      Sundar Pichai{" "}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      {" "}
                      CEO of Google{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl bg-white p-4 shadow-md">
                <p className="text-sm text-gray-600">
                  He owns about 12% of Tesla excluding options, but has pledged
                  more than half his shares as collateral for personal loans of
                  up to $3.5 billion.
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt=""
                      src="elon.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover"
                    />
                  </a>
                  <div className="ml-2 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-blue-500">
                      {" "}
                      Elon Musk{" "}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      {" "}
                      CEO of Tesla Motors{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl bg-white p-4 shadow-md">
                <p className="text-sm text-gray-600">
                  The Karnataka chief minister had challenged the legality of
                  Gehlot's sanction for the investigation against him in the
                  alleged irregularities in the allotment of 14 sites to his
                  wife
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt=""
                      src="/images/Bm8G0V9ytRbCalT-KOSMT.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover"
                    />
                  </a>
                  <div className="ml-2 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-blue-500">
                      {" "}
                      Simon Lewis{" "}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      {" "}
                      Head of marketing at Resnet{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="-mt-10 hidden h-40 flex-shrink-0 rounded-xl bg-indigo-50 md:block" />
            </div>
          </div>
          {/* /Right Column */}
        </div>
        {/* Article Writen Content */}
        <div className="max-w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          {/* Flex container to inline both content blocks */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* First Content Block - Quantum Computing */}
            <div className="max-w-2xl  mx-auto p-4 md:p-6 bg-slate-200 drop-shadow-lg rounded-lg shadow-md dark:bg-gray-800">
              <img
                className="object-cover w-full h-64 md:h-80"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
              />
              <div className="p-6">
                <div>
                  <a
                    href="#"
                    className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                    tabIndex={0}
                    role="link"
                  >
                    Quantum Computing: A New Frontier in Technology
                  </a>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Quantum computing uses quantum bits, or qubits, to process
                    information in ways classical computers cannot.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <img
                      className="object-cover h-10 rounded-full"
                      src="Dishant.png"
                      alt="Avatar"
                    />
                    <a
                      href="#"
                      className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                      tabIndex={0}
                      role="link"
                    >
                      Dishant Sangani
                    </a>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                      21 SEP 2015
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Content Block - Accessibility Tools with merged right-side content */}
            <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  Mar 10, 2019
                </span>
                <a
                  className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                  tabIndex={0}
                  role="button"
                >
                  Design
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                  tabIndex={0}
                  role="link"
                >
                  Accessibility tools for designers and developers
                </a>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque.
                </p>

                {/* Merged Right-Side Content (Input Form) */}
                <div className="p-6">
                  <div className="flex w-full flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl">
                    <div className="relative mt-2 w-full">
                      <input
                        type="text"
                        id="article-title"
                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label
                        htmlFor="article-title"
                        className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                      >
                        Enter Article Title
                      </label>
                    </div>
                    <div className="relative mt-2 w-full">
                      <input
                        type="text"
                        id="article-description"
                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label
                        htmlFor="article-description"
                        className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                      >
                        Enter Article Description
                      </label>
                    </div>
                    <button className="rounded-lg bg-blue-600 py-3 font-bold text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Community;
