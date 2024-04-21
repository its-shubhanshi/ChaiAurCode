// eslint-disable-next-line no-unused-vars
import React from "react";
import { useId } from "react";

const InputBoxx = ({
  label,
  amount,
  onAmountChange,
  onCurrancyChange,
  currancyOptions = [],
  selectCurrancy = "usd",
  amountDisable = false,
  currancyDisable = false,
  // eslint-disable-next-line no-unused-vars
  className = "",
}) => {
  const amounInputID = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          htmlFor={amounInputID}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amounInputID}
          className="outline-none w-full bg-transparent py-1.5 text-black"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrancy}
          disabled={currancyDisable}
          onChange={(e) => {
             onCurrancyChange(e.target.value);
          }}
        >
          {currancyOptions.map((currancy) => (
            // eslint-disable-next-line react/jsx-no-duplicate-props
            <option key={currancy} value={currancy}>
              {currancy}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBoxx;
