import os from "node:os";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.get("/sys", (req, res) => {
  console.log(`${req.method} ${req.url} from ${req.ip}`);
  res.send({
    platform: os.platform(),
    arch: os.arch(),
    uptime: os.uptime(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    homedir: os.homedir(),
    interfaces: os.networkInterfaces(),
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and running!");
});
