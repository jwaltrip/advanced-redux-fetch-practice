import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts, loadProducts, loadVehicles, loadComments } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: () => {
      const action = loadContacts();
      dispatch(action);
    },
    loadProducts: () => {
      const action = loadProducts();
      dispatch(action);
    },
    loadVehicles: () => {
      const action = loadVehicles();
      dispatch(action);
    },
    loadComments: () => {
      const action = loadComments();
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
