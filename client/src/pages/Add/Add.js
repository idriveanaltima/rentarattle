import React, { Component } from 'react';
import { Input, FormBtn } from "../../components/Form/";
import API from "../../utils/API";

class Add extends Component {

  state = {
    item_type: "",
    item_name: "",
    item_description: "",
    quantity: 1,
    total_uses: 1,
    updated_at: Date.now
  };

handleInputChange = event => {
const { name, value } = event.target;
this.setState({
  [name]: value
});
};

handleFormSubmit = event => {
event.preventDefault();
  API.addInventory({
    item_name: this.state.item_name,
    item_type: this.state.item_type,
    item_description: this.state.item_description,
    quantity: this.state.quantity         
  }) 
    .then(res => console.log(res) ) 
    .catch(err => console.log(err));
};
render () {
  return (
 
<div className="container">
<div className="row">
  <div className="col-lg-12 col-xs-12">
    <h1>Rent-A-Rattle!</h1>
    <p>Pack less when you travel</p>
  </div>
  </div>
  <div className="row">
  <div className="col-lg-12 col-xs-12">
    <div className="pull-right">
      <h3>Add an Item</h3>
      <form className="create-form">
        <div className="form-group">
          <label>Item Name:
          <Input
            value={this.state.item_name}
            onChange={this.handleInputChange}
            type="text"
            name="item_name"
            placeholder="Item Name (required)"
            required
            />
            </label>
        </div>
        <div className="form-group">
          <label>Item Type:
          <Input
            value={this.state.item_type}
            onChange={this.handleInputChange}
            type="text"
            name="item_type"
            placeholder="Item_type (required)"
            required
            />
            </label>
        </div>
        <div className="form-group">
          <label>Item description:
          <Input
            value={this.state.item_description}
            onChange={this.handleInputChange}
            type="textarea"
            name="item_description"
            placeholder="Item_description (required)"
            required
            />
            </label>
        </div>
        <div className="form-group">
          <label>Quantity:
          <Input
            value={this.state.quantity}
            onChange={this.handleInputChange}
            type="number"
            name="quantity"
            placeholder="Quantity (required)"
            required
            />
            </label>
        </div>
        <FormBtn 
          onClick={this.handleFormSubmit}> 
          Add Item
        </FormBtn>
      </form>
    </div>
  </div>
</div>
</div>
)
}
}

export default Add