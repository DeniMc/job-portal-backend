import express from 'express';
import { addNewJob, getAllJobs } from '../controllers/job.controller.js';
import { protectRoute, restrictTo } from '../util/protect_route.js';
const router = express.Router();


router.route('/')
    .get(protectRoute, getAllJobs)
    .post(protectRoute, addNewJob);

    //restrictTo('admin')






export default router;