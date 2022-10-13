import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocumention from "./docs/swagger.js";

const app = express();
app.use(express.json());
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocumention));

const port =  5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
