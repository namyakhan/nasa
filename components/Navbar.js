import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-center lg:justify-between pt-5 lg:pt-8">
      <div className="flex flex-col items-center">
        <img src="/images/nasa-logo.svg" alt="logo" />
        <h6>namya</h6>
      </div>
      <div className="mt-3 md:mt-0 flex flex-row items-center justify-center space-x-1">
        <h3>Astronomy Picture of the Day</h3>
        <img
          src="/images/astronaut.svg"
          alt="logo"
          className="hidden md:block md:w-[85px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
