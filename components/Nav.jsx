"use client";

import React, { useEffect, useState } from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between text-center py-2 bg-slate-800 text-gray-100 shadow w-full absolute 2xl:px-60 xl:px-40">
        <div className="mb-2 sm:mb-0 font-semibold">
          <a href="#" className="text-2xl no-underline">
            Elliot.
          </a>
        </div>
        <div className="flex gap-4 font-semibold">
          <a href="#" className="text-lg no-underline ml-2 px-2 p-1 hover:text-slate-800 rounded-md hover:bg-gray-200">
            Work
          </a>
          <a href="#" className="text-lg no-underline ml-2 px-2 p-1 hover:text-slate-800 rounded-md hover:bg-gray-200">
            CV
          </a>
          <a href="#" className="text-lg no-underline ml-2 px-2 p-1 hover:text-slate-800 rounded-md hover:bg-gray-200">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
