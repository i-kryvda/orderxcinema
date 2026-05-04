import { Footer } from "@widgets/footer/Footer";
import { Header } from "@widgets/header/Header";
import { MoviesList } from "@widgets/movies-list/ui/MoviesList";
import "./App.scss";

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <MoviesList />
      </main>
      <Footer />
    </>
  );
}

//----------------------------------------------------------

//------------------------------------
