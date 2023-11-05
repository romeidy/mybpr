"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { tableData } from "@/constant/table-data";
import dynamic from 'next/dynamic'
const Table = dynamic(() => import('@/components/partials/table/ExampleOne'))
import Flatpickr from "react-flatpickr";
import Select from "@/components/ui/Select";

const TopNominatif = () => {
const [tableName, setTableName] = useState("Data");
const [picker2, setPicker2] = useState(new Date());

const handleChange = event => {
  setTableName(event.target.value);
}
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1 gap-5 py-5">
        <Card title="Laporan Top 100 Account Number" >
          <div className="grid grid-rows-2 grid-cols-12 gap-3">
            <div className="row-start-0 col-span-2">
              <label className="form-label ">
                Tanggal
              </label>
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
            <div className="row-start-2 col-span-4">
              <Select
                label="Jenis Laporan"
                id="h_jenis_laporan"
                type="text"
                placeholder="Jenis Laporan"
                options={["Konsolidasi", "Per-Cabang"]}
                horizontal
              />
            </div>
            <div className="row-start-3 col-span-4">
              <Select
                label="Cabang Konsolidasi"
                id="h_kode_grup"
                type="text"
                placeholder="Kode Grup"
                options={["All", "Recalculated"]}
                horizontal
              />
            </div>
            
            
           </div>
          <div className="grid grid-cols-12 gap-3 pt-3">
            <div className="col-span-4">
                <div className="grid grid-cols-2 space-x-2">
                  <Button text="Search" className="btn-primary" />
                  <Button text="Reset" className="btn-primary" />
                </div>
              </div>  
           </div>
        </Card>
       
      </div>
      <div className=" space-y-5">
        <Table tableName={tableName}/>
      </div>
    </div>
  );
};

export default TopNominatif;
