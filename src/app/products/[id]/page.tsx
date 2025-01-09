import React from "react";
import { IBlog } from "../../../types";

const Detail = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id;
  const data = await fetch(`https://api.vercel.app/blog/${id}`);
  const post = await data.json();
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.author}</p>
    </div>
  );
};

export default Detail;
