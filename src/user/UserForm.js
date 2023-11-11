import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function UserForm(props) {
  const [id, setId] = useState(0);
  const [idTermin,setIdTermin] = useState(0)
  const [zwecke, setZwecke] = useState([]);
  const [termine, setTermine] = useState([])

  const RefID = useRef();
  const RefZweck = useRef();
  const RefTermin = useRef();
  const RefVorname = useRef();
  const RefNachname = useRef();
  const RefGeburtsdatum = useRef();
  const RefEmail = useRef();

  useEffect(() => {
    const url = "http://localhost:8080/buchung/zweck/index";
    axios.get(url).then((response) => {
      setZwecke(response.data);
    });
  }, []);

  useEffect(() => {
    const url = "http://localhost:8080/buchung/termin/terminszweck/"+RefZweck.current.value;
    if(id !== 0){
    axios.get(url).then(response => {
      setTermine(response.data);
    })
  }

  },[id]);

  const handleZweck = (event)=>{
    setId(RefZweck.current.value)
  }

  const handleTermin = (event)=>{
    setIdTermin(RefTermin.current.value)
  }

  
  

  const handleSubmit = (event)=>{
    event.preventDefault()
    const url = "http://localhost:8080/buchung/user/add/"+RefTermin.current.value
    console.log(url)
    axios.post(url,
      {
        vorname:RefVorname.current.value,
        nachname:RefNachname.current.value,
        geburtstag:RefGeburtsdatum.current.value,
        email:RefEmail.current.value
      })

  }

  return(
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="zweck">Zweck</label>
          <select name="zweck" id="zweck" onChange={handleZweck} ref={RefZweck} required>
            <option selected disabled value={0}>Bitte auswählen</option>
            {zwecke && zwecke.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
            </select><br/><br/>
            <input type="hidden" name="id" ref={RefID} />

            <label htmlFor="termin">Termin</label>
          <select name="termin" id="termin" onChange={handleTermin} ref={RefTermin} required>
            {termine && termine.map((item) => (
              <option key={item.termineNr}  value={item.terminNr}>{item.datum} {item.zeit} </option>
            ))}
            </select><br/><br/>
            <label htmlFor="vorname">Vorname</label>
            <input type="text" name="vorname" placeholder="Max" ref={RefVorname} required/><br/><br/>
            <label htmlFor="nachname">Nachname</label>
            <input type="text" name="nachname" placeholder="Mustermann" ref={RefNachname} required/><br/><br/>
            <label htmlFor="geburtsdatum">Geburtsdatun</label>
            <input type="date" name="geburtsdatum" ref={RefGeburtsdatum} required /><br/><br/> 
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="max@mustermann.de" ref={RefEmail} required/><br></br>
            <button type="submit" onClick={()=>{alert("Sie haben erfolgreich gebucht")}}>Absenden</button>

        


            <input type="hidden" name="id" ref={RefID} />



          </form>
    </div>
  )
}
