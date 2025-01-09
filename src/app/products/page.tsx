import React from "react";
import { IBlog } from "../../types";
import ProductsWrapper from "../../components/ProductsWrapper";

const Products = async () => {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: IBlog[] = await data.json();
  return (
    <div>
      <h2 className="text-center p-12 text-2xl font-bold">Products</h2>
      <ProductsWrapper posts={posts} />
    </div>
);
};

export default Products;
