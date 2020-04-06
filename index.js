const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const logger = require("express-log-url");
const path = require("path");

const router = express.Router();
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/editor.html'));
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
	extended: true
}));
server.use(express.static(__dirname));
server.use(logger);
server.listen(1001, () => {
	console.log("Server running on port: " + 1001);
});
server.use(router);
