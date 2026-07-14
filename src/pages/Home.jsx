import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import Hero from "../components/Home/Hero";
import CuisineBrowse from "../components/Home/CuisineBrowse";
import TrendingRow from "../components/Home/TrendingRow";
import Membership from "../components/Home/Membership";
import NewsletterCTA from "../components/Home/NewsletterCTA";
import Footer from "../Footer";

const Home = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col pt-0">
      <Navbar setAuthModalOpen={setAuthModalOpen} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
      <main>
        <Hero />
        <CuisineBrowse/>
        <TrendingRow/>
        <Membership/>
        <NewsletterCTA/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
