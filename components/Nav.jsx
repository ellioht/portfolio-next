"use client";

import React, { useEffect, useState } from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between text-center py-4 bg-white shadow w-full absolute px-4 2xl:px-60 xl:px-40">
        <div className="mb-2 sm:mb-0">
          <a href="#" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
            Elliot.
          </a>
        </div>
        <div>
          <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
            Work
          </a>
          <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
            Resume
          </a>
          <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
