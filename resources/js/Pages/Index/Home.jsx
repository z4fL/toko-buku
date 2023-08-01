import BooksBestSeller from "@/Components/Pages/Home/BooksBestSeller";
import BookCategories from "@/Components/Pages/Home/BookCategories";
import BookRecommendations from "@/Components/Pages/Home/BookRecommendations";
import Carousel from "@/Components/Pages/Home/Carousel";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import BooksLatest from "@/Components/Pages/Home/BooksLatest";
import GoTopButton from "@/Components/Layouts/MainLayout/GoTopButton";

const Home = ({ title }) => {
  return (
    <>
      <Head title={title} />
      <div className="container pb-5 flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/3 h-36 sm:h-[374px]">
          <Carousel />
        </div>
        <div className="hidden w-full sm:w-1/3 pl-2 sm:flex flex-col sm:justify-between">
          {Array.from({ length: 2 }).map((item, index) => (
            <div key={index} className="h-[180px]">
              <img
                className="w-full h-full object-cover"
                src={`https://source.unsplash.com/1000x50${index + 3}?book`}
                alt={`gambar buku ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pb-9">
        <BookCategories />
      </div>
      <div className="pb-7">
        <BookRecommendations />
      </div>
      <div className="pb-7">
        <BooksBestSeller />
      </div>
      <div className="pb-7">
        <BooksLatest />
      </div>
      <GoTopButton />
    </>
  );
};

Home.layout = (page) => <MainLayout children={page} />;
export default Home;
