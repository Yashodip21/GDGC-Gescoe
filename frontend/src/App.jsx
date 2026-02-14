import React, { useState } from "react";
import Loader from "./components/Loader";
import { BeamsBackground } from "./components/ui/beams-background";
import { HomePage } from "./pages/HomePage";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full">

      {/* Background */}
      <BeamsBackground className="fixed inset-0 -z-10" />
      {/* Main Content */}
      <div className={`relative z-10 transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <HomePage />
      </div>

      {/* Loader */}
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}
    </div>
  );
};

export default App;
