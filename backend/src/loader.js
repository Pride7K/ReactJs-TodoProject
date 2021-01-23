const server = require("./config/server")
require("./config/database")
require("./config/routes/routes")(server)
/*
const routes = require("./config/routes/routes");
routes(server);
*/