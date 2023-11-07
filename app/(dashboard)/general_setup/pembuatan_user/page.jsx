"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import dynamic from "next/dynamic";
import HorizentalWizard from "@/components/partials/froms/HorizentalWizard"

const PembuatanUser = () => {
  const handleChange = (event) => {
    setTableName(event.target.value);
  };
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1 gap-5 py-5">
          <HorizentalWizard />
      </div>
    </div>
  );
};

export default PembuatanUser;
