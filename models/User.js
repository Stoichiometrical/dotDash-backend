import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountType: { type: String, enum: ["Farmer", "Admin"], default:'Farmer' },
});



export default mongoose.model("User",userSchema);
