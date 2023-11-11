import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Details(props) {
  const params = useParams();

  const id = params.id;
  const [zeit, setZeit] = useState();
  const [datum, setDatum] = useState();
  const [zweck,setZweck] = useState({})

  useEffect(() => {
    const url = "http://localhost:8080/buchung/termin/details/" + id;
    axios.get(url).then((response) => {
      setDatum(response.data.datum);
      setZeit(response.data.zeit);
      setZweck(response.data.zweck);
    });
  });

  return (
    <div>
        <h1>Termin Details</h1>
        <ul>
            <li>Zeit:{zeit}</li>
            <li>Datum:{datum}</li>
            <li>Zweck:{zweck.name}</li>
        </ul>
    </div>
  )
}
