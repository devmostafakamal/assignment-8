import React from "react";
import { useLoaderData } from "react-router";

function Blogs() {
  const datas = useLoaderData();
  // console.log(datas);
  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl font-bold">Blogs</h2>
      <p className="text-center mt-5">
        Lets explore some basic concept that make you a good devloper
      </p>
      <div className="gap-4 space-y-4 mt-6">
        {datas.map((data, index) => (
          <div key={index} className=" rounded-2xl bg-white gap-4 p-5 ">
            <h2 className="text-2xl font-semibold mt-4 border-b border-dashed pb-2">
              {data.question}
            </h2>
            <p className="mt-4 text-gray-400 border-b border-dashed pb-2">
              Answer: {""}
              {data.answer}
            </p>
            <p className="mt-4">{data.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
