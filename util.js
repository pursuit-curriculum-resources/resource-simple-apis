const db = require("./data/db.json");

function validateResource(req, res, next) {
  const resource = req.path.split("/")[1];

  if (!db[resource]) {
    return next({
      message: `${req.method} /api${req.path} is not found.`,
      status: 404,
    });
  }

  next();
}

module.exports = { validateResource };
