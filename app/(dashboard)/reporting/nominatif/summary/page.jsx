"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { tableData } from "@/constant/table-data";
import dynamic from 'next/dynamic'
const Table = dynamic(() => import('@/components/partials/table/TablePagination'))
import Flatpickr from "react-flatpickr";

const SummaryNominatif = () => {
const [tableName, setTableName] = useState("Data");
const [picker2, setPicker2] = useState(new Date());

const handleChange = event => {
  setTableName(event.target.value);
}
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1 gap-5 py-5">
        <Card title="Laporan Summary Nominatif Kredit" >
          <div className="grid grid-rows-2 grid-cols-12 gap-3">
            <div className="row-start-0 col-span-2">
              <label className="form-label ">
                Tanggal
              </label>
            </div>
            <div className="row-start-0 col-span-3">
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

export default SummaryNominatif;
