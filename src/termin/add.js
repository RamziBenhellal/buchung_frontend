import axios from "axios";
import { Component } from "react";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termin: {
        datum: "",
        zeit: ""
      },
      idZweck:0,
      zwecke: [],
    };
  }
  componentDidMount() {
    const url = "http://localhost:8080/buchung/zweck/index";
    axios.get(url).then((response) => this.setState({ zwecke: response.data }));
  }

  handleDatum = (event) => {
    const newTermin={...this.state.termin}
    newTermin.datum= event.target.value;
    this.setState({termin:newTermin})
  };
  handleZeit = (event) => {
    const newTermin={...this.state.termin}
    newTermin.zeit= event.target.value;
    this.setState({termin:newTermin})
  };
  handleZweck = (event) => {
    
    const id = event.target.value;
    this.setState({idZweck:id})
  };
  handleSubmit = (event) => {
    event.preventDefault();
 
    const url="http://localhost:8080/buchung/termin/add/"+this.state.idZweck
    console.log("URL", url);
    console.log(this.state.termin)
    axios.post(url,this.state.termin).then(()=>window.location.reload())
  };



  render() {
    return (
      <div>
        <h1>Termin hinzufügen</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Datum</label>
          <input
            type="date"
            name="datum"
            value={this.state.termin.datum}
            onChange={this.handleDatum}
          />
          <br />
          <br />
          <label>Zeit</label>
          <input
            type="time"
            name="zeit"
            value={this.state.termin.zeit}
            onChange={this.handleZeit}
          />
          <br />
          <br />
          <select name="zweck" onChange={this.handleZweck}>
            <option disabled selected>Bitte Auswählen</option>
            {this.state.zwecke.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button type="submit" onClick={this.handleSubmit}>Speichern</button>
        </form>
      </div>
    );
  }
}
