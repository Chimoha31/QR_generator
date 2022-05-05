import React, { useContext } from "react";
import { InputContext } from "./context/Context";
import InputColor from "./InputColor";
import InputField from "./InputField";

const InputForm = () => {
  const {getQrCode, inputValue} = useContext(InputContext);

  const handleClick = () => {
    getQrCode();
  }

  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button
        className="bg-blue-300 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-blue-400 disabled:bg-gray-300"
        onClick={handleClick}
        disabled={!inputValue.url}
      >
        Generate QrCode
      </button>
    </div>
  );
};

export default InputForm;
