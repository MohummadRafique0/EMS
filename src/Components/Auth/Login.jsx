import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gray-900 items-center justify-evenly p-4">
      <div className="bg-gray-800 shadow-2xl rounded-xl border border-emerald-600 p-8 md:p-10 lg:p-12 xl:p-16 w-full max-w-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-400 mb-8">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-gray-700 border-2 border-emerald-600 py-3 px-4 text-lg font-medium rounded-lg placeholder:text-gray-400 text-white transition duration-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-700 border-2 border-emerald-600 py-3 px-4 text-lg font-medium rounded-lg placeholder:text-gray-400 text-white transition duration-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-white bg-emerald-600 hover:bg-emerald-700 font-semibold py-3 px-6 w-full text-lg rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
            Log In
          </button>
        </form>
      </div>
      <div className="bg-gray-800 rounded-lg p-4 mt-4 md:mt-0 w-full max-w-sm">
        <h3 className="text-xl font-bold text-emerald-400">Info Message</h3>
        <span className="text-gray-300 mt-2 font-semibold">
          Email for Employee = employee1/5@ems.com
          <p className="text-gray-300 font-semibold">
            Use employee 1 to 5 for better Experience
          </p>
        </span>
        <span className="text-gray-300 mt-2 font-semibold">
          Email for Admin = admin@ems.com
        </span>
        <p className="text-gray-300 font-semibold">Pass = 123</p>
        <span className="text-gray-300 mt-2 font-semibold">
          This is a demo application/Project for managing employee tasks. Please
          use the provided email and password to log in. Admin for
          AdminDashboard and Employee for Employee Dashboard.
        </span>
      </div>
    </div>
  );
}

export default Login;
