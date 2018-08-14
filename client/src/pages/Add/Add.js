
import React from 'react';

const Add = (props) => {

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
      <form className="create-form form-inline">

        <div className="form-group">
          <label htmlFor="ia">Item Name:</label>
          <input type="text" id="ia" name="item_name"/>
        </div>

        <div className="form-group">
          <label htmlFor="pa">Price:</label>
          <input type="text" id="pa" name="price"/>
        </div>

        <div className="form-group">
          
          <label htmlFor="purchased">Borrow?</label>
          <label className="radio-inline">
            <input type="radio" name="purchased" value="1" checked/> Rented!
          </label>
          <label className="radio-inline">
            <input type="radio" name="purchased" value="0"/> Returned!
          </label>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  </div>
</div>
</div>
)
}

export default Add