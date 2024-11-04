import React from "react";
import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: "/Images/company/brand1.png" },
  { id: 2, img: "/Images/company/brand2.png" },
  { id: 3, img: "/Images/company/brand3.png" },
  { id: 4, img: "/Images/company/brand4.png" },
  { id: 5, img: "/Images/company/brand5.png" },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-16">
      {/* Brand logo section */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt={`Brand logo ${id}`} className="h-16" />
          </div>
        ))}
      </div>

      {/* Category grid */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
        <p className="font-semibold text-sm md:-rotate-90 uppercase bg-black text-white md:p-1.5 p-2 rounded-sm text-center">
          Explore new and popular styles
        </p>
        <div className="w-full md:w-1/2">
          <Link to="/">
            <img
              src="/Images/category/image1.png"
              alt="Main category"
              className="w-full h-auto hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {[2, 3, 4, 5].map((num) => (
              <Link to="/" key={num}>
                <img
                  src={`/Images/category/image${num}.png`}
                  alt={`Category image ${num}`}
                  className="w-full h-auto hover:scale-105 transition-transform duration-200"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
