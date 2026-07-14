import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../RestaurantCard";
import { restaurants } from "../../assets/assets";

const TrendingRow = () => {
  return (
    <section className="py-24 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] text-[#775a19] tracking-[0.2em] block mb-2 uppercase">
              CURRENTLY TRENDING
            </span>{" "}
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-black">
              Trending Fine Dining
            </h2>
          </div>

          <Link
            to="/search"
            className="text-xs text-[#775a19] hover:text-black transition-colors flex items-center gap-1.5 group"
          >
            VIEW ALL{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.slice(0, 3).map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default TrendingRow;
