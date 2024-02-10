const Client = require("./Base/Client");
const client = new Client();
const config = require("./Config/config.json");
client.start(config.token);