
// TODO need to add POST actions to create data

// load products data
export const loadProducts = () => dispatch => {
  fetch("/products")
    .then(res => res.json())
    .then(products => {
      dispatch(productsLoaded(products));
    });
};

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

// load contacts data
export const loadContacts = () => dispatch => {
  fetch("/contacts")
    .then(res => res.json())
    .then(contacts => {
      dispatch(contactsLoaded(contacts));
    });
};

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

// load vehicles data
export const loadVehicles = () => dispatch => {
  fetch("/vehicles")
    .then(res => res.json())
    .then(vehicles => {
      dispatch(vehiclesLoaded(vehicles));
    });
};

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

// load comments data
export const loadComments = () => dispatch => {
  fetch("/comments")
    .then(res => res.json())
    .then(comments => {
      dispatch(commentsLoaded(comments));
    });
};

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}
