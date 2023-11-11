import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
 const params = useParams();

 // Extract id from the URL path
 const id = params.id;
 const [name,setName] = useState("");
 const [bemerkung,setBemerkung] = useState("");
 useEffect(() => {
  axios
    .get("http://localhost:8080/buchung/zweck/details/" + id)
    .then((response) => {
      setName(response.data.name);
      setBemerkung(response.data.bemerkung);
    })
    .catch((error) => {
      console.log(error);
    });
});

 return (
    <div>
      <h1>Details von: {name}</h1>
      <ul>
        <li>Bemerkung: {bemerkung}</li>
      </ul>
    </div>
 );
}

export default Details;
