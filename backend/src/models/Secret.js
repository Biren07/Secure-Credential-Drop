import mongoose from "mongoose";

const secretSchema = new mongoose.Schema({
  encryptedText: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  isBurned: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

secretSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model("Secret", secretSchema);