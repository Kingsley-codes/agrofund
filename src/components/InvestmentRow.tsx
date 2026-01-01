// app/components/InvestmentRow.tsx
import React from "react";

interface InvestmentRowProps {
  investment: {
    id: string;
    name: string;
    category: string;
    categoryIcon: string;
    roi: string;
    duration: string;
    status: "Active" | "Draft" | "Sold Out";
    statusColor: string;
    image: string;
  };
}

export default function InvestmentRow({ investment }: InvestmentRowProps) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-100 dark:border-green-800";
      case "Draft":
        return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700";
      case "Sold Out":
        return "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 border-red-100 dark:border-red-800";
      default:
        return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700";
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Crops":
        return "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 border-amber-100 dark:border-amber-800";
      case "Livestock":
        return "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400 border-orange-100 dark:border-orange-800";
      case "Aquaculture":
        return "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border-blue-100 dark:border-blue-800";
      default:
        return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700";
    }
  };

  return (
    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="size-10 rounded-lg bg-cover bg-center shrink-0"
            style={{ backgroundImage: `url('${investment.image}')` }}
            aria-label={`Icon representing ${investment.name}`}
          />
          <div>
            <p className="font-bold text-slate-900 dark:text-white">
              {investment.name}
            </p>
            <p className="text-xs text-slate-500">ID: {investment.id}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryStyles(
            investment.category
          )}`}
        >
          <span className="material-symbols-outlined text-[14px]">
            {investment.categoryIcon}
          </span>
          {investment.category}
        </span>
      </td>
      <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">
        {investment.roi}
      </td>
      <td className="px-6 py-4 text-right text-slate-600 dark:text-slate-400">
        {investment.duration}
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyles(
            investment.status
          )}`}
        >
          {investment.status === "Active" && (
            <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
          )}
          {investment.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
            title="Edit"
          >
            <span className="material-symbols-outlined text-[20px]">edit</span>
          </button>
          <button
            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
            title="Delete"
          >
            <span className="material-symbols-outlined text-[20px]">
              delete
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
}
