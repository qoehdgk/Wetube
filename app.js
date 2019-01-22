import express from "express";
import morgan from "morgan"; //log
import helmet from "helmet"; //Security
import cookieParser from "cookie-parser"; //Save User data to Cookie
import bodyParser from "body-parser"; //Get Object from body
import { userRouter } from "./router"; //Just const userRouter export

const app = express();

const handleHome = (req, res) => res.send("Hello from Mine");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser()); //The Way Understand Cookie
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); //The Way Server How to Understand Data from User
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter); //if request User , Go userRouter /

export default app;
