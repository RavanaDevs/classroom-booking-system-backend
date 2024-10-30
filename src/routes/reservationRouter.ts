import express from "express";
import { createReservation, getAllReservations } from "../controllers/reservationControllers";

const reservationRouter = express.Router();

reservationRouter.post("/", createReservation);
reservationRouter.get("/all", getAllReservations);

export default reservationRouter;