import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import ContactsContainer from "./containers/ContactsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CommentsContainer from "./containers/CommentsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  // call redux actions to fetch all data when app is initially loaded
  componentDidMount() {
    this.props.loadComments();
    this.props.loadProducts();
    this.props.loadContacts();
    this.props.loadVehicles();
  }
  render() {
    return (
      <div>
        <div style={{float: "left", width: "49%"}}>
          <h1>Contacts</h1>
          <ContactsContainer />
          <h1>Products</h1>
          <ProductsContainer />
          <h1>Vehicles</h1>
          <VehiclesContainer />
          <h1>Comments </h1>
          <CommentsContainer />
        </div>
        <div style={{float: "left", width: "49%"}}>
          <CreateThingsContainer />
        </div>
      </div>
    );
  }
}

// add prop types for redux actions
App.propTypes = {
  loadComments: PropTypes.func.isRequired,
  loadProducts: PropTypes.func.isRequired,
  loadContacts: PropTypes.func.isRequired,
  loadVehicles: PropTypes.func.isRequired
};

export default (App);


