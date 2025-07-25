import React from "react";

// components

import GestionDesUtilisateurs from "components/Cards/GestionDesUtilisateurs";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <GestionDesUtilisateurs color="dark" />
        </div>
      </div>
    </>
  );
}
