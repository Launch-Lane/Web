import { createFileRoute } from "@tanstack/react-router";

const index = () => {
  return <div>This index page is correctly rendering</div>;
};

export const Route = createFileRoute("/(pages)/home/")({
  component: index,
});
