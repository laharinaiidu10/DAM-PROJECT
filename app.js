const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
mongoose.connect("mongodb://127.0.0.1:27017/dam")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/assets", require("./routes/asset"));

app.listen(5000, () => console.log("Server running on port 5000"));