import express from "express";
import { placeOrder, getOrderHistory } from "../controller/order.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/placeOrder",protectRoute,placeOrder)

router.get("/orderHistory",protectRoute,getOrderHistory)

export default router;