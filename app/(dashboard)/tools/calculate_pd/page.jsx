"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import dynamic from "next/dynamic";
const Table = dynamic(() =>
  import("@/components/partials/table/TablePagination")
);
import Flatpickr from "react-flatpickr";
import Select from "@/components/ui/Select";
import Textinput from "@/components/ui/Textinput";

const CalculatePD = () => {
  const [tableName, setTableName] = useState("Data");
  const [picker2, setPicker2] = useState(new Date());

  const handleChange = (event) => {
    setTableName(event.target.value);
  };
  return (
    <div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 py-5">
        <Card title="Calculate PD">
          <div className="grid grid-rows-1 grid-cols-12 gap-3">
            <div className="row-start-1 col-span-8">
              <Select
                label="Metode Statistik"
                id="h_produk"
                type="text"
                placeholder="Produk"
                options={["Roll Rates", "Migration Analysis"]}
                horizontal
              />
            </div>
            <div className="row-start-2 col-span-4">
              <label className="form-label ">Periode</label>
            </div>
            <div className="row-start-2 col-span-6">
              <Flatpickr
                className=" text-right border border-r-1 text-secondary-700 text-sm py-2 px-2"
                value={picker2}
                onChange={(date) => setPicker2(date)}
                id="default-picker"
                options={{
                    dateFormat: "Y-m"
                  }}
                // style={{"marginLeft":"-4.2em"}}
              />
            </div>
            <div className="row-start-3 col-span-8">
                <Textinput
                    label="Umur Data"
                    id="h_umur"
                    type="text"
                    placeholder="Year"
                    horizontal
                />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 pt-3">
            <div className="col-span-12">
              <div className="grid grid-cols-2 space-x-2">
                <Button text="Submit" className="btn-primary" />
                <Button text="Reset" className="btn-primary" />
              </div>
            </div>
          </div>
        </Card>
        <Card title="Backtesting PD">
          <div className="grid grid-rows-1 grid-cols-12 gap-3">
            <div className="row-start-0 col-span-2">
              <label className="form-label ">Periode</label>
            </div>
            <div className="row-start-0 col-span-6">
              <Flatpickr
                className=" text-right border border-r-1 text-secondary-700 text-sm py-2 px-3"
                value={picker2}
                onChange={(date) => setPicker2(date)}
                id="default-picker2"
                options={{
                    dateFormat: "Y-m"
                  }}
                // style={{"marginLeft":"-4.2em"}}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 grid-rows-3 pt-3">
            <div className="row-start-3  col-span-12">
              <div className="grid grid-cols-1 space-x-2">
                <Button text="Backtest" className="btn-primary" />
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

export default CalculatePD;
