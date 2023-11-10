import React from "react";

const SignIn = () => {
  return (
    <form className="w-full bg-black/30 h-full">
      <div className="flex flex-col items-center justify-center h-full py-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Sign In</h1>
          <h2 className="text-xl text-white font-bold">
            Please enter your credentials to proceed.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="flex flex-col items-center justify-center">
            <label className="text-white font-bold">Email</label>
            <input type="text" className="w-96 h-12 rounded-md mt-2" />
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <label className="text-white font-bold">Password</label>
            <input type="password" className="w-96 h-12 rounded-md mt-2" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <button className="w-96 h-12 rounded-md bg-white text-black font-bold">
            Sign In
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <h2 className="text-xl text-white font-bold">
            Don't have an account?{" "}
            <span className="text-yellow-400">Sign Up</span>
          </h2>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
