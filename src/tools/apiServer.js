const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const mongoose = require("mongoose");

const getConnection = async () => {
  return await mongoose.connect("mongodb://localhost/Real_Estate_Amber", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
const conn = getConnection();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  password: String
});

const UserModel = mongoose.model("User", UserSchema);

const PropertySchema = new Schema({
  id: ObjectId,
  name: String,
  type: String,
  sold_price: Number,
  currency: String,
  description: String
});

const PropertyModel = mongoose.model("Property", PropertySchema);

function saveUser(data) {
  // var user = new UserModel(data);
  // user.save(function(err) {
  //   if (err) return err;
  // });
  return UserModel.create(data, function(err, small) {
    if (err) return err;
  });
}

function saveProperty(data) {
  return PropertyModel.create(data, function(err, small) {
    if (err) return err;
  });
}

function loadProperties(data) {
  return PropertyModel.find(data, function(err, small) {
    if (err) return err;
  });
}

server.use(middlewares);

// To handle POST, PUT and PATCH
server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
  setTimeout(next, 0);
});

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date(Date.now()).toLocaleString();
  }
  next();
});

server.post("/properties", function(req, res, next) {
  const error = validateProperty(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.name);
    next();
  }
});

server.post("/property-sell", function(req, res, next) {
  const error = validateProperty(req.body);
  // console.log("REQBODY", req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    // req.body.slug = createSlug(req.body.name);
    saveProperty(req.body);
    // const x = saveProperty(req.body);
    // console.log("REQ", x);
    next();
  }
});

server.post("/sign-up", function(req, res, next) {
  const error = validateUser(req.body);
  console.log("REQBODY", req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    // req.body.slug = createSlug(req.body.name);
    saveUser(req.body);
    // res.status(200).send(saveUser(req.body));
    next();
  }
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// URL friendly slug
function createSlug(value) {
  return value.toLowerCase();
}

function validateProperty(property) {
  if (!property.name) return "Property name is required.";
  if (!property.type) return "Property type is required.";
  if (!property.sold_price) return "Selling price is required.";
  return "";
}

function validateUser(user) {
  if (!user.email) return "User email is required.";
  if (!user.name) return "User name is required.";
  if (!user.password) return "User password is required.";
  return "";
}
