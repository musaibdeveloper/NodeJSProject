import https from "https";
import dotenv from "dotenv";
import getReq from "./getReq"

  try {


  const PORT = process.env.PORT || 5000;

  const server = https.createServer((req, res) => {
    switch (req.method) {
      case "GET":
        getReq(req, res);
        break;
      case "POST":
        postReq(req, res);
        break;
      case "PUT":
        putReq(req, res);
        break;
      case "DELETE":
        deleteReq(req, res);
        break;

      default:
        res.statusCode = 404;
        res.send("Not found");
    }
  });

  server.listen(PORT, () => {
    console.log("Server Started");
  });
} catch (error) {
  console.log(error);
}
