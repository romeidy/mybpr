"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { tableData } from "@/constant/table-data";
import dynamic from 'next/dynamic'
import Checkbox from "@/components/ui/Checkbox";
const Table = dynamic(() => import('@/components/partials/table/ExampleOne'))
import Flatpickr from "react-flatpickr";

const KonfigurasiParameter = () => {
const [tableName, setTableName] = useState("Data");
const [picker2, setPicker2] = useState(new Date());

const handleChange = event => {
  setTableName(event.target.value);
}
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1 gap-5 py-5">
        <Card title="Laporan Nominatif Kredit" >
          <div className="grid grid-rows-2 grid-cols-12 gap-3">
            <div className="col-span-2">
              <label className="form-label p-0 m-0">
                Tanggal
              </label>
            </div>
            <div className="col-span-2 p-0 m-0">
              <Flatpickr
                className="form-control py-2"
                value={picker2}
                onChange={(date) => setPicker2(date)}
                id="default-picker"
                style={{"marginLeft":"-4.2em"}}
              />
            </div>
            <div className="row-start-2 col-span-4">
              <Select
                label="Jenis Data"
                id="h_kode_grup"
                type="text"
                placeholder="Kode Grup"
                options={["Awal", "Recalculated"]}
                horizontal
              />
            </div>
            <div className="row-start-3 col-span-6">
              <Select
                label="Produk"
                id="h_produk"
                type="text"
                placeholder="Produk"
                options={["All", "Recalculated"]}
                horizontal
              />
            </div>
            <div className="row-start-4 col-span-6">
              <Select
                label="Cabang"
                id="h_produk"
                type="text"
                placeholder="Produk"
                options={["All", "Recalculated"]}
                horizontal
              />
            </div>
            <div className="row-start-5 col-span-4">
              <Select
                label="Status"
                id="h_produk"
                type="text"
                placeholder="Produk"
                options={["All", "Recalculated"]}
                horizontal
              />
            </div>
            <div className="row-start-6 col-span-4">
              <Select
                label="Amortized Cost"
                id="h_produk"
                type="text"
                placeholder="Produk"
                options={["All", "Recalculated"]}
                horizontal
              />
            </div>
            <div className="row-start-7 col-span-4">
              <Textinput
                label="No. Rekening"
                id="h_norek"
                type="text"
                placeholder="No. Rek"
                horizontal
              />
            </div>
            <div className="row-start-7 col-span-8">
            <Checkbox 
              label="All"
              id="c_norek"
            />
            </div>     
          </div>
          <div className="grid grid-cols-12 gap-3 pt-3">
            <div className="col-span-4 space-y-2">
                <Textinput
                  label="No. CIF"
                  id="h_cif"
                  type="text"
                  placeholder="No. CIF"
                  horizontal
                />
            </div>
            <div className="col-span-4 space-y-2">
            <Checkbox 
                  label="All"
                  id="c_cif"
                  checked
                />  
            </div>
            
           </div>
          <div className="grid grid-cols-12 gap-3 pt-3">
            <div className="col-span-6 space-y-2">
                <div className="grid grid-cols-4 space-x-2">
                  <Button text="Save" className="btn-primary" />
                  <Button text="Delete" className="btn-primary" />
                  <Button text="Export" className="btn-primary" />
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

export default KonfigurasiParameter;
