import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Result } from "../_models/result.dto";

import { useAppDispatch } from "../_redux/hooks";
import { useLoginMutation } from "../_redux/services/authService";
import { useRegisterUserMutation } from "../_redux/services/userService";
import { updateTokens } from "../_redux/slice/tokensSlice";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("joe");
  const [password, setPassword] = useState("test");

  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();
  const [registerUser] = useRegisterUserMutation();

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    login({
      username,
      password,
    }).then((res) => {
      if ("data" in res) {
        dispatch(updateTokens(res.data.data));
        navigate("/home");
      } else if ("data" in res.error) {
        alert((res.error.data as Result<any>).message);
      }
    });
  }

  function createAccount() {
    registerUser({}).then((res) => {
      if ("data" in res) {
        alert(res.data.message);
      }
    });
  }

  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-gradient-to-b from-blue-500 to-blue-400">
      <div className="z-50 mx-0 min-h-screen justify-center sm:flex sm:flex-row">
        <div className="z-10 flex flex-col self-center p-10 sm:max-w-5xl xl:max-w-2xl">
          <div className="hidden flex-col self-start text-white lg:flex">
            <h1 className="mb-3 mt-3 text-5xl font-bold">
              Hi ? Welcome Back !
            </h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="z-10 flex justify-center self-center">
          <div className="w-100 mx-auto rounded-2xl bg-white p-12">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Sign In</h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <form onSubmit={submit}>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-gray-700">
                    UserName
                  </label>
                  <input
                    id="username"
                    className="w-full bg-white rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-blue-400 focus:outline-none"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    className="w-full bg-white content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-blue-400 focus:outline-none"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full cursor-pointer justify-center rounded-full bg-blue-400 p-3 font-semibold tracking-wide text-gray-100 shadow-lg transition duration-500 ease-in hover:bg-blue-500"
                  >
                    Sign in
                  </button>
                </div>
                <hr />
                <div>
                  <button
                    onClick={createAccount}
                    type="button"
                    className="flex w-full cursor-pointer justify-center rounded-full bg-green-400 p-3 font-semibold tracking-wide text-gray-100 shadow-lg transition duration-500 ease-in hover:bg-green-500"
                  >
                    Create New Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
