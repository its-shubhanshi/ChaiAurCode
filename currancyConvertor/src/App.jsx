import "./App.css";
import InputBoxx from "./components/InputBoxx";
import { useState } from "react";
import useCurrancyInfoHook from "./hooks/useCurrancyInfoHook";

function App() {
  const [amount, setAmounnt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);
  const currancyInfo = useCurrancyInfoHook(from);
  const options = Object.keys(currancyInfo);

  const convertSwap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmounnt(convertedAmount);
  };
  const convert = () => {
    setconvertedAmount(amount * currancyInfo[to]);
  };
  return (
    <>
      <div className="w-screen h-screen flex flex-wrap justify-center items-center bg-gray-900">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBoxx
                  label="From"
                  amount={amount}
                  currancyOptions={options}
                  // eslint-disable-next-line no-unused-vars
                  onCurrancyChange={(currancy) => setFrom(currancy)}
                  onAmountChange={(amount) => setAmounnt(amount)}
                  selectCurrancy={from}
                  amountDisable={false}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={convertSwap}
                >
                  {" "}
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBoxx
                  label="To"
                  amount={convertedAmount}
                  currancyOptions={options}
                  onCurrancyChange={(currancy) => setTo(currancy)}
                  selectCurrancy={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
