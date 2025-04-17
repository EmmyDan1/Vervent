import React from "react";
import Button from "./Button";

function SubHeader() {
  return (
    <div className="flex flex-col bg-black opacity-85 w-full text-white px-4 py-4  md:flex-row md:items-center md:justify-center">
      <p>
        🔔 Happening Now: Verizon Device Protection Open Enrollment Ends 5/26
      </p>
      <Button className="w-32 text-white px-3 py-1 border border-white  ml-3  ">
        Learn More
      </Button>
    </div>
  );
}

export default SubHeader;
