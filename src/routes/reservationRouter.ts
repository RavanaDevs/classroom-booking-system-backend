import express from "express";
import { createReservation } from "../controllers/reservationControllers";

const reservationRouter = express.Router();

reservationRouter.post("/", createReservation);

export default reservationRouter;