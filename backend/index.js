import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import feedbackRoutes from "./routes/FeedbackRoutes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

// Apply CORS middleware before defining routes
app.use(
  cors({
    origin: "https://bapu-ayurvedic.vercel.app", // Allow requests from frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port 3000`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!", err);
  });

app.get("/", (req, res) => {
  res.send("hello gaaru!!");
});

app.use("/api/feedback", feedbackRoutes);
