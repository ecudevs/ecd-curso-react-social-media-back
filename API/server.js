import "@babel/polyfill";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import open from "open";
import cors from "cors";

import api from "./routes/api";


const NODE_ENV = process.env.NODE_ENV || "DEVELOPMENT";
const app = express();
app.set("port", process.env.PORT || 3001);
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", api);
app.use("/", express.static(path.join(__dirname, "../src")));
app.get("/*", (req, res) => { res.sendFile(path.resolve(__dirname, "../src", "index.html")); });
app.listen(app.get("port"), async (req, res) => {
    console.log("Magic happens on port: ", NODE_ENV);
    console.log("We are on: ", NODE_ENV);
    // NODE_ENV === 'DEVELOPMENT' && await open("http://localhost:" + app.get("port") + "/api");
    // await open("http://localhost:" + app.get("port"));
});