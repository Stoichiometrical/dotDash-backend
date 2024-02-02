import mongoose from 'mongoose';

const cropProfileSchema = new mongoose.Schema({
    cropName: {
        type: String,
        required: true,
        unique: true,
    },
    soilAnalysis: String,
    plantingPractices: String,
    fertilizationMethods: String,
    pestDiseaseManagement: String,
    irrigation: String,
});

const CropProfile = mongoose.model('CropProfile', cropProfileSchema);

export default CropProfile;
