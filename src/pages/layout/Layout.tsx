import { Footer } from "@widgets/footer/Footer";
import { Header } from "@widgets/header/Header";
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
