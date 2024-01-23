import React from "react";
import InputField from "./InputField";

function Form() {
  return (
    <div className="flex flex-wrap justify-center gap-2 w-4/5 h-3/5 m-auto bg-white">
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
    </div>
  );
}

export default Form;
