import { Link } from "@inertiajs/react";
import React from "react";

const BookCategories = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 md:grid-cols-8 justify-center justify-items-center gap-x-1 gap-y-2 w-full">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="h-full bg-slate-50 flex justify-center"
          >
            <div className="w-16">
              <Link as="button">
                <img
                  src={`https://source.unsplash.com/1000x100${i}?book`}
                  className="h-full w-full max-w-[80px] max-h-[80px] object-contain object-center rounded-sm"
                />
                <p className="text-sm">{`Buku ke ${i + 1}`}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
