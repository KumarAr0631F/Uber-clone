import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  
    const submithandler = (e) => {  
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password,
      });
      
      setEmail("");
      setPassword("");
      
    }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <form onSubmit={(e) => submithandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's you email</h3>
          <input
            className="bg-[#eeeeee] mb-7 border rounded px-4 py-2 w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="example@gmail.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 border rounded px-4 py-2 w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="password"
          />

          <button className="bg-[#111] mb-2 font-semibold rounded px-4 py-2 w-full text-white placeholder:text-base">
            Login
          </button>
        </form>

        <p>
          Join a fleet?{" "}
          <Link to={"/captain-signup"} className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to={"/login"}
          className="bg-[#10b461] flex items-center justify-center mb-2 font-semibold rounded px-4 py-2 w-full text-white placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
