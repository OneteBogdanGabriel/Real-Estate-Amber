const properties = [
  {
    id: 1,
    name: "Los Angeles Empire",
    type: "house",
    sold_price: "1000000",
    currency: "USD",
    description: "Nice view and amazing garden"
  },
  {
    id: 2,
    name: "People's Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Biggest building in Europe"
  },
  {
    id: 3,
    name: "Buckingham Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Fanciest building in Europe"
  },
  {
    id: 4,
    name: "People's Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Biggest building in Europe"
  },
  {
    id: 5,
    name: "People's Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Biggest building in Europe"
  },
  {
    id: 6,
    name: "People's Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Biggest building in Europe"
  },
  {
    id: 7,
    name: "People's Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Biggest building in Europe"
  },
  {
    id: 8,
    name: "People's Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Biggest building in Europe"
  },
  {
    id: 9,
    name: "People's Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Biggest building in Europe"
  },
  {
    id: 10,
    name: "People's Palace",
    type: "palace",
    sold_price: "100000000",
    currency: "EUR",
    description: "Biggest building in Europe"
  }
];

const users = [
  { id: 1, name: "Bogdan Onete", email: "onete.bogdan.93@gmail.com", password:"123" },
  { id: 2, name: "James T. Kirk", email: "onete.bogdan.93@gmail.com" },
  { id: 3, name: "Jon Snow", email: "onete.bogdan.93@gmail.com" }
];

const newProperty = {
  id: null,
  name: "",
  type: "",
  sold_price: "",
  currency: "",
  description: "",
  sellerId: null
};

const newUser = {
  id: null,
  name: "",
  email: "",
  password: ""
}

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newProperty,
  properties,
  users,
  newUser
};
