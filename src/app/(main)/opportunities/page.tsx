"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Opportunity, ApiResponse } from "@/lib/index";
import OpportunityCard from "@/components/OpportunityCard";
import StatsBanner from "@/components/StatsBanner";
import Toolbar from "@/components/Toolbar";
import Pagination from "@/components/Pagination";
import FilterSidebar from "@/components/FilterSidebar";

// Transform API data to Opportunity format
const transformApiDataToOpportunities = (
  apiData: ApiResponse
): Opportunity[] => {
  return apiData.produce.map((item) => ({
    id: item._id,
    title: item.title,
    produceName: item.produceName,
    duration: `${item.duration} Months`,
    roi: item.ROI,
    unitPrice: item.price,
    minInvestment: item.minimumUnit * item.price, // Calculate minimum investment
    fundedPercentage: 100 - item.remainingPercentage, // Convert remaining to funded percentage
    category: item.category === "crops" ? "Crop Farm" : "Livestock",
    unitsLeft: item.remainingUnit,
    imageUrl: item.image1.url, // Use first image
    imageAlt: `${item.produceName} farm field`,
    icon: item.category === "crops" ? "eco" : "egg_alt",
  }));
};

export default function OpportunitiesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("recommended");
  const [activeFilter, setActiveFilter] = useState("all");
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Fetch data from API
  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ApiResponse>("/api/produce");

        if (response.data.success) {
          const transformedData = transformApiDataToOpportunities(
            response.data
          );
          setOpportunities(transformedData);
          setTotalCount(response.data.count);
          setTotalPages(Math.ceil(response.data.count / 9)); // Assuming 9 items per page
        } else {
          setError("Failed to fetch opportunities");
        }
      } catch (err) {
        setError("Error fetching opportunities. Please try again later.");
        console.error("Error fetching opportunities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // Implement filtering logic here
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    // Implement sorting logic here
    let sortedOpportunities = [...opportunities];

    switch (newSort) {
      case "roi-high":
        sortedOpportunities.sort((a, b) => b.roi - a.roi);
        break;
      case "roi-low":
        sortedOpportunities.sort((a, b) => a.roi - b.roi);
        break;
      case "duration-short":
        sortedOpportunities.sort((a, b) => {
          const aDuration = parseInt(a.duration);
          const bDuration = parseInt(b.duration);
          return aDuration - bDuration;
        });
        break;
      case "duration-long":
        sortedOpportunities.sort((a, b) => {
          const aDuration = parseInt(a.duration);
          const bDuration = parseInt(b.duration);
          return bDuration - aDuration;
        });
        break;
      case "price-low":
        sortedOpportunities.sort((a, b) => a.unitPrice - b.unitPrice);
        break;
      case "price-high":
        sortedOpportunities.sort((a, b) => b.unitPrice - a.unitPrice);
        break;
      default:
        // Recommended sorting (you can define your own logic)
        break;
    }

    setOpportunities(sortedOpportunities);
  };

  const handleFilterSelect = (filter: string) => {
    setActiveFilter(filter);
    // Note: You might want to fetch filtered data from API instead
    // For now, we'll filter client-side
    if (filter === "all") {
      // Reset to all opportunities
      // You might need to refetch all data or maintain a copy
    }
    // Implement filtering logic here
  };

  // Pagination logic
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOpportunities = opportunities.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-text-main">Loading opportunities...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary text-[#111b0d] rounded-lg hover:bg-[#3cd610] transition-colors"
            >
              Retry
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-1">
        <StatsBanner totalCount={totalCount} />

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:px-10 lg:flex-row">
          <FilterSidebar onFilterChange={handleFilterChange} />

          <div className="flex flex-1 flex-col gap-6">
            <Toolbar
              onSortChange={handleSortChange}
              onFilterChange={handleFilterSelect}
              totalCount={totalCount}
            />

            {/* Opportunities Grid */}
            {opportunities.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-text-muted text-lg">
                  No opportunities found.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {paginatedOpportunities.map((opportunity) => (
                    <OpportunityCard
                      key={opportunity.id}
                      opportunity={opportunity}
                    />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
