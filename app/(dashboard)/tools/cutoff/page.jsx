"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import dynamic from "next/dynamic";
const Table = dynamic(() => import("@/components/partials/table/TablePagination"));
import Flatpickr from "react-flatpickr";

const CutOff = () => {
  const [tableName, setTableName] = useState("Data");
  const [picker2, setPicker2] = useState(new Date());

  const handleChange = (event) => {
    setTableName(event.target.value);
  };
  return (
    <div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 py-5">
        <Card title="Cutoff / Reset Cutoff">
          <div className="grid grid-rows-1 grid-cols-12 gap-3">
            <div className="row-start-0 col-span-2">
              <label className="form-label ">Tanggal</label>
            </div>
            <div className="row-start-0 col-span-6">
              <Flatpickr
                className=" text-right border border-r-1 text-secondary-700 text-sm py-2 px-3"
                value={picker2}
                onChange={(date) => setPicker2(date)}
                id="default-picker"
                disabled
                // style={{"marginLeft":"-4.2em"}}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 pt-3">
            <div className="col-span-12">
              <div className="grid grid-cols-3 space-x-2">
                <Button text="Cutoff" className="btn-primary" />
                <Button text="Reset Cutoff" className="btn-primary" />
                <Button text="Reset Cutoff Abnormal" className="btn-primary" />
              </div>
            </div>
          </div>
        </Card>
        <Card title="Reset Open Date">
          <div className="grid grid-rows-1 grid-cols-12 gap-3">
            <div className="row-start-0 col-span-2">
              <label className="form-label ">Tanggal</label>
            </div>
            <div className="row-start-0 col-span-6">
              <Flatpickr
                className=" text-right border border-r-1 text-secondary-700 text-sm py-2 px-3"
                value={picker2}
                onChange={(date) => setPicker2(date)}
                id="default-picker"
                // style={{"marginLeft":"-4.2em"}}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 pt-3">
            <div className="col-span-12">
              <div className="grid grid-cols-1 space-x-2">
                <Button text="Reset Open Date" className="btn-primary" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className=" space-y-5">
        <Table tableName={tableName} />
      </div>
    </div>
  );
};


export default CutOff;