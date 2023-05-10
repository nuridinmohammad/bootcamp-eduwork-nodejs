import http from "http";

export const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json")
  res.write(JSON.stringify({
    status:200,
    message:"Sucessfully"
  }));
  res.end();
});
