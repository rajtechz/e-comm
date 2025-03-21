import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/assets/login.webp";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          action=""
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">KD-Styles</h2>
          </div>
          <h2>Hey there!👋</h2>
          <p className="text-center mb-6">
            Enter your email and password to login{" "}
          </p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2
          rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign in
          </button>
          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={login}
            alt="log in to account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
