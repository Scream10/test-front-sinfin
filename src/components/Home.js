import React, { useState, useEffect } from "react";
import { slice, concat } from "lodash";

const LENGTH = 100;
const DATA = [...Array(LENGTH).keys()];
const LIMIT = 6;

function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showMore, setShowMore] = useState(true);
  const [posts, setPosts] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          setPosts(result.slice(0, LIMIT));
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      )
  }, [])

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newPosts = concat(posts, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setPosts(newPosts);
    setShowMore(newShowMore);
  };

  if (error) {
    return <div className="text-center my-3">Erreur : {error.message}</div>;
  } else if (!loading) {
    return <div className="text-center my-3">Chargement...</div>
  } else {
    return (
      <div className="container">
        <h1>Nos dernières publications :</h1>
        <hr />
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-4 col-sm-6 mb-4">
              <div className="card h-100">
                <img src="https://via.placeholder.com/350x150" alt="350x150" className="card-img-top" />
                <div className="card-body">
                  <a href="/">
                    <h4 className="card-title">{post.title}</h4>
                  </a>
                  <p className="card-text mb-0">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center mb-5">
            {showMore && <button onClick={loadMore} className="btn btn-primary">Charger plus</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;