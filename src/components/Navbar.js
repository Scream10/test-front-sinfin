import React, { useContext } from 'react';
import { PublicationContext } from '../contexts/PublicationContext';

const Navbar = () => {
  const { publications } = useContext(PublicationContext);

  return (
    <div className="navbar">
      <a href="/">Retour à la page des publications</a>
      <h1>Publication n°{publications.id}</h1>
      <p>{publications.body}</p>
      <hr />
      <p>Il y a {publications.length} commentaires pour cette publication</p>
    </div>
  )
}

export default Navbar;