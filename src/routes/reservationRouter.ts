import express from "express";
import { createReservation, getAllReservations, updateReservation} from "../controllers/reservationControllers";

const reservationRouter = express.Router();

reservationRouter.post("/", createReservation);
reservationRouter.get("/all", getAllReservations);
reservationRouter.put("/", updateReservation);

export default reservationRouter;