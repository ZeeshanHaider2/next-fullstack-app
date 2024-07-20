"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const SinglePostPage = () => {
  const params = useParams();
  console.log("params", params.postid);
  const [loading, setLoading] = useState([false]);
  const [post, setPost] = useState([]);
  //console.log("params from server component:", params);

  async function getData() {
    try {
      setLoading(true);
      const data = await fetch(`https://dummyjson.com/posts/${params.postid}`);
      const post = await data.json();
      if (post?.title) {
        setPost(post);
        setLoading(false);
      }
    } catch (err) {
      setPost([]);
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  if (loading) <>loading...</>;
  return <div>{post?.title && <div>{post?.title}</div>}</div>;
};

export default SinglePostPage;
