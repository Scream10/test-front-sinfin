import React, { useState, useEffect } from "react";
import { slice, concat } from "lodash";
import { Link } from "react-router-dom"; 
import { v1 as uuidv1 } from 'uuid';

const LENGTH = 100;
const LIMIT = 6;

function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [posts, setPosts] = useState(slice(0, LIMIT));
  const [dataFetch, setDataFetch] = useState([]);
  const [index, setIndex] = useState(LIMIT);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          setPosts(result.slice(0, LIMIT));
          setDataFetch(result);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      )
  }, [])

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newPosts = concat(posts, slice(dataFetch, index, newIndex));
    setIndex(newIndex);
    setPosts(newPosts);
    setShowMore(newShowMore);
  };

  if (error) {
    return <div className="text-center my-3">Erreur : {error.message}</div>;
  } else if (!loading) {
    return (
      <div className="container">
        <header className="header">
          <div className="header__year">1920s</div>
          <div className="header__title">actu</div>
          <div className="header__year">2020s</div>
        </header>
        <h1 className="titlePublication">Nos dernières publications :</h1>
        <hr />
        <div className="text-center my-3">Chargement...</div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <header className="header">
          <div className="header__year">1920s</div>
          <div className="header__title">actu</div>
          <div className="header__year">2020s</div>
        </header>
        <h1 className="titlePublication">Nos dernières publications :</h1>
        <hr />
        <div className="row">
          {posts.map((post) => (
            <div key={uuidv1()} className="col-lg-4 col-sm-6 mb-4">
              <div className="cardPublication h-100">
                <div className="cardPublication__img">
                  <img src="https://via.placeholder.com/350x150" alt="placeholder 350x150"/>
                </div>
                <div className="cardPublicaton__body">
                  <Link to={{pathname:`/publication/${post.id}`, state:{post, commentList:[]} }}>
                    <h4 className="cardPublication__title">{post.title}</h4>
                  </Link>
                  <p className="cardPublication__description mb-0">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center mb-5">
            {showMore && <button onClick={loadMore} className="loadmore">Charger plus</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;