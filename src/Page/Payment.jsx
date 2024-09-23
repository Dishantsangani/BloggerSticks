import React from "react";

function Payment() {
  const handlesubmit = () => {
    e.preventdefault();
    alert("msg");
  };
  return (
    <>
      <div>
        {/* Article */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-1xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Payment Options for Bloggerstricks
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Enjoy peace of mind with our secure payment gateway, ensuring
                your financial information is protected.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Lifetime membership
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Unlock premium articles, guides, and tools designed to enhance
                  your blogging journey. Stay updated with the latest news,
                  tips, and tricks tailored for bloggers in the finance space.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-blue-500">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Exclusive Content Access
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Community Engagement
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Expert Webinars
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Monthly Newsletters
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Pay once, own it forever
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        $349
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        USD
                      </span>
                    </p>
                    <p className="mt-10 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Get access
                    </p>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Article */}

        {/* Payment */}
        <div className="bg-gray-50">
          <div className="bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
            <div className="w-full flex flex-col lg:flex-row">
              {/* Card Section */}
              <div className="lg:w-1/2 w-full px-3 mb-6 lg:mb-0">
                <form onSubmit={handlesubmit}>
                  {/* Adjust width and margin for smaller screens */}
                  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-3 items-center">
                      <div className="w-32">
                        <span className="text-gray-600 font-semibold">
                          Contact
                        </span>
                      </div>
                      <div className="flex-grow pl-3">
                        <span>Scott Windon</span>
                      </div>
                    </div>
                    <div className="w-full flex items-center">
                      <div className="w-32">
                        <span className="text-gray-600 font-semibold">
                          Billing Address
                        </span>
                      </div>
                      <div className="flex-grow pl-3">
                        <span>
                          123 George Street, Sydney, NSW 2000 Australia
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Payment Information */}
                  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                    <div className="w-full p-3 border-b border-gray-200">
                      <label
                        htmlFor="type1"
                        className="flex items-center cursor-pointer mb-5"
                      >
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 text-blue-500"
                          name="type"
                          id="type1"
                          defaultChecked=""
                        />
                        <img
                          src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                          alt="Card type"
                          className="h-6 ml-3"
                        />
                      </label>
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Name on card
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="John Smith"
                          type="text"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Card number
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Price
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="XXXXXX"
                          type="text"
                        />
                      </div>
                      <div className="mb-3 -mx-2 flex flex-wrap items-end">
                        <div className="px-2 w-full sm:w-1/3 md:w-1/4">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Expiration date
                          </label>
                          <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer">
                            <option value="01">01 - January</option>
                            <option value="02">02 - February</option>
                            <option value="03">03 - March</option>
                            {/* Add other months */}
                          </select>
                        </div>
                        <div className="px-2 w-full sm:w-1/3 md:w-1/4">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Year
                          </label>
                          <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer">
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            {/* Add other years */}
                          </select>
                        </div>
                        <div className="px-2 w-full sm:w-1/3 md:w-1/4">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Security code
                          </label>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="000"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-md px-3 py-2 font-semibold"
                  >
                    PAY NOW
                  </button>
                </form>
              </div>
              {/* Image Section */}
              <div className="lg:w-1/2 w-full h-64 lg:h-auto mt-6 lg:mt-0">
                {/* Ensure full width and spacing for small screens */}
                <img
                  className="w-full h-full bg-cover rounded-lg"
                  src="payment.png"
                  alt="Payment Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
