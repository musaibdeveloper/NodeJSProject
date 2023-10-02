// const http = require("http");
// import dotenv from "dotenv";
// const getReq = require("./getReq.js");
// import postReq from "./postReq.js";
// import putReq from "./putReq.js";
// import deleteReq from "./deleteReq.js";
// import data from "./data/movies.json"
import http from "http";
import getReq from "./getReq.js";

function main() {
  try {
    const PORT = 5001;

    const server = http.createServer((req, res) => {
      // req.data = data.json;
      switch (req.method) {
        case "GET":
          getReq(req, res);
          break;
        default:
          console.log("Error 404");
      }
    });
    server.listen(PORT, () => {
      console.log("Server Started");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
