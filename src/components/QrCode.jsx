import React, { useContext } from "react";
import { InputContext } from "./context/Context";

const QrCode = () => {
  const { response, error, loading } = useContext(InputContext);

  if(loading) {
    return(
      <div className="animate-pulse flex flex-col items-center justify-center px-10 gap-3">
        <div className="h-32 2-full bg-gray-300"></div>
        <div className="h-8 2-full bg-gray-300"></div>
      </div>
    );
  }

  if(error) {
    return <div className="text-gray-500 flex items-center">
      Sorry, something went wrong. Try again!
    </div>
  }

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center">
        {response ? (  <div>
        <img
          className="w-48"
          src={response}
          alt="qrCode"
        />
        <button className="bg-blue-300 text-white mt-2 px-4 py-1 w-full">
          Download
        </button>
      </div>) : (
        <div className="text-gray-500">Your QrCode will showing here...</div>
      )}
    
    </div>
  );
};

export default QrCode;
