import express from "express";
import morgan from "morgan"; //log
import helmet from "helmet"; //Security
import cookieParser from "cookie-parser"; //Save User data to Cookie
import bodyParser from "body-parser"; //Get Object from body
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(cookieParser()); //The Way Understand Cookie
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); //The Way Server How to Understand Data from User
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter); //if request User , Go userRouter /
app.use("/video", videoRouter);

export default app;
