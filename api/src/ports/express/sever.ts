import express from "express";
import cors from "cors";
import {
  HandlerError,
  HandlerErrorNotFound,
  shortUrlRoutes,
} from "./modules";
import timeout from "connect-timeout";

const PORT = process.env["PORT"];
const app = express();

app.use(timeout("60s"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", shortUrlRoutes);

app.listen(PORT, () => {
  console.log(`Sever is listenin on port ${PORT}`);
});

app.use(HandlerErrorNotFound);
app.use(HandlerError);
