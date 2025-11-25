import Listing from "../models/Listing.js";

// create new listing
export const createListing = async (req, res) => {
  try {
    const data = req.body;

    // host = logged in user
    data.host = req.user._id;

    const listing = await Listing.create(data);
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
  } catch (err) {
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
  } catch (err) {
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

    // Only host can delete
    if (listing.host.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await listing.deleteOne();
    res.json({ message: "Listing deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
