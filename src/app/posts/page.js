import React from "react";

const PostsPage = ({ searchParams }) => {
  console.log("searchParams from server component", searchParams.search);
  return <div>PostsPage</div>;
};

export default PostsPage;
