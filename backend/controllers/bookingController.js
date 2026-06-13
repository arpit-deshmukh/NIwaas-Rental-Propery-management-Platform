import Booking from "../models/Booking.js";
import Listing from "../models/Listing.js";

export const createBooking = async (req, res, next) => {
  try {
    const { listingId, startDate, endDate, totalPrice } = req.body;

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
    next(err);
  }
};

export const getMyBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate(
      "listing"
    );
    res.json(bookings);
  } catch (err) {
    next(err);
  }
};
