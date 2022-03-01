import React, { useState } from "react";

export default function PostDetail({ name, userId }) {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const nameClick = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    const postsFound = await response.json();
    setPosts(postsFound);
  };

  return (
    <div>
      <h1 onClick={nameClick}>{name}</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      
    </div>
  );
}
