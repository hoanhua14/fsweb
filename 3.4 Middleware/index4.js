import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log("Req type", req.method);
  console.log("Req ", req.url);
  next();
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const bandName = `Band name is ${req.body.street} ${req.body.pet}`;
  res.send(bandName);
});
