// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="text-center p-5 bg-gray-800 text-3xl text-white h-[200px]">
      <h1>User : {userId}</h1>
    </div>
  );
};

export default User;
