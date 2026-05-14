import { Route, Routes } from "react-router-dom";
import { Home } from "@components/pages/home/Home";
import { Layout } from "@components/templates/layout/Layout";
import { MovieDetailsPage } from "@components/pages/movie-details";
import { NotFoundPage } from "@components/pages/not-found/NotFoundPage";
import { FavoritesPage } from "@components/pages/favorites/FavoritesPage";
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
