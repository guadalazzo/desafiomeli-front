const routes = (module.exports = require("next-routes")());

routes.add("item", "/items/:id", "item");
routes.add("items", "/items", "items");
