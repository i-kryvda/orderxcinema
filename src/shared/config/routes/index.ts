export const routes = {
  home: "/",
  movies: {
    base: "/movies",
    param: "/movies/:id",
    detail: (id: string | number) => `/movies/${id}`,
  },
  favorites: "/favorites",
  notFound: "*",
};
