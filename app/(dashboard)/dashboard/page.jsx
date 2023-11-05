"use client";

import Card from "@/components/ui/Card";
import GroupChart3 from "@/components/partials/widget/chart/group-chart-3";
import SelectMonth from "@/components/partials/SelectMonth";
import StackBarChart from "@/components/partials/widget/chart/stack-bar";
import Calculation from "@/components/partials/widget/chart/Calculation";
import ExampleTwo from "@/components/partials/table/ExampleTwo";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";
const series = [70,18,12];
const campaigns = [
  {
    name: "Produk A",
    value: "30%",
  },
  {
    name: "Produk B",
    value: "20%",
  },
  {
    name: "Produk C",
    value: "20%",
  },
  {
    name: "Produk D",
    value: "20%",
  },
  {
    name: "Produk E",
    value: "10%",
  },
];
const CrmPage = () => {
  return (
    <div>
      <HomeBredCurbs title="Dashboard" />
      <div className="space-y-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-8 col-span-12 space-y-5">
            <Card>
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 col-span-1 gap-3">
                <GroupChart3 />
              </div>
            </Card>
            <Card>
              <header className="md:flex md:space-y-0 space-y-4">
                <h6 className="flex-1 text-slate-900 dark:text-white capitalize">
                  Distribusi per Bucket
                </h6>
                <div className="flex-none">
                  <SelectMonth />
                </div>
              </header>
              <div className="legend-ring">
                <StackBarChart />
              </div>
            </Card>
          </div>
          <div className="lg:col-span-4 col-span-12 space-y-5">
            <div className="lg:col-span-4 col-span-12 space-y-5">
              <Card title="CKPN/Produk (%)" headerslot={<SelectMonth />}>
                <ul className="divide-y divide-slate-100 dark:divide-slate-700">
                  {campaigns.map((item, i) => (
                    <li
                      key={i}
                      className="first:text-xm text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2"
                    >
                      <div className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card title="CKPN/Segment (%)" headerslot={<SelectMonth />}>
                <div className="legend-ring3">
                  <Calculation series={series}/>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmPage;
