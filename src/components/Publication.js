import React, { useState, useEffect } from "react";

function Publication(props) {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([]);
  const [timestamp, setTimestamp] = useState([]);

  const sendComments = (event) => {
    event.preventDefault();
    setComments([...comments, input]);
    setInput('');
    setTimestamp([...timestamp, new Date().getTime()]);
  } 

  useEffect(() => {
    const object = {comments: (comments), timestamp: (timestamp)}
    localStorage.setItem("comments", JSON.stringify(object));
  }, [comments]);

  return (
    <div className="container">
      <a href="/">Retour à la page des publications</a>
      <h1>{props.location.state.post.title}</h1>
      <hr className="col-sm-12 col-md-10 col-lg-8"/>
      <p>{props.location.state.post.body}</p>
      <hr className="col-sm-12 col-md-10 col-lg-8"/>
      <form className="mb-4">
        <div className="form-group col-sm-12 col-md-10 col-lg-8">
          <label>Pseudo</label>
          <input
            type="text" 
            className="form-control" 
            placeholder="Votre pseudo" 
          />
        </div>
        <div className="form-group my-2 col-sm-12 col-md-10 col-lg-8">
          <label>Commentaire</label>
          <textarea 
            value={input}
            onChange={event => setInput(event.target.value)}
            type="text"
            className="form-control" 
            placeholder="Écrivez votre commentaire..." 
            name="commentaire"
            rows="3" 
          />
        </div>
        <button onClick={sendComments} type="submit" className="btn btn-primary mt-2">Envoyer</button>
      </form>
      <div>
        {comments.map((comment) => (
          <div className="cardComment"> 
            <h6 className="cardComment__pseudo">Fake Pseudo</h6>
            <p className="cardComment__comment">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publication;