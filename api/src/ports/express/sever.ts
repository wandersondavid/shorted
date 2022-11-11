import express from "express";
import cors from "cors";
import { HandlerError,  HandlerErrorNotFound,  shortUrlRoutes } from "./modules";

const app = express();
const PORT = process.env["PORT"];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", shortUrlRoutes);

app.use(HandlerErrorNotFound)
app.use(HandlerError)

app.listen(PORT, () => {
  console.log(`Sever is listenin on port ${PORT}`);
});
