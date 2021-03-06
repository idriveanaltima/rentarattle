import React, { Component } from "react";
import API from "../../utils/API";
import { Card, CardItem } from "../../components/Card";
import { FormBtn } from "../../components/Form/";

class Search extends Component {
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

  render() {
    return (
      <div className='container-fluid'>
          {this.state.items.map(item => (
              <Card
              key={item._id}
              id={item._id}
              image={item.item_url}
              item={item.item_name} 
              >
             
            <br/>
            <div>
            {item.item_description}
            </div>
            <FormBtn onClick={this.addToCart}>
          Buy
       </FormBtn> 
       <FormBtn onClick={this.addToCart}>
          Rent
       </FormBtn> 
       </Card>
        ))}
          </div>
    );
  };
};

export default Search;