import { useEffect, useState } from "react";

function useCurrancyInfoHook(currancy) {
  const [data, setData] = useState({});
  useEffect(() => {
      let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currancy}.json`;
      fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currancy]));
    console.log(data);
  }, [currancy, data]);
  console.log(data);
  return data;
}

export default useCurrancyInfoHook;
