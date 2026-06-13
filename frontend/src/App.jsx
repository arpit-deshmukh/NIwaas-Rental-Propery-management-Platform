import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Listing from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";

import CreateListing from "./pages/CreateListing";

import Account from "./pages/Account";
import MyListings from "./pages/MyListing";
import EditListing from "./pages/EditListing";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/listing/:id" element={<ListingDetails />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/account" element={<Account />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="/edit-listing/:id" element={<EditListing />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
