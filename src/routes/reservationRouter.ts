import express from "express";
import { createReservation, deleteReservation, getAllReservations, updateReservation} from "../controllers/reservationControllers";

const reservationRouter = express.Router();

reservationRouter.post("/", createReservation);
reservationRouter.get("/all", getAllReservations);
reservationRouter.put("/", updateReservation);
reservationRouter.delete("/", deleteReservation);

export default reservationRouter;