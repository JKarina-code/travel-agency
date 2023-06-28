import express from "express";
import {
  pageStart,
  pageWe,
  pageTravels,
  pageTestimonials,
  pageDetailsTravel,
} from "../controllers/pagesController.js";
import { saveTestimonials } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", pageStart);

router.get("/we", pageWe);

router.get("/travels", pageTravels);
router.get("/travels/:slug", pageDetailsTravel);
router.get("/testimonials", pageTestimonials);
router.post("/testimonials", saveTestimonials);

export default router;
