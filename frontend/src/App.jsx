import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import ListingDetails from "./pages/ListingDetails";

import CreateListing from "./pages/CreateListing";

import Account from "./pages/Account";
import MyListings from "./pages/MyListing";
import EditListing from "./pages/EditListing";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/create-listing" element={<CreateListing />} />

        <Route path="/account" element={<Account />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/edit-listing/:id" element={<EditListing />} />






      </Routes>
           <Footer />
    </BrowserRouter>
  );
}

export default App;
