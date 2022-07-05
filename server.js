const cors = require("cors");
const jsonServer = require("json-server");
const path = require("path");
const { validateResource } = require("./util");

const app = jsonServer.create();
const dbPath = path.join(__dirname, "data", "db.json");
const router = jsonServer.router(dbPath);
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5000;

// Enable all CORS requests.
app.use(cors());

// Index route message.
app.get("/", (_req, _res, next) => {
  next({
    message: "No resource found.",
    status: 404,
  });
});

// Generic logging middleware.
app.use(middleware);

// Only allow GET requests.
app.use((req, _res, next) => {
  if (req.method !== "GET") {
    return next({
      message: `${req.method} ${req.path} is not allowed.`,
      status: 405,
    });
  }

  next();
});

// Mount routes.
app.use("/api", validateResource, router);

// Catch-all handler.
app.use((req, _res, next) => {
  next({
    message: `${req.method} ${req.path} is not found.`,
    status: 404,
  });
});

// Error handler.
app.use(
  ({ status = 500, message = "Internal server error." }, _req, res, _next) => {
    res.status(status).json({ error: message });
  }
);

app.listen(port);
