// import { Footer } from "../../components/organisms/footer/Footer";
import { Footer } from "@components/organisms/footer/Footer";
import { Header } from "@components/organisms/header/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
