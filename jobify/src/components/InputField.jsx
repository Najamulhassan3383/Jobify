import React from "react";

function InputField() {
  return (
    <div className="">
      <label
        htmlFor="UserEmail"
        className="block text-lg font-medium text-white"
      >
        {" "}
        Email{" "}
      </label>

      <input
        type="email"
        id="UserEmail"
        placeholder="john@rhcp.com"
        className="mt-2 w-full rounded-md border-gray-200 shadow-sm text-xl p-2 "
      />
    </div>
  );
}

export default InputField;
