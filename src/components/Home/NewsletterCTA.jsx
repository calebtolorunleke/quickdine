import React from "react";

const NewsletterCTA = () => {
  return (
    <section className="bg-black text-on-primary py-20 xl:py-32 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
          Join the Culinary Inner Circle
        </h2>
        <p className="text-sm text-[#858383] mb-8 leading-relaxed">
          Subscribe to receive first access to new openings and seasonal tasting
          menus.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            className="flex-1 bg-white/10 border-b border-[#858383]/30 focus:border-white text-white text-sm py-3 px-4 outline-none placeholder:text-[#858383]/70"
            placeholder="Email Address"
            type="email"
            required
          />
          <button
            type="submit"
            className="bg-white text-[#000000] hover:bg-[#858383] hover:text-white transition-soft text-xs tracking-widest uppercase py-3 px-8 cursor-pointer"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;
