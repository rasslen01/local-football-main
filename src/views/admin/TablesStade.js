import React from "react";

// components


import GestionDesStades from "components/Cards/GestionDesStades";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <GestionDesStades />
        </div>
      </div>
    </>
  );
}