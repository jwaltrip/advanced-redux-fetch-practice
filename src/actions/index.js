// Redux actions

/*
 *  Begin GET actions
 *
 */

// GET - /products route
export const loadProducts = () => dispatch => {
  fetch("/products")
    .then(res => res.json())
    .then(products => {
      dispatch(productsLoaded(products));
    })
    .catch(err => {
      console.error("Error retrieving Products", err);
    });
};
// thunk function - GET /products route
export const productsLoaded = (products) => {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
};

// GET - /contacts route
export const loadContacts = () => dispatch => {
  fetch("/contacts")
    .then(res => res.json())
    .then(contacts => {
      dispatch(contactsLoaded(contacts));
    })
    .catch(err => {
      console.error("Error retrieving Contacts", err);
    });
};
// thunk function - GET /contacts route
export const contactsLoaded = (contacts) => {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
};

// GET - /vehicles route
export const loadVehicles = () => dispatch => {
  fetch("/vehicles")
    .then(res => res.json())
    .then(vehicles => {
      dispatch(vehiclesLoaded(vehicles));
    })
    .catch(err => {
      console.error("Error retrieving Vehicles", err);
    });
};
// thunk function - GET /vehicles route
export const vehiclesLoaded = (vehicles) => {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
};

// GET - /comments route
export const loadComments = () => dispatch => {
  fetch("/comments")
    .then(res => res.json())
    .then(comments => {
      dispatch(commentsLoaded(comments));
    })
    .catch(err => {
      console.error("Error retrieving Comments", err);
    });
};
// thunk function - GET /comments route
export const commentsLoaded = (comments) => {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
};

/*
 *  End GET actions
 */

/* ---------------------------------------- */

/*
 *   BEGIN POST ACTIONS
 */

// POST - /products route
// adds a product object to redux state
// then dispatches the loadProducts() fn
export const createProduct = (product) => dispatch => {
  fetch("/products", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(product)
  }).then(() => {
    dispatch(loadProducts());
  }).catch(err => {
    console.error("Error creating Product", err);
  });
};

// POST - /contacts route
// adds a contact object to redux state
// then dispatches the loadContacts() fn
export const createContact = (contact) => dispatch => {
  fetch("/contacts", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(contact)
  }).then(() => {
    dispatch(loadContacts());
  }).catch(err => {
    console.error("Error creating Contact", err);
  });
};

// POST - /vehicles route
// adds a vehicle object to redux state
// then dispatches the loadVehicles() fn
export const createVehicle = (vehicle) => dispatch => {
  fetch("/vehicles", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(vehicle)
  }).then(() => {
    dispatch(loadVehicles());
  }).catch(err => {
    console.error("Error creating Vehicle", err);
  });
};

// POST - /comments route
// adds a comment object to redux state
// then dispatches the loadComments() fn
export const createComment = (comment) => dispatch => {
  fetch("/comments", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(comment)
  }).then(() => {
    dispatch(loadComments());
  }).catch(err => {
    console.error("Error creating Comment", err);
  });
};
