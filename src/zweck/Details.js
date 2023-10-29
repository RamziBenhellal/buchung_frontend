import React from 'react';
import { useParams } from 'react-router-dom';

function Details() {
 const params = useParams();

 // Extract id from the URL path
 const id = params.id;

 return (
    <div>
      <h2>Details for id: {id}</h2>
    </div>
 );
}

export default Details;
