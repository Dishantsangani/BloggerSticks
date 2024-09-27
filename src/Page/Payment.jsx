import React, { useState } from "react";
import axios from "axios";
import { BlurText } from "../Animations/BlurText";
import SpotlightCard from "../Animations/SpotlightCard";
import TiltedScroll from "../Animations/TiltedScroll/TiltedScroll";
import BarLoader from "react-spinners/BarLoader";

function Payment() {
  const [loading, setLoading] = useState(false);

  const handlesubmit = async () => {
    setLoading(true);
    try {
      let response = await axios.post(
        "https://bloggerstricks-backend.onrender.com/payment"
      );
      if (response && response.status === 200) {
        setLoading(false);
        // Redirect to the Stripe checkout page
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <>
      <div>
        <TiltedScroll />
        {/* Article */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-1xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <BlurText
                  text="Payment Options for Bloggerstricks?!"
                  className="custom-class"
                  delay={50}
                />
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
              {/* Payment Box */}
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <SpotlightCard
                  className="custom-spotlight-card rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
                  spotlightColor="rgba(59, 130, 246, 0.5)"
                >
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
                    <button
                      onClick={() => handlesubmit()}
                      className="mt-10 block w-full rounded-md bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Pay Now
                    </button>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
                    </p>
                  </div>

                  <div className="flex justify-center mt-4">
                    <BarLoader color={"#4299e1"} loading={loading} size={50} />
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
        {/* Article */}
      </div>
    </>
  );
}

export default Payment;
