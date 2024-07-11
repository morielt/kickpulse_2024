import express from "express";
import mongoose from "mongoose";
import dashboardRouter from "./routes/dashboard_router.js";

const app = express();

app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
app.use(express.static("public"));
app.use(express.json());

//-------------------------------

app.use("/dashboard", dashboardRouter);

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  const connectToDb = () => {
    mongoose
      .connect(
        "mongodb+srv://itayakni:kick.pulse.cs@cluster0.yl5rjk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("connected to mongo");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});

//mongodb+srv://margolin23:nYbjAMqvAGBtsmdZ@cluster1.3slcbul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
