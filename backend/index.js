// const express =require("express")   use this when not including type =module in package.json
import express from "express";
import { PORT, MongoUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodels.js";
import Booksrouter from "./route/Booksrouter.js"
import cors from "cors"
const app = express();
// app.use(cors({
//   origin:"http://localhost:5555",
//   methods:["GET","POST","PUT","DELETE"],
//   allowedHeaders:["Content-Type"]
//   }))
//Middlewares for parsing request body
app.use(cors())
app.use(express.json());


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("WELCOME");
});
app.use("/books",Booksrouter)
mongoose
  .connect(MongoUrl)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.log(error);
  });