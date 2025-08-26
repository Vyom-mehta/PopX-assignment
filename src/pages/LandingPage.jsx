import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-5">
      <div className="w-[375px] h-[812px] bg-white rounded-lg shadow-mobile flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-center p-4 border-b border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 py-8 flex flex-col justify-center">
          {/* Welcome Content */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              Welcome to PopX
            </h1>
            <p className="text-gray-600 text-base leading-relaxed px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/signup")}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;