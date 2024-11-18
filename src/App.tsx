import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateToHome = setTimeout(() => {
      navigate({ to: "/home" });
    }, 2000);

    return () => {
      clearTimeout(navigateToHome);
    };
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800">
        The app is loading...
      </h1>
    </div>
  );
}

export default App;
