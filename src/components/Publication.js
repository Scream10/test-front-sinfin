import React, { useState, useContext } from "react";
import { PublicationContext } from '../contexts/PublicationContext';
import PublicationDetail from './PublicationDetail';

function Publication(props) {  
  const { dispatch } = useContext(PublicationContext);
  const [pseudo, setPseudo] = useState('');
  const [comment, setComment] = useState('');
  const { publications } = useContext(PublicationContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_PUBLICATION', publication: {
      pseudo, comment
    }});
    setPseudo('');
    setComment('');
  }

  return (
    <div className="container">
      <a href="/">Retour à la page des publications</a>
      <h1>{props.location.state.post.title}</h1>
      <hr className="col-sm-12 col-md-10 col-lg-8"/>
      <p>{props.location.state.post.body}</p>
      <hr className="col-sm-12 col-md-10 col-lg-8"/>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} required />
        <input type="text" placeholder="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
        <input type="submit" value="Ajouter un commentaire" />
      </form>
      <div className="publication-list">
        <ul>
          {publications.map(publication => {
            return ( <PublicationDetail publication={publication} key={publication.id} />);
          }).reverse()}
        </ul>
      </div>  
    </div>
  );
}

export default Publication;