import React from "react";
import Link from "next/link";
async function getData() {
  const res = await fetch("https://dummyjson.com/posts", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PostsPage = async ({ searchParams }) => {
  //console.log("searchParams from server component", searchParams.search);
  //return <div>PostsPage</div>;
  const data = await getData();
  //console.log("data", data);
  return (
    <div>
      {data.posts.map((post, id) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
