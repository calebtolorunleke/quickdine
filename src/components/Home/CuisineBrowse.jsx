import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { cuisines } from "../../assets/assets";

const CuisineBrowse = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex justify-between items-end mb-12">
        <div className="">
          <span className="text-[10px] text-[#775a19] tracking-[0.2em] block mb-2 uppercase">
            CURATED SELECTION
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-black">
            Browse by Cuisine
          </h3>
        </div>
        <Link
          to="/search"
          className="text-xs text-[#775a19] hover:text-black transition-colors flex items-center gap-1.5 group"
        >
          EXPLORE ALL{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform "
          />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {cuisines.map((cuisine) => {
          const Icon = cuisine.icon;

          return (
            <button
              key={cuisine.name}
              className="group cursor-pointer text-center py-8 bg-white border border-[#c4c7c7]/20 hover:border-[#c4c7c7] transition-soft flex flex-col items-center justify-center"
            >
              <Icon className="text-black/55 group-hover:text-[#775a19] mb-4 transition-colors" />
              <span className="text-[10px] tracking-widest text-black">
                {cuisine.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CuisineBrowse;
