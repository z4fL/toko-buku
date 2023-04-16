import CarouselBooks from "@/Components/CarouselBooks";
import React from "react";

const BookRecommendations = () => {
  const recomendedBooks = [
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230034640.jpg",
      name: "Jujutsu Kaisen vol.0",
      author: "Gege Akutami",
      price: "50000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230022180.jpg",
      name: "Jujutsu Kaisen vol.1",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230024399.jpg",
      name: "Jujutsu Kaisen vol.2",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230024672.jpg",
      name: "Jujutsu Kaisen vol.3",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230026942.jpg",
      name: "Jujutsu Kaisen vol.4",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230029783.jpg",
      name: "Jujutsu Kaisen vol.5",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230031274.jpg",
      name: "Jujutsu Kaisen vol.6",
      author: "Gege Akutami",
      price: "32000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230035883.jpg",
      name: "Jujutsu Kaisen vol.7",
      author: "Gege Akutami",
      price: "40000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230036828.jpg",
      name: "Jujutsu Kaisen vol.8",
      author: "Gege Akutami",
      price: "40000",
    },
    {
      img: "https://elexmedia.s3.amazonaws.com/product/9786230046698.jpg",
      name: "Jujutsu Kaisen vol.9",
      author: "Gege Akutami",
      price: "40000",
    },
  ];

  return (
    <div className="container sm:px-2 md:px-3 lg:px-5 xl:px-14">
      {<CarouselBooks header="Rekomendasi Buku" books={recomendedBooks} />}
    </div>
  );
};

export default BookRecommendations;
