import About from "./components/about";
import Logo from "./components/home";
import Menu from "./components/menu";
import Listen from "./components/listen";
import Shows from "./components/shows";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page() {
  return (
    <>
      <Menu />
      <Logo />
      <About />
      <Listen/>
      <Shows />
      <Contact/>
      <Footer/>
    </>
  );
}
