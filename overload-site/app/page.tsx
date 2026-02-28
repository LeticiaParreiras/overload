import About from "./components/about";
import Logo from "./components/home";
import Menu from "./components/menu";
import Listen from "./components/listen";
import Shows from "./components/shows";

export default function Page() {
  return (
    <>
      <Menu />
      <Logo />
      <About />
      <Listen/>
      <Shows />
    </>
  );
}
