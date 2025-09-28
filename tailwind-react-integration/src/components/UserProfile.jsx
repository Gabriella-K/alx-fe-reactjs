import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto mt-10">
      
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center">
        
        
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-32 h-32 rounded-full object-cover mb-4 hover:scale-110 transition-transform duration-300 ease-in-out"
        />

        
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
          Gabriella Ucyeye
        </h2>

        
        <p className="text-gray-500 mt-2 text-center">
          Software Engineer | React Enthusiast
        </p>

        
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Follow
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
