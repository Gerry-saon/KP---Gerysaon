import express from "express";
import cors from "cors";
import router from "./router/router,js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () =>
consolo.log('server sedang berjalan di localhost'));