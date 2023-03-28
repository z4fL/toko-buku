import BookCategories from "@/Components/Pages/Home/BookCategories";
import BookRecommendations from "@/Components/Pages/Home/BookRecommendations";
import Carousel from "@/Components/Pages/Home/Carousel";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({ title }) => {
  return (
    <>
      <Head title={title} />
      <div className="container pb-5 flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/3 h-36 sm:h-[374px]">
          <Carousel />
        </div>
        <div className="hidden w-full sm:w-1/3 pl-2 sm:flex flex-col sm:justify-between">
          <div className="h-[180px]">
            <img
              className="w-full h-full object-cover"
              src="https://source.unsplash.com/1000x500?book"
              alt="gambar buku 1"
            />
          </div>
          <div className="h-[180px]">
            <img
              className="w-full h-full object-cover"
              src="https://source.unsplash.com/1000x500?book"
              alt="gambar buku 1"
            />
          </div>
        </div>
      </div>
      <div className="pb-5">
        <BookCategories />
      </div>
      <div className="pb-5">
        <BookRecommendations />
      </div>
      <div className="h-screen"></div>
    </>
  );
};

Home.layout = (page) => <MainLayout children={page} />;
export default Home;
