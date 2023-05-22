import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import { employeeModel } from "../Models/EmpolyeeModel.js";
dotenv.config({ path: path.resolve("./config.env") });

export const employeeTokenCheck = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
     
      if (!token) {
        throw new Error("Token is not given");
      }

      const decoded = JWT.verify(token, process.env.JWT_SECRET);


      req.user = await employeeModel.findById({ _id: decoded._id });

      next();
    } catch (error) {
      return res.status(442).json({ message: "Invalid Auth" });
    }
  } else {
    return res.status(422).json({ message: "No token" });
  }
};