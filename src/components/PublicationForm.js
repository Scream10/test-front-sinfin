import React, { useContext, useState } from 'react';
import { PublicationContext } from '../contexts/PublicationContext';

const PublicationForm = () => {
  const { dispatch } = useContext(PublicationContext);
  const [pseudo, setPseudo] = useState('');
  const [comment, setComment] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_PUBLICATION', publication: {
      pseudo, comment
    }});
    setPseudo('');
    setComment('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} required />
      <input type="text" placeholder="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
      <input type="submit" value="Ajouter un commentaire" />
    </form>
  );
}

export default PublicationForm;