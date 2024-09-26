
import express from "express"
import { updatedDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from "../Controllers/doctorController.js"
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js'

const router = express.Router();

// here to implement nested router
router.use("/:doctorId/reviews", reviewRouter);

// hence these two can't be restrict because they will be used for search
router.get("/", getAllDoctor);
router.get("/:id", getSingleDoctor);
// restricted for only doctor access
router.put("/:id",authenticate, restrict(["doctor"]), updatedDoctor);
router.delete("/:id",authenticate, restrict(["doctor"]), deleteDoctor);

export default router;