import express from "express";
import cors from "cors";
import { shortUrlRoutes } from "./modules";

const app = express();
const PORT = process.env["PORT"];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", shortUrlRoutes);

app.listen(PORT, () => {
  console.log(`Sever is listenin on port ${PORT}`);
});
