"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { tableData } from "@/constant/table-data";
import dynamic from 'next/dynamic'
const Table = dynamic(() => import('@/components/partials/table/ExampleOne'))

const TableAdvancedPage = () => {
const [tableName, setTableName] = useState("Parameter");

const handleChange = event => {
  setTableName(event.target.value);
}
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1 gap-5 py-5">
        <Card title="Konfigurasi Group Parameter" >
          <div className="grid grid-rows-3 grid-cols-12">
            <div className="xl:col-span-3 col-span-6 space-y-2">
              <Textinput
                label="Kode Group"
                id="h_kode_group"
                type="text"
                placeholder="Kode Sandi"
                horizontal
                onChange={handleChange}
              />
            </div>
            <div className="row-start-2 col-span-6 space-y-2">
              <Textinput
                label="Keterangan"
                id="h_phone"
                type="text"
                placeholder="Deskripsi Sandi"
                horizontal
              />
            </div>
            <div className="row-start-3 col-span-6 space-x-2">
                <Button text="Save" className="btn-primary" />
                <Button text="Reset" className="btn-primary" />
                <Button text="Export" className="btn-primary" />
                <Button text="Delete" className="btn-primary" />
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

export default TableAdvancedPage;
