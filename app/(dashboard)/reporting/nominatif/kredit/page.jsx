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
import Icon from "@/components/ui/Icon";

const NominatifKredit = () => {
const [tableName, setTableName] = useState("Data");
const [picker2, setPicker2] = useState(new Date());
const [checkedNorek, setCheckedNorek] = useState(true);
const [checkedCif, setCheckedCif] = useState(true);

const handleChange = event => {
  setTableName(event.target.value);
}
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1 gap-5 py-5">
        <Card title="Laporan Nominatif Kredit" >
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
            <div className="row-start-3 col-span-4">
              <Select
                label="Produk"
                id="h_produk"
                type="text"
                placeholder="Produk"
                options={["All", "Recalculated"]}
                horizontal
              />
            </div>
            <div className="row-start-4 col-span-4">
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
              {checkedNorek && (
                  <Textinput
                  label="No. Rekening"
                  id="h_norek"
                  type="text"
                  placeholder="No. Rek"
                  horizontal
                  disabled
                />
              )}
              {!checkedNorek && (
                  <Textinput
                  label="No. Rekening"
                  id="h_norek"
                  type="text"
                  placeholder="No. Rek"
                  horizontal
                  
                />
              )}            
            </div>
            <div className="row-start-7 col-span-8">
            <Checkbox 
              label="All"
              id="c_norek"
              value={checkedNorek}
              onChange={() => setCheckedNorek(!checkedNorek)}
            />
            </div>     
          </div>
          <div className="grid grid-cols-12 gap-3 pt-3">
            <div className="col-span-4 space-y-2">
            {checkedCif && (
                  <Textinput
                  label="No. CIF"
                  id="h_cif"
                  type="text"
                  placeholder="No. CIF"
                  horizontal
                  disabled
                />
              )}  
            {!checkedCif && (
                  <Textinput
                  label="No. CIF"
                  id="h_cif"
                  type="text"
                  placeholder="No. CIF"
                  horizontal
                />
            )}  
                
            </div>
            <div className="col-span-4 space-y-2">
            <Checkbox 
                  label="All"
                  id="c_cif"
                  value={checkedCif}
                  onChange={() => setCheckedCif(!checkedCif)}
                />  
            </div>
            
           </div>
          <div className="grid grid-cols-12 gap-3 pt-3">
            <div className="col-span-4 space-y-2">
                <div className="grid grid-cols-3 space-x-2">
                  <Button text="search" className="btn-primary" />
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

export default NominatifKredit;
