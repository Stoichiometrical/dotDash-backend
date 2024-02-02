import express from 'express';
import {getCropDetailsByName, getCrops, submitCropDetails} from "../controllers/crop.js";

const router = express.Router();

// Route to submit crop details
router.post('/submit', submitCropDetails);

// Route to get crop details by CropName
router.get('/get/:cropName', getCropDetailsByName);

router.get('/', getCrops);

export default router;
