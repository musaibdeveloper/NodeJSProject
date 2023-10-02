function getReq(req, res) {
  if (req.url === "/api/movies") {
      res.statusCode = 200;
      console.log("object");
    
  }
}

export default getReq