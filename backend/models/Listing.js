import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    // location object with map ccordinates 
    location: {
      address: { type: String, required: true },
      lat: Number,
      lng: Number
    },

    images: {
      type: [String], // array of Cloudinary URLs
      default: [],
    },

    amenities: {
      type: [String],
      default: [],
    },

    ///user creating listing
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Listing", ListingSchema);
