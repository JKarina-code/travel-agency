import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

db.authenticate()
  .then(() => console.log("BD authenticate"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 3000;

//Enable PUG
app.set("view engine", "pug");

app.use((req, res, next) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  res.locals.namepage = "Travel Agency";
  next();
});

// Enable express.json
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//Add router
app.use("/", router);
app.listen(port, () => {
  console.log(`The server is running on the port ${port}`);
});
