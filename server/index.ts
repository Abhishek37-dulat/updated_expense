import express, { Express } from "express";
import cors from "cors";
import sequelize from "./utils/database";
import expense from "./routes/expenseRoute";
import user from "./routes/userRoute";
import payment from "./routes/paymentRoute";
import leaderBoard from "./routes/leaderBoardRoute";
import dotenv from "dotenv";

class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.syncDatabase();
    this.loadEnv();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/api/user", user);
    this.app.use("/api/exp", expense);
    this.app.use("/api/payment", payment);
    this.app.use("/api/leader", leaderBoard);
  }

  private syncDatabase(): void {
    sequelize
      .sync()
      .then(() => {
        this.startServer();
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  private startServer(): void {
    const port = process.env.PORT || 8001;
    this.app.listen(port, () => {
      console.info("Server started on port: ", port);
    });
  }
  private loadEnv(): void {
    dotenv.config();
    console.log("Environment variables loaded");
    console.warn("Warning: Ensure sensitive info is properly handled");
  }
}

new App();
