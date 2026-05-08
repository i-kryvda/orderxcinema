// import { AppRouter } from "@app/routes";
import { AppRouter } from "@app/routes";
import { BrowserRouter } from "react-router-dom";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
