import FotoWildan from "./assets/PotoWildan.jpg"
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Punya Fathan</h1>
      <img
        src="https://via.placeholder.com/800x400"
        alt="Foto Besar"
        className="w-full max-w-4xl rounded-2xl shadow-lg"
      />

      <h2 className="text-4xl font-bold text-gray-800 mb-6">Punya Wildan</h2>
      <img src={FotoWildan} alt="" />
    </div>
  );
}
 