import express from "express";
import carRoutes from "./src/routes";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/api/car", carRoutes);

app.listen(port, () => {
  console.log("Server is listening");
});
