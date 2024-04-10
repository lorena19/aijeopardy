const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);
app.listen(5000, () => console.log("Server started on port 5000"));
