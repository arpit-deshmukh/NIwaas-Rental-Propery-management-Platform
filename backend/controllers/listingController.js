import Listing from "../models/Listing.js";
import { geocodeAddress } from "../utils/geocode.js";
import { getRandomImages } from "../utils/defaultImages.js";

export const createListing = async (req, res, next) => {
  try {
    const { title, description, price, location, images } = req.body;

    let coords = null;
    if (location?.address) {
      coords = await geocodeAddress(location.address);
    }

    const finalImages =
      images && images.length > 0 ? images : getRandomImages();

    const listing = await Listing.create({
      title,
      description,
      price,
      host: req.user._id,
      images: finalImages,
      location: {
        address: location.address,
        lat: coords?.lat || null,
        lng: coords?.lng || null,
      },
    });

    res.status(201).json(listing);
  } catch (err) {
    next(err);
  }
};

export const getAllListings = async (req, res, next) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.json(listings);
  } catch (err) {
    next(err);
  }
};

export const getListingById = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.json(listing);
  } catch (err) {
    next(err);
  }
};

export const deleteListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.host.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await listing.deleteOne();
    res.json({ message: "Listing deleted" });
  } catch (err) {
    next(err);
  }
};

export const updateListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.host.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (req.body.location?.address) {
      let coords = null;
      try {
        coords = await geocodeAddress(req.body.location.address);
      } catch (geocodeErr) {
        console.error("Geocoding Error:", geocodeErr.message);
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
      { new: true, runValidators: true }
    );

    res.json(updated);
  } catch (err) {
    next(err);
  }
};
