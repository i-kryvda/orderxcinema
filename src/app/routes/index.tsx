import { Route, Routes } from "react-router-dom";
import { Home } from "@pages/home/Home";
import { Layout } from "@pages/layout/Layout";
import { MovieDetailsPage } from "@pages/movie-details/ui";
import { NotFoundPage } from "@pages/not-found/NotFoundPage";
import { FavoritesPage } from "@pages/favorites/FavoritesPage";
import { routes } from "@shared/config/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.movies.param} element={<MovieDetailsPage />} />
        <Route path={routes.notFound} element={<NotFoundPage />} />
        <Route path={routes.favorites} element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};
