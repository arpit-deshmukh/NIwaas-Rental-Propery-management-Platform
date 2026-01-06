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

 
    location: {
      address: { type: String, required: true },
      lat: Number,
      lng: Number
    },

    images: {
      type: [String],
      default: [],
    },

    amenities: {
      type: [String],
      default: [],
    },


    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Listing", ListingSchema);
