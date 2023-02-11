import express from "express";
import cors from "cors";
import timeout from "connect-timeout";
import { shortUrlRoutes } from "./modules";
import { HandlerError, HandlerErrorNotFound } from "./modules";

const PORT = process.env["PORT"];
const app = express();

app.use(timeout("60s"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", shortUrlRoutes);

app.use(HandlerErrorNotFound);
app.use(HandlerError);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
