import Express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import CustomerRoutes from "./Routes/EmpolyeeRoute.js";
import clientRoutes from "./Routes/ClientRoute.js";
import LeadRoutes from "./Routes/LeadRoute.js";
import ServiceRoutes from "./Routes/ServiceRoute.js";
import cors from "cors";
import config from "./config/Config.js";
import path from "path"
import { fileURLToPath } from "url";
import { dirname } from "path";

//configure env
dotenv.config({ path: path.resolve("./config.env")});

// databse config
config();

//rest object
const app = Express();

// path config 
let fileName = fileURLToPath(import.meta.url);
let __dirname = dirname(fileName);


//middelwares
app.use(Express.urlencoded({ extended: true }));
app.use(cors());
app.use(Express.json());
app.use(morgan("dev"));
app.use(Express.static(path.join(__dirname, "public")));

//routes
app.use("/api/v1/crm", CustomerRoutes);
app.use("/api/v1/crm", clientRoutes);
app.use("/api/v1/crm", LeadRoutes);
app.use("/api/v1/crm", ServiceRoutes);

//PORT
const PORT = process.env.PORT || 5000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on mode on port ${PORT}`
  );
});