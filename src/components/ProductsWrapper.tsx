"use client";

import React from "react";
import { IProduct } from "../types";
import { useRouter } from "next/navigation";

const ProductsWrapper = ({ products }: { products: IProduct[] }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto flex gap-3 p-2 flex-wrap justify-center object-contain">
      {products?.map((product: IProduct) => (
        <div
          onClick={() => router.push(`/products/${product.id}`)}
          className="w-[300px] p-3 border rounded-md cursor-pointer object-contain"
          key={product.id}
        >
          <img className="object-contain" src={product.thumbnail} alt="" />
          <h3 className="font-semibold text-xl">{product.title}</h3>
          <p className="text-sm text-gray-600">
            {product.description.slice(0, 50)}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductsWrapper;
