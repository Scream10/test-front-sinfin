import React, { useState, useEffect } from "react";

function Data() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          setPosts(result.slice(0, 6));
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      )
  }, [])

  return (
    <>
      {posts}
    </>
  );
}

export default Data;