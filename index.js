import express from "express";
import morgan from "morgan"; //log
import helmet from "helmet"; //Security
import cookieParser from "cookie-parser"; //Save User data to Cookie
import bodyParser from "body-parser"; //Get Object from body

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from Mine");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser()); //The Way Understand Cookie
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); //The Way Server How to Understand Data from User
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
