import Booking from "../models/Booking.js";
import Listing from "../models/Listing.js";

// create booking
export const createBooking = async (req, res) => {
  try {
    const { listingId, startDate, endDate, totalPrice } = req.body;

    if (!listingId || !startDate || !endDate || !totalPrice) {
      return res.status(400).json({ message: "Missing booking fields" });
    }

    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    const booking = await Booking.create({
      user: req.user._id,
      listing: listingId,
      startDate,
      endDate,
      totalPrice,
    });

    res.status(201).json(booking);
  } catch (err) {
    console.error("Create Booking Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// get all bookings for loggeIn
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("listing");

    res.json(bookings);
  } catch (err) {
    console.error("Get Bookings Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
