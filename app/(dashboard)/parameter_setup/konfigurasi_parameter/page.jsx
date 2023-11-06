"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { tableData } from "@/constant/table-data";
import dynamic from 'next/dynamic'
const Table = dynamic(() => import('@/components/partials/table/TablePagination'))

const KonfigurasiParameter = () => {
const [tableName, setTableName] = useState("Parameter");

const handleChange = event => {
  setTableName(event.target.value);
}
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1 gap-5 py-5">
        <Card title="Konfigurasi Parameter" >
          <div className="grid grid-cols-12">
            <div className="grid col-span-6 space-y-2">
              <Select
                label="Kode Grup"
                id="h_kode_grup"
                type="text"
                placeholder="Kode Grup"
                options={["Option 1", "Option 2", "Option 3"]}
                horizontal
              />
              <Textinput
                label="Kode Sandi"
                id="h_kode_sandi"
                type="text"
                placeholder="Kode Sandi"
                horizontal
                onChange={handleChange}
              />
              <Textinput
                label="Deskripsi Sandi"
                id="h_desc_sandi"
                type="text"
                placeholder="Deskripsi Sandi"
                horizontal
              />
              <Textinput
                label="Kode Lain"
                id="h_kode_lain"
                type="text"
                placeholder="Kode Lain"
                horizontal
              />
              <Textinput
                label="Deskripsi Lain"
                id="h_desc_lain"
                type="text"
                placeholder="Deskripsi Lain"
                horizontal
              />
              <Textinput
                label="Kode Lain-lain"
                id="h_kode_lain2"
                type="text"
                placeholder="Kode Lain-lain"
                horizontal
              />
              <Textinput
                label="Deskripsi Lain-lain"
                id="h_desc_lain2"
                type="text"
                placeholder="Deskripsi Lain-lain"
                horizontal
              />
              <div style={{"margin-top":"-5px"}} className="pb-2">
                <Select
                  label="Status"
                  id="h_status"
                  type="text"
                  placeholder="Kode Grup"
                  options={["Aktif", "Tidak Aktif"]}
                  horizontal
                />
              </div>
              
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
