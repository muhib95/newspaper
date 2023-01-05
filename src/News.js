import React from "react";

const News = ({ ne }) => {
  const { title, link, details } = ne;

  return (
    <div>
      <div className="card w-96 bg-white shadow-xl">
        <figure className="px-10 pt-10">
          <img src={link} alt="newsimage" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-orange-400">{title}</h2>
          <p className="text-justify text-black">{details.slice(0, 300)}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
