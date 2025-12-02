import { useState } from "react";
import api from "../../services/api";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Logged in successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center mt-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border p-6 rounded-lg shadow-sm"
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button className="w-full bg-black text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
