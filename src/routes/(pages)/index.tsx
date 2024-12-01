import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

const index = () => {
  const navigate = useNavigate({ from: "/home" });

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
      <h1 className="text-5xl font-bold">Loading...</h1>
    </div>
  );
};

export const Route = createFileRoute("/(pages)/")({
  component: index,
});
