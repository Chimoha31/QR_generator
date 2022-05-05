import axios from "axios";
import React, { useState } from "react";
import { InputContext } from "./components/context/Context";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";

const App = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });

  const config = {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
  };
  
  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url,
  };
  
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParameters,
        config
        );
        setResponse(res.data.url);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    
    const value = {
      inputValue,
      setInputValue,
      getQrCode,
      response,
      error,
      loading,
    };
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
