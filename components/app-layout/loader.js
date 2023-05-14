import React from "react";

const Loader = () => (
  <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-75">
    <div className="flex items-center space-x-2 text-blue-600">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  </div>
);

export default Loader;
