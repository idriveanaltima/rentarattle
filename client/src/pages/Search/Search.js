import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardItem } from "../../components/Card";
import { FormBtn } from "../../components/Form/";

class Search extends Component {
  state = {
    items: [],
    item_type: "",
    item_name: "",
    item_description: "",
    quantity: 1
  }

  componentDidMount() {
    this.loadInventory();
  }

  loadInventory = () => {
    API.getInventory()
      .then(res => 
        this.setState({ items: res.data, item_type: "", item_name: "", item_description: ""})
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2 sm-12">
            {this.state.items.length ? (
              <Card>
                {this.state.items.map(item => (
                  <CardItem key={item._id}>
                    <Link to={"/api/inventory/" + item._id}>
                      <strong>
                        {item.item_name}         
                      </strong>
                    </Link>
                    <br/>
                    {item.item_description}
                    <br/>
                    <FormBtn onClick={this.addToCart}>
                  Buy
               </FormBtn> 
               <FormBtn onClick={this.addToCart}>
                  Rent
               </FormBtn> 
                </CardItem>
                ))}
              
              </Card>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;