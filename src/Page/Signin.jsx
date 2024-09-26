import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';
import ToastSuccess from "../Component/Toast";
function Signin() {
  const navigate = useNavigate();
  // FormdataState
  const [formdata, setFormData] = useState({ email: "", password: "" });
  // Show Errors
  const [error, setError] = useState({});

  // Onchange
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  // Validation
  const Validation = () => {
    // e.preventDefault();
    const validerror = {};
    // Email Validation
    if (!formdata.email.trim()) {
      validerror.email = "Email Is Required !";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      validerror.email = "Email Is Not Valid";
    }
    // Password Validation
    if (!formdata.password.trim()) {
      validerror.password = "Password Is Required !";
    } else if (formdata.password.length < 8) {
      validerror.password = "Password Should Be At Least 8 Char ";
    }
    // Update State Wth Error
    setError(validerror);
  };

  // API Calling
  async function handlesubmit(e) {
    e.preventDefault();
    Validation();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: formdata.email,
        password: formdata.password,
      });

      const token = response.data.token;
      localStorage.setItem("Token", token);
      ToastSuccess();
      navigate("/home");
    } catch (err) {
      console.log("This is A Api Error", err);
    }
  }
  const is_Logged = localStorage.getItem("Token");

  useEffect(() => {
    if (is_Logged) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <div className="w-full mt-20  drop-shadow-2xl max-w-md  sm:max-w-sm p-7 m-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center">
          <img
            className="w-auto h-10 sm:h-14"
            src="logo.png"
            alt="BloggerStricks Logo"
          />
        </div>
        <form className="mt-4" onSubmit={handlesubmit}>
          <div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600" />
              <p className="text-sm text-center text-gray-800 uppercase dark:text-gray-400 hover:underline">
                Welcome To BloggerStricks
              </p>
              <span className="w-1/5 border-b dark:border-gray-400" />
            </div>
            <label
              htmlFor="Email"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handlechange}
              value={formdata.email}
              placeholder="Enter Your Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {error.email && <span className="text-red-500">{error.email}</span>}
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              onChange={handlechange}
              value={formdata.password}
              placeholder="Enter Your Password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {error.password && (
              <span className="text-red-600">{error.password}</span>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
