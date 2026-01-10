import { Opportunity } from "@/lib";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Crop Farm":
        return {
          bg: "bg-green-100 dark:bg-green-900/30",
          text: "text-green-700 dark:text-green-400",
        };
      case "Livestock":
        return {
          bg: "bg-orange-100 dark:bg-orange-900/30",
          text: "text-orange-700 dark:text-orange-400",
        };
      default:
        return {
          bg: "bg-yellow-100 dark:bg-yellow-900/30",
          text: "text-yellow-700 dark:text-yellow-400",
        };
    }
  };

  const colors = getTypeColor(opportunity.category);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-shadow border border-black/5 dark:border-white/5">
      <div className="relative h-48 w-full bg-gray-200">
        <div className="absolute top-3 left-3 z-10 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-black backdrop-blur-sm">
          <span className="material-symbols-outlined align-middle text-sm mr-1">
            location_on
          </span>
          {opportunity.produceName}
        </div>
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
          style={{ backgroundImage: `url("${opportunity.imageUrl}")` }}
          aria-label={opportunity.imageAlt}
        ></div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`rounded-full ${colors.bg} px-2.5 py-0.5 text-xs font-bold ${colors.text}`}
          >
            {opportunity.category}
          </span>
          <span className="text-xs font-medium text-text-muted">
            {opportunity.duration}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-bold text-text-main dark:text-white">
          {opportunity.title}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-4 py-3 border-y border-dashed border-gray-200 dark:border-white/10">
          <div>
            <p className="text-xs text-text-muted">ROI</p>
            <p className="text-lg font-bold text-primary">{opportunity.roi}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-muted">Unit Price</p>
            <p className="text-lg font-bold text-text-main dark:text-white">
              {opportunity.unitPrice}
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <div className="flex justify-between text-xs font-medium text-text-muted">
            <span>{opportunity.fundedPercentage}% Funded</span>
            <span>{opportunity.unitsLeft} Units Left</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${opportunity.fundedPercentage}%` }}
            ></div>
          </div>
          <button className="mt-3 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-[#111b0d] hover:bg-[#3cd610] transition-colors">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  );
}
