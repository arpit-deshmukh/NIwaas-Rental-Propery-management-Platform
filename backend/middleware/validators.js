export const validateRegister = (body) => {
  const { name, email, password } = body;
  if (!name || !name.trim()) return { error: "Name is required" };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Valid email is required" };
  if (!password || password.length < 6)
    return { error: "Password must be at least 6 characters" };
  return {};
};

export const validateLogin = (body) => {
  const { email, password } = body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Valid email is required" };
  if (!password) return { error: "Password is required" };
  return {};
};

export const validateListing = (body) => {
  const { title, description, price, location } = body;
  if (!title || !title.trim()) return { error: "Title is required" };
  if (!description || !description.trim())
    return { error: "Description is required" };
  if (!price || isNaN(price) || Number(price) <= 0)
    return { error: "Price must be a positive number" };
  if (!location?.address || !location.address.trim())
    return { error: "Location address is required" };
  return {};
};

export const validateBooking = (body) => {
  const { listingId, startDate, endDate, totalPrice } = body;
  if (!listingId) return { error: "Listing ID is required" };
  if (!startDate) return { error: "Start date is required" };
  if (!endDate) return { error: "End date is required" };
  if (new Date(startDate) >= new Date(endDate))
    return { error: "End date must be after start date" };
  if (!totalPrice || isNaN(totalPrice) || Number(totalPrice) <= 0)
    return { error: "Total price must be a positive number" };
  return {};
};
