const routes = require("next-routes")()

routes.add("item", "/items/:id", "item");
routes.add("items", "/items", "items");

module.exports = routes