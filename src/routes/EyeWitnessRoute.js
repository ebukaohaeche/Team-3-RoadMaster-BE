import { Router } from 'express';
import EyeWitnessController from '../controllers/eyewitness.controller';

const router = new Router();

// Route to post eye witness reports
router.post('/eyeWitness', EyeWitnessController.insert);

// Route to get eye witness reports
// consider making this get report a general route to list all reports
// including reports from victims and eyewitness
router.get('/eyeWitness', EyeWitnessController.list);

export default router;