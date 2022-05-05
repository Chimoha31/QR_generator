import React, { useContext } from "react";
import { InputContext } from "./context/Context";

const InputField = () => {
  const {inputValue, setInputValue} = useContext(InputContext);

  const handleChange = (e) => {
    setInputValue({...inputValue, url: e.target.value})
  }

  console.log(inputValue);

  return (
    <div>
      <label className="font-semibold text-md">Your URL</label>
      <input
        type="url"
        className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"
        placeholder="https://ezample.com"
        value={inputValue.url}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
