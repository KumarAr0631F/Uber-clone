import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const submithandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
      fullName: {
        firstname: firstname,
        lastname: lastname,
      }
    })

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            alt=""
          />
          <form onSubmit={(e) => submithandler(e)}>
            <h3 className="text-lg font-medium mb-2">What's you name</h3>
            <div className="flex gap-3">
              <input
                className="bg-[#eeeeee] mb-7 border rounded px-4 py-2 w-1/2 text-lg placeholder:text-base"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                placeholder="first name"
              />
              <input
                className="bg-[#eeeeee] mb-7 border rounded px-4 py-2 w-1/2 text-lg placeholder:text-base"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                placeholder="last name"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">What's you email</h3>
            <input
              className="bg-[#eeeeee] mb-7 border rounded px-4 py-2 w-full text-lg placeholder:text-base"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@gmail.com"
            />
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-7 border rounded px-4 py-2 w-full text-lg placeholder:text-base"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />

            <button className="bg-[#111] mb-2 font-semibold rounded px-4 py-2 w-full text-white placeholder:text-base">
              Signup
            </button>
          </form>

          <p>
            Already an account?{" "}
            <Link to={"/captain-login"} className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignUp;
