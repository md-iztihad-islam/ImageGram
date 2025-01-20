//this api router will be triggered when any request starting with /api comes

import express from "express";
import v1Router from "./v1/v1Router.js";
import v2Router from "./v2/v2Router.js";

const router = express.Router();

router.use("/v1", v1Router);
router.use("/v2", v2Router);

export default router;