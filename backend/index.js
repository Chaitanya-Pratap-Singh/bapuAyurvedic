import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";
import feedbackRoutes from "./routes/FeedbackRoutes.js"
dotenv.config({
  path: "./.env",
});
const app = express();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at port 3000`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!", err);
  });

app.use(express.json());
app.use(cookieParser());

//routes 

app.use("/api/feedback", feedbackRoutes);
