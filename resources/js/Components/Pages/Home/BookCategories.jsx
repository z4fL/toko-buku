import { Link } from "@inertiajs/react";
import React from "react";

const BookCategories = () => {
  const bookCategories = [
    {
      name: "Fiction",
      slug: "fiction",
    },
    {
      name: "Non-fiction",
      slug: "non-fiction",
    },
    {
      name: "Children",
      slug: "children",
    },
    {
      name: "Teen",
      slug: "teen",
    },
    {
      name: "Comics",
      slug: "comics",
    },
    {
      name: "Education",
      slug: "education",
    },
    {
      name: "Business",
      slug: "business",
    },
    {
      name: "Religion",
      slug: "religion",
    },
    {
      name: "Arts and Entertainment",
      slug: "arts-and-entertainment",
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-4 md:grid-cols-9 justify-center justify-items-center gap-x-1 gap-y-2 w-full">
        {bookCategories.map((book, i) => (
          <div key={i} className="h-full bg-slate-50 flex justify-center">
            <div className="w-16">
              <Link as="button" href={`/category/${book.slug}`}>
                <img
                  src={`https://source.unsplash.com/1000x100${i}?book ${book.slug}`}
                  className="h-full w-full max-w-[80px] max-h-[80px] object-contain object-center rounded-sm"
                />
                <p className="text-sm">{book.name}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
