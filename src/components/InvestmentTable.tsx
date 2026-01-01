// app/components/InvestmentTable.tsx
"use client";

import { useState } from "react";
import InvestmentRow from "./InvestmentRow";

export default function InvestmentTable() {
  const [investments] = useState([
    {
      id: "#INV-2094",
      name: "Maize Plantation Delta",
      category: "Crops",
      categoryIcon: "grass",
      roi: "15%",
      duration: "6 Months",
      status: "Active" as const,
      statusColor: "green",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBh2cM2hE3YFgx5ltKJ6aUSmR52iNOi6hXuMZSgNRekCXO78017SXtjtthXx8dTdRTc-7IE513F68I-ECaRxGz_yZT9w682jXtejH8JZAH3TjWORslhHovhzGgL_DB7c5yHWw5XGrq8ak2WHPiNOPyzNTu9hIaZwVicO5fctrIGAMRIqgGqXZxT7gxgdarBd7B4amU3z1-9H7PKJ2XomHb5uFC7dOPssJD1xGhHF_6m9CnT70XH7dcT5zyWXM4qPbcY3LM4inQyhTM",
    },
    {
      id: "#INV-3001",
      name: "Highland Cattle Project",
      category: "Livestock",
      categoryIcon: "pest_control_rodent",
      roi: "22%",
      duration: "12 Months",
      status: "Draft" as const,
      statusColor: "slate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAjhrz1KPCPEaicMP9rOWtp_fEnKfjuVEgeey40pgIzMubn7VIhmlSV1Zwr5b8kmP5FpnkkrTVP4JGfGnj-eZA8a9QCGoouJMd7L_TR2vCjECfciYkBULFQtEpceromWammUTJFYZL9kAFq8WgG5R8jjLZMOGoLv0WlhX42SqbP29Y-WV8dHPyrOheDtQvUfgnwAISOJlBj2BbEgA1UTBEWBXMddVP1Go_I5FCxiL6BvIADgqRMxpMYlNH80I_limyNM97bmQ6GMN8",
    },
    {
      id: "#INV-1022",
      name: "Catfish Pond B3",
      category: "Aquaculture",
      categoryIcon: "water_drop",
      roi: "18%",
      duration: "9 Months",
      status: "Sold Out" as const,
      statusColor: "red",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbiMUs445-H314WuaYwdiJpRWez_MiHuBFegrt-XEpCSc1fu_svfymzegASUD1qtW3PpZeqGfn5Q3TvjOci-4fKR2d1zXqPyxEPSu64T6k4XWJES_cYIIZATCXT4CgMVCWPXZKUs4x05trwp5HKe9tPxV2yjaEWXCeZgxVpZUUBQgFB8yqmuUnhEJE2q-giYxz-mmiGtgappTxv3obb2m_x_swXhPItOvMcNRRkvsa4iZ7q3EFA3mrksYVxjBkBFl2pdDW9PhftTQ",
    },
  ]);

  return (
    <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex flex-col overflow-hidden">
      {/* Table Toolbar */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap gap-3 items-center justify-between">
        <h3 className="font-bold text-slate-900 dark:text-white">
          Active Listings
        </h3>
        <div className="relative w-full max-w-xs">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
            search
          </span>
          <input
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="Search investments..."
            type="text"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold">
            <tr>
              <th className="px-6 py-4 rounded-tl-lg">Investment Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4 text-right">ROI</th>
              <th className="px-6 py-4 text-right">Duration</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
            {investments.map((investment) => (
              <InvestmentRow key={investment.id} investment={investment} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Showing 3 of 24 listings
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
            Previous
          </button>
          <button className="px-3 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
