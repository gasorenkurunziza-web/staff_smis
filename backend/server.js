import express from "express";
import connectDB from "./Config/db_connect.js";
import emproutes from "./Routes/emproutes.js";
import adminroutes from "./Routes/adminroutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/employee", emproutes);
app.use("/api/admin", adminroutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
