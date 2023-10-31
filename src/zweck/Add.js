import axios from "axios";
import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { zweck: {
      name: "",
      bemerkung:""
    } };

  }

  handleName = (event)=>{
    const newZweck={...this.state.zweck}
    newZweck.name= event.target.value;
    this.setState({zweck:newZweck})
    
  }

  handleBemerkung = (event)=>{
    const newZweck={...this.state.zweck}
    newZweck.bemerkung= event.target.value;
    this.setState({zweck:newZweck})
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    const url = "http://localhost:8080/buchung/zweck/add";
    axios.post(url,this.state.zweck).then(response=>alert(response.data));

  }
  render() {
    return <div>
      <h1>Zweck Hinzufügen</h1>
            <form>
              <label>Name :</label>
              <input type="text" name="name" onChange={this.handleName} />
              <br/><br/>
              <label>Bemerkung : </label>
              <textarea rows="4" cols="50" name="bemerkung" onChange={this.handleBemerkung}></textarea>
              <br/><br/>
              <button  type="submit" onClick={this.handleSubmit}  >Hinzufügen</button>


      </form>


    </div>;
  }
}

export default Add;
