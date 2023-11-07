import axios from "axios";
import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zwecke: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost:8080/buchung/zweck/index";

    axios.get(url).then((response) => this.setState({ zwecke: response.data }));
  }

  handleDelete = (id)=>{
    
  }

  render() {
    
    return (
      <div>
        <a href="/zweck/add">Zweck hinzufügen </a>
        <table>
          <thead>
          <tr>
            <th>Id</th>
            <th>Zweck</th>
            <th>Bemerkung</th>
            <th>Aktion</th>
          </tr>
          </thead>
          <tbody>
          {this.state.zwecke.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.bemerkung}</td>
              <td><a href={"/zweck/edit/"+item.id}>Bearbeiten</a></td>
              <td><a href={"/zweck/details/"+item.id}>Details</a></td>
              <td><button onClick={handleDelete => axios.delete("http://localhost:8080/buchung/zweck/delete/"+item.id)  }>Löchen</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      
      </div>
    );
  }
}
export default Index;
