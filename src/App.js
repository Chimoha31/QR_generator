import React, { useState } from "react";
import { InputContext } from "./components/context/Context";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";

const App = () => {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });

  const value = {
    inputValue,
    setInputValue
  }

  const config = {
    headers: {Authorization: "Bearer 095ff770-cc10-11ec-b8cd-09f1665d998c"}
  }

  const bodyParameters = {
    "colorDark": inputValue.color,
    "qrCategory": "url",
    "text": inputValue.url
  }

  const getQrCode = async () => {
    const data = await fetch()
  }

  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-200 h-screen pt-36 px2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
