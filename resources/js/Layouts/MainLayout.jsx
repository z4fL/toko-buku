import Footer from "@/Components/Layouts/MainLayout/Footer";
import Navbar from "@/Components/Layouts/MainLayout/Navbar";
import { AppContext } from "@/context/app-context";
import { usePage } from "@inertiajs/react";
import React from "react";

const MainLayout = ({ children }) => {
  const { props, url } = usePage();
  const AppContextValue = {
    user: props.auth.user,
    errors: props.errors,
    url,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      <div className="flex flex-col h-screen">
        <header>
          <Navbar />
        </header>
        <main className="grow py-5">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </AppContext.Provider>
  );
};

export default MainLayout;
