const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

server.use(middlewares);

// To handle POST, PUT and PATCH
server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
  setTimeout(next, 0);
});

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post("/", function(req, res, next) {
  const error = validateProperty(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.title);
    next();
  }
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateProperty(property) {
  if (!property.name) return "Property name is required.";
  if (!property.type) return "Property type is required.";
  if (!property.sold_price) return "Selling price is required.";
  return "";
}
