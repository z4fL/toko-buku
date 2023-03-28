import Footer from "@/Components/Layouts/MainLayout/Footer";
import Navbar from "@/Components/Layouts/MainLayout/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <header>
        <Navbar />
      </header>
      <main className="grow py-5">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
