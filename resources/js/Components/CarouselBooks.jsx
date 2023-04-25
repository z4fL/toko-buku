import { FormatRupiah } from "@/config/formatRupiah";
import { Link } from "@inertiajs/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CarouselBooks = ({ header, books }) => {
  return (
    <div className="mb-4 pb-2">
      <div className="flex justify-between items-center w-full mb-3 px-2">
        <h2 className="text-3xl font-bold">{header}</h2>
        <Link
          as="button"
          href="book/recomendations"
          className="text-sm font-bold text-sky-600"
        >
          Lihat Semua
        </Link>
      </div>
      <Carousel
        arrows
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        draggable
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        partialVisible={true}
        responsive={{
          desktop: {
            breakpoint: { max: 1536, min: 1280 },
            items: 5,
            partialVisibilityGutter: 10,
          },
          laptop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 6,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 5,
            partialVisibilityGutter: 10,
          },
          mobile: {
            breakpoint: { max: 768, min: 640 },
            items: 4,
            partialVisibilityGutter: 10,
          },
          smallMobile: {
            breakpoint: { max: 640, min: 475 },
            items: 3,
            partialVisibilityGutter: 30,
          },
          superSmallMobile: {
            breakpoint: { max: 475, min: 360 },
            items: 2,
            partialVisibilityGutter: 60,
          },
          verySmallMobile: {
            breakpoint: { max: 360, min: 0 },
            items: 2,
            partialVisibilityGutter: 0,
          },
        }}
        swipeable
      >
        {books.map((book, index) => (
          <div key={index} className="my-4">
            <div className="h-max grid place-items-center font-mono">
              <div className="bg-white w-52 rounded-md">
                <Link href="#" as="button">
                  <div className="flex justify-center items-center leading-none">
                    <img
                      src={book.img}
                      alt={book.name}
                      className="w-44 h-64 rounded-md shadow-lg bg-white mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                    />
                  </div>
                  <div className="p-3 pt-0">
                    <p className="mb-1 text-slate-600">{book.author}</p>
                    <p className="mb-1 text-slate-900">{book.name}</p>
                    <p className="text-sky-700">
                      <FormatRupiah value={book.price} />
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBooks;
