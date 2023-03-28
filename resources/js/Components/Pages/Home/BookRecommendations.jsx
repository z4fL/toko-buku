import CarouselBooks from "@/Components/CarouselBooks";
import React from "react";

const BookRecommendations = () => {
  const recomendedBooks = [
    {
      img: "https://cdn.gramedia.com/uploads/items/9786230022180_Jujutsukaisen_1__w149_hauto.jpg",
      name: "Jujutsu Kaisen vol.1",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://cdn.gramedia.com/uploads/items/9786230024399_Jujutsukaisen_2__w149_hauto.jpg",
      name: "Jujutsu Kaisen vol.2",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://cdn.gramedia.com/uploads/items/WhatsApp_Image_2021-06-18_at_14.16.20__w149_hauto.jpeg",
      name: "Jujutsu Kaisen vol.3",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://cdn.gramedia.com/uploads/items/Cover_Depan_Jujutsu_Kaisen_04__w149_hauto.jpg",
      name: "Jujutsu Kaisen vol.4",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://cdn.gramedia.com/uploads/items/9786230029783_Jujutsukaisen_5__w150_hauto.jpg",
      name: "Jujutsu Kaisen vol.5",
      author: "Gege Akutami",
      price: "30000",
    },
    {
      img: "https://cdn.gramedia.com/uploads/items/Jujutsukaisen_6__w142_hauto.jpg",
      name: "Jujutsu Kaisen vol.6",
      author: "Gege Akutami",
      price: "32000",
    },
  ];

  return (
    <div className="container sm:px-2 md:px-3 lg:px-5 xl:px-14">
      {<CarouselBooks header="Rekomendasi Buku" books={recomendedBooks} />}
    </div>
  );
};

export default BookRecommendations;
