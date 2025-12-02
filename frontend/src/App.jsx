import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-medium">Frontend is running...</h2>
        <div className="bg-red-500 text-white p-3">Tailwind OK</div>

      </div>
    </div>
  );
}

export default App;
