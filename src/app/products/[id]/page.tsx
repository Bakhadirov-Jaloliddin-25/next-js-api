import React from "react";
import { IProduct } from "../../../types";

const Detail = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id;
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const response = await data.json();
  const product: IProduct = response;

  return (
    <div className="h-screen flex justify-center items-center">
      <img className="size-96" src={product.thumbnail} alt="" />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Detail;
