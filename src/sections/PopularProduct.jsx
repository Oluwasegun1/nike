import React from "react";
import { products } from "../constant";

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Product
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience a top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:gap-4 gap-14">
        {products.map((product) => (
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={product.imgURL} alt={product.name} />
            <h3 className="text-2xl font-palanquin font-bold">
              {product.name}
            </h3>
            <p className="text-coral-red font-palanquin font-bold">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
