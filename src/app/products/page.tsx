import React from "react";
import { IProduct } from "../../types";
import ProductsWrapper from "../../components/ProductsWrapper";

const Products = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const response = await data.json();
  const products: IProduct[] = response.products;
  return (
    <div>
      <h2 className="text-center p-12 text-2xl font-bold">Products</h2>
      <ProductsWrapper products={products} />
    </div>
  );
};

export default Products;
