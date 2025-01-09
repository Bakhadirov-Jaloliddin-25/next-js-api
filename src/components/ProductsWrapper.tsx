"use client";

import React from "react";
import { IBlog } from "../types";
import { useRouter } from "next/navigation";

const ProductsWrapper = ({ posts }: { posts: IBlog[] }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto flex gap-3 p-2 flex-wrap justify-center">
      {posts.map((post: IBlog) => (
        <div
          onClick={() => router.push(`/products/${post.id}`)}
          className="w-[300px] h-[130px] p-3 border rounded-md cursor-pointer"
          key={post.id}
        >
          <h3 className="font-semibold text-xl">{post.title}</h3>
          <p className="text-sm">{post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsWrapper;
