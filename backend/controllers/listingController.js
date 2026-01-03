import Listing from "../models/Listing.js";
import { geocodeAddress } from "../utils/geocode.js";

// create listing
export const createListing = async (req, res) => {
  try {
    const { title, description, price, location, images } = req.body;

    let coords = null;
    if (location?.address) {
      coords = await geocodeAddress(location.address);
    }

    const listing = await Listing.create({
      title,
      description,
      price,
      images,
      host: req.user._id,
      location: {
        address: location.address,
        lat: coords?.lat || null,
        lng: coords?.lng || null,
      },
    });

    res.status(201).json(listing);
  } catch (err) {
    console.error("Create Listing Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// get all listings
export const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.json(listings);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// get listing by id
export const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.json(listing);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// delete listing
export const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.host.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await listing.deleteOne();
    res.json({ message: "Listing deleted" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// update listing
export const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.host.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    if (req.body.location?.address) {
      let coords = null;

      try {
        coords = await geocodeAddress(req.body.location.address);
      } catch (err) {
        console.error("Geocoding Error:", err.message);
      }

      req.body.location = {
        address: req.body.location.address,
        lat: coords?.lat ?? listing.location.lat,
        lng: coords?.lng ?? listing.location.lng,
      };
    }

    const updated = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error("Update Listing Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
