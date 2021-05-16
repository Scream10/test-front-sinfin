import React, { useState, useContext } from "react";
import { PublicationContext } from '../contexts/PublicationContext';
import PublicationDetail from './PublicationDetail';
import '../styles/Publication.scss'

function Publication(props) {  
  const { dispatch } = useContext(PublicationContext);
  const { publications } = useContext(PublicationContext);
  const [pseudo, setPseudo] = useState('');
  const [comment, setComment] = useState('');
  const publicationId = props.location.state.post.id;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_PUBLICATION', publication: {
      pseudo, comment, publicationId
    }});
    setPseudo('');
    setComment('');
  }

  return (
    <div className="container">
      <div className="backhome">
        <a href="/" className="backhome__title">Page d'acceuil</a>
        <div className="backhome__underline"></div>
      </div>
      <div className="publication">
        <h1 className="publication__title">{props.location.state.post.title}</h1>
        <hr />
        <p className="publication__description">{props.location.state.post.body}</p>
        <hr />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} required />
        <textarea type="text" placeholder="Comment" rows="3" value={comment} onChange={(e) => setComment(e.target.value)} required />
        <div className="max-width">
          <input type="submit" value="Ajouter un commentaire" />
        </div>
      </form>
      <div className="publication-list">
        <ul>
          {publications.map(publication => {
            if(publication.publicationId === props.location.state.post.id) {
              return ( <PublicationDetail publication={publication} key={publication.id} />);
            } else {
              return ( 
              <div></div>)
            }
          }).reverse()}
        </ul>
      </div>  
    </div>
  );
}

export default Publication;