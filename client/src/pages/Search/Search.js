import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";

class Search extends Component {
  constructor(props){
    super(props);
}

  state = {
    items: [],
    item_type: "",
    item_name: "",
    item_description: "",
    item_url: "",
    quantity: 1
  }

  componentDidMount() {
    this.loadInventory();
  }

  loadInventory = () => {
    API.getInventory()
      .then(res => 
        this.setState({ items: res.data, item_type: "", item_name: "", item_description: "", item_url: ""})
      )
      .catch(err => console.log(err));
  };

  handleClick = (props) => {
    console.log("getting clicked?")
    console.log(props)
return (
  <Link to={"/api/inventory/" + props.id}>
  <strong>
    {props.item}         
  </strong>
  <p> {props.description}   </p>
</Link>
)
}
  render() {
    return (
      <div className='container-fluid'>
          {this.state.items.map(item => (
              <Card    
              image={item.item_url}
              item={item.item_name} 
              description={item.item_description} 
              handleClick={this.handleClick}
              key={item._id}
              id={item._id}
              />
        ))}
          </div>
    );
  };
};

export default Search;