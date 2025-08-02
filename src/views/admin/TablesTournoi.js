import React from "react";

// components


import GestionDesTournoi from "components/Cards/GestionDesTournoi";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <GestionDesTournoi />
        </div>
      </div>
    </>
  );
}