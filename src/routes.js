const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
routes.add("detail", "/detail/:id");
routes.add("wishlist", "/wishlist");
routes.add("cart", "/cart");
routes.add("search", "/search");
routes.add("login", "/login");

// routes.add("detailQuery", "/detail/:id", "detail");
routes.add("about", "/about-us");
routes.add("aboutQuery", "/about-us/:id", "about");
routes.add("counter", "/counter");
routes.add("contact-us", "/contact-us");
