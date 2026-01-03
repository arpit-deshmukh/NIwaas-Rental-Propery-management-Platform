import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import ListingDetails from "./pages/ListingDetails";

import CreateListing from "./pages/CreateListing";

import Account from "./pages/Account";
import MyListings from "./pages/MyListing";


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





      </Routes>
    </BrowserRouter>
  );
}

export default App;
