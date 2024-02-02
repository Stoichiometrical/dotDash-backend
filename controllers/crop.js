

// Controller to submit crop details
import CropProfile from "../models/Crop.js";

export const submitCropDetails = async (req, res) => {
    try {
        const cropDetails = req.body;
        const newCropProfile = await CropProfile.create(cropDetails);
        res.status(201).json(newCropProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getCrops = async (req, res) => {
    try {
        const cropDetails = req.body;
        const crops = await CropProfile.find();
        res.status(201).json(crops);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Controller to get crop details by CropName
export const getCropDetailsByName = async (req, res) => {
    try {
        const cropName = req.params.cropName;
        const cropProfile = await CropProfile.findOne({ cropName });
        if (!cropProfile) {
            res.status(404).json({ message: 'Crop not found' });
            return;
        }
        res.status(200).json(cropProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
