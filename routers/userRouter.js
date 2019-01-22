import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (req, res) =>
  res.send("Change Password")
);

export default userRouter;
// MVC       DATABASE , TEMPLEATE , FUNCTION

// SameThing

/*
function alalal() {
    return true;
}

alalaldd = () => {
    return true;
}

aldkfjadflj = () => true;
*/
