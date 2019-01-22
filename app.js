import express from "express";
import morgan from "morgan"; //log
import helmet from "helmet"; //Security
import cookieParser from "cookie-parser"; //Save User data to Cookie
import bodyParser from "body-parser"; //Get Object from body
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser()); //The Way Understand Cookie
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); //The Way Server How to Understand Data from User
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); //if request User , Go userRouter /
app.use(routes.videos, videoRouter);

export default app;
