// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Github = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/hiteshChoudhary`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.followers);
        setdata(data);
      });
  }, []);
  return (
    <div className="text-center bg-rose-400 p-10 flex justify-center items-center flex-col-reverse text-white">
      <h1 className="text-3xl m-5">Github Followrs : {data.followers}</h1>
      <img src={data.avatar_url} alt="profile" className="rounded-full w-20  " />
    </div>
  );
};

export default Github;
