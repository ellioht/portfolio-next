"use client"

import React from "react";

const ProjectCard = ({ img, name, description, code, demo }) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 first:ml-0 link">
      <h1 className="my-5 text-2xl font-medium">{name ? name : "Project Name"}</h1>
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto h-64 border-2 border-gray-800"
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h2 className="text-md my-5 text-slate-700 font-medium">{description ? description : "Description"}</h2>
      <div className="flex gap-2">
        <button 
          className="bg-slate-800 rounded-full p-1 px-3 text-gray-200 hover:bg-slate-600"
          onClick={() => window.open(demo)}
        >Demo</button>
        <button 
          className="bg-slate-800 rounded-full p-1 px-3 text-gray-200 hover:bg-slate-600"
          onClick={() => window.open(code)}
        >Code</button>
      </div>
    </div>
  );
};

export default ProjectCard;
