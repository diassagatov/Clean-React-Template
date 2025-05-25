import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useStorage } from "./store";

const DemoElement = () => {
  const { penguins, addPenguin } = useStorage();

  return (
    <div className="h-screen w-screen bg-blue-100 dark:bg-gray-800 text-gray-800 dark:text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">Penguin Crowd</h1>
      <p className="mb-4 text-lg">
        Current Penguins: <span className="font-semibold">{penguins}</span>
      </p>
      <button
        onClick={addPenguin}
        className="mb-6 rounded-xl bg-indigo-600 px-4 py-2 text-white font-medium shadow-md hover:bg-indigo-700"
      >
        + Penguin
      </button>
      <div className="flex flex-wrap justify-center w-[600px] h-[300px] items-center">
        {Array.from({ length: penguins }).map((_, i) => (
          <span key={i}>🐧</span>
        ))}
      </div>
    </div>
  );
};

const NotFound = () => (
  <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <h1 className="text-6xl font-extrabold mb-4">404</h1>
    <p className="text-xl mb-6">Page not found</p>
    <Link
      to="/"
      className="rounded-xl bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-md hover:bg-indigo-700 focus:outline-none"
    >
      Go home
    </Link>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoElement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
